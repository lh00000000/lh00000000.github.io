import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const ROOT = process.cwd();
const PORT = 3000;

app.use(express.json({ limit: "20mb" }));

function safeResolveFromRoot(requestPath: string): string | null {
  const clean = decodeURIComponent(requestPath.split("?")[0]);
  const relative = clean.replace(/^\/+/, "");
  const fullPath = path.resolve(ROOT, relative || "index.html");

  if (fullPath === ROOT || fullPath.startsWith(ROOT + path.sep)) {
    return fullPath;
  }

  return null;
}

function injectEditorScript(html: string): string {
  const tag = `<script src="/__edit.js"></script>`;

  if (html.includes(tag)) return html;

  if (html.match(/<\/body>/i)) {
    return html.replace(/<\/body>/i, `${tag}</body>`);
  }

  return `${html}\n${tag}`;
}

app.get("/__edit.js", (_req, res) => {
  res.type("application/javascript").send(EDITOR_SCRIPT);
});

app.post("/__save", (req, res) => {
  const body = req.body as { html?: string; filePath?: string };

  if (typeof body.html !== "string" || typeof body.filePath !== "string") {
    res.status(400).json({ ok: false, error: "missing html or filePath" });
    return;
  }

  const fullPath = safeResolveFromRoot(body.filePath);

  if (!fullPath) {
    res.status(400).json({ ok: false, error: "invalid path" });
    return;
  }

  if (!fullPath.endsWith(".html")) {
    res.status(400).json({ ok: false, error: "can only save .html files" });
    return;
  }

  try {
    fs.writeFileSync(fullPath, body.html, "utf8");
    res.json({ ok: true });
  } catch (error) {
    console.error("save failed:", error);
    res.status(500).json({ ok: false, error: "failed to write file" });
  }
});

app.get("/{*splat}", (req, res, next) => {
  const fullPath = safeResolveFromRoot(req.path);

  if (!fullPath) {
    res.status(400).send("invalid path");
    return;
  }

  try {
    if (!fs.existsSync(fullPath)) {
      return next();
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const indexPath = path.join(fullPath, "index.html");
      if (fs.existsSync(indexPath)) {
        const html = fs.readFileSync(indexPath, "utf8");
        res.type("html").send(injectEditorScript(html));
        return;
      }

      res.status(404).send("directory has no index.html");
      return;
    }

    if (fullPath.endsWith(".html")) {
      const html = fs.readFileSync(fullPath, "utf8");
      res.type("html").send(injectEditorScript(html));
      return;
    }

    res.sendFile(fullPath);
  } catch (error) {
    console.error("serve failed:", error);
    res.status(500).send("server error");
  }
});

app.use((_req, res) => {
  res.status(404).send("not found");
});

app.listen(PORT, () => {
  console.log(`edit server running`);
  console.log(`root: ${ROOT}`);
  console.log(`open: http://localhost:${PORT}`);
});

const EDITOR_SCRIPT = String.raw`
(() => {
  if (window.__LOCAL_HTML_EDITOR__) return;
  window.__LOCAL_HTML_EDITOR__ = true;

  let editing = false;
  let dirty = false;
  let draggedEl = null;
  let saveTimer = null;

  const EDITABLE_TEXT_SELECTOR = [
    "p",
    "h1", "h2", "h3", "h4", "h5", "h6",
    "li",
    "blockquote",
    "figcaption",
    "caption",
    "td",
    "th",
    "span"
  ].join(",");

  const IGNORE_SELECTOR = [
    "#__edit_toolbar",
    "#__edit_drop_indicator",
    "script",
    "style",
    "link",
    "meta",
    "head",
    "html",
    "body"
  ].join(",");

  const toolbar = document.createElement("div");
  toolbar.id = "__edit_toolbar";
  Object.assign(toolbar.style, {
    position: "fixed",
    top: "12px",
    right: "12px",
    zIndex: "2147483647",
    display: "flex",
    gap: "8px",
    padding: "8px",
    background: "rgba(0,0,0,0.92)",
    color: "#fff",
    fontFamily: "monospace",
    fontSize: "13px",
    borderRadius: "8px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
    alignItems: "center"
  });

  const status = document.createElement("span");
  status.textContent = "view";

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "save";
  saveBtn.disabled = true;

  const reloadBtn = document.createElement("button");
  reloadBtn.textContent = "reload";

  for (const btn of [editBtn, saveBtn, reloadBtn]) {
    Object.assign(btn.style, {
      background: "#222",
      color: "#fff",
      border: "1px solid #666",
      borderRadius: "6px",
      padding: "6px 10px",
      cursor: "pointer",
      fontFamily: "monospace",
      fontSize: "13px"
    });
    btn.addEventListener("mouseenter", () => {
      btn.style.background = "#333";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.background = "#222";
    });
  }

  toolbar.append(status, editBtn, saveBtn, reloadBtn);
  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(toolbar);
  });
  if (document.body) {
    document.body.appendChild(toolbar);
  }

  const dropIndicator = document.createElement("div");
  dropIndicator.id = "__edit_drop_indicator";
  Object.assign(dropIndicator.style, {
    height: "4px",
    background: "red",
    margin: "4px 0",
    borderRadius: "2px",
    pointerEvents: "none"
  });

  function markDirty() {
    dirty = true;
    updateStatus();
  }

  function updateStatus() {
    const mode = editing ? "edit" : "view";
    const changed = dirty ? " • dirty" : "";
    status.textContent = mode + changed;
    saveBtn.disabled = !editing;
  }

  function shouldIgnoreElement(el) {
    return !(el instanceof HTMLElement) || !!el.closest(IGNORE_SELECTOR);
  }

  function makeTextEditable() {
    document.querySelectorAll(EDITABLE_TEXT_SELECTOR).forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      if (shouldIgnoreElement(el)) return;
      el.contentEditable = "true";
      el.spellcheck = true;
      el.dataset.__editText = "1";

      el.addEventListener("input", markDirty);
      el.addEventListener("focus", () => {
        el.style.outline = "1px dashed rgba(0, 128, 255, 0.8)";
      });
      el.addEventListener("blur", () => {
        el.style.outline = "";
      });
    });
  }

  function clearTextEditable() {
    document.querySelectorAll("[data-__edit-text='1']").forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      el.removeAttribute("contenteditable");
      el.removeAttribute("spellcheck");
      el.style.outline = "";
      delete el.dataset.__editText;
    });
  }

  function isDraggableCandidate(el) {
    if (!(el instanceof HTMLElement)) return false;
    if (shouldIgnoreElement(el)) return false;
    if (el === toolbar || el === dropIndicator) return false;
    if (el.tagName === "IMG") return true;
    if (el.tagName === "FIGURE") return true;
    if (el.tagName === "P") return true;
    if (el.tagName === "LI") return true;
    if (el.tagName.match(/^H[1-6]$/)) return true;
    if (el.tagName === "BLOCKQUOTE") return true;
    return false;
  }

  function attachDragHandlers() {
    document.querySelectorAll("body *").forEach((node) => {
      if (!(node instanceof HTMLElement)) return;
      if (!isDraggableCandidate(node)) return;

      node.draggable = true;
      node.dataset.__editDrag = "1";

      node.addEventListener("dragstart", () => {
        draggedEl = node;
        node.style.opacity = "0.5";
      });

      node.addEventListener("dragend", () => {
        node.style.opacity = "";
        draggedEl = null;
        dropIndicator.remove();
      });

      node.addEventListener("dragover", (e) => {
        if (!editing) return;
        e.preventDefault();

        if (!node.parentNode) return;

        const rect = node.getBoundingClientRect();
        const before = e.clientY < rect.top + rect.height / 2;

        if (before) {
          node.parentNode.insertBefore(dropIndicator, node);
        } else {
          node.parentNode.insertBefore(dropIndicator, node.nextSibling);
        }
      });

      node.addEventListener("drop", (e) => {
        if (!editing) return;
        e.preventDefault();

        if (!draggedEl || !dropIndicator.parentNode) return;
        if (draggedEl === node) return;

        dropIndicator.parentNode.insertBefore(draggedEl, dropIndicator);
        dropIndicator.remove();
        markDirty();
      });
    });
  }

  function clearDragHandlers() {
    document.querySelectorAll("[data-__edit-drag='1']").forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      el.draggable = false;
      delete el.dataset.__editDrag;
      el.style.opacity = "";
    });
    dropIndicator.remove();
  }

  function enableImageResizing() {
    document.querySelectorAll("img").forEach((img) => {
      if (!(img instanceof HTMLImageElement)) return;
      if (shouldIgnoreElement(img)) return;

      img.dataset.__editImage = "1";
      img.style.resize = "both";
      img.style.overflow = "auto";
      img.style.outlineOffset = "2px";

      img.addEventListener("click", () => {
        if (!editing) return;
        img.style.outline = "1px dashed rgba(255, 128, 0, 0.9)";
      });

      const observer = new ResizeObserver(() => {
        if (editing) markDirty();
      });
      observer.observe(img);
      img.__editResizeObserver = observer;
    });
  }

  function clearImageResizing() {
    document.querySelectorAll("[data-__edit-image='1']").forEach((img) => {
      if (!(img instanceof HTMLImageElement)) return;
      img.style.outline = "";
      delete img.dataset.__editImage;
      if (img.__editResizeObserver) {
        img.__editResizeObserver.disconnect();
        delete img.__editResizeObserver;
      }
    });
  }

  function enableEditing() {
    editing = true;
    makeTextEditable();
    attachDragHandlers();
    enableImageResizing();
    document.body.dataset.__editing = "1";
    updateStatus();
  }

  function disableEditing() {
    editing = false;
    clearTextEditable();
    clearDragHandlers();
    clearImageResizing();
    delete document.body.dataset.__editing;
    updateStatus();
  }

  function stripEditorArtifacts(docEl) {
    docEl.querySelectorAll("#__edit_toolbar").forEach((el) => el.remove());
    docEl.querySelectorAll("#__edit_drop_indicator").forEach((el) => el.remove());
    docEl.querySelectorAll('script[src="/__edit.js"]').forEach((el) => el.remove());

    docEl.querySelectorAll("[contenteditable]").forEach((el) => {
      el.removeAttribute("contenteditable");
    });

    docEl.querySelectorAll("[spellcheck]").forEach((el) => {
      el.removeAttribute("spellcheck");
    });

    docEl.querySelectorAll("[data-__edit-text]").forEach((el) => {
      el.removeAttribute("data-__edit-text");
    });

    docEl.querySelectorAll("[data-__edit-drag]").forEach((el) => {
      el.removeAttribute("data-__edit-drag");
      el.removeAttribute("draggable");
      el.style.opacity = "";
    });

    docEl.querySelectorAll("[data-__edit-image]").forEach((el) => {
      el.removeAttribute("data-__edit-image");
      el.style.outline = "";
      el.style.outlineOffset = "";
      el.style.overflow = "";
    });

    docEl.querySelectorAll("[data-__editing]").forEach((el) => {
      el.removeAttribute("data-__editing");
    });

    docEl.querySelectorAll("*").forEach((el) => {
      if (!(el instanceof HTMLElement)) return;

      if (el.style.outline === "") el.style.removeProperty("outline");
      if (el.style.outlineOffset === "") el.style.removeProperty("outline-offset");
      if (el.style.opacity === "") el.style.removeProperty("opacity");

      if (el.getAttribute("style") === "") {
        el.removeAttribute("style");
      }
    });
  }

  async function save() {
    const clone = document.documentElement.cloneNode(true);
    stripEditorArtifacts(clone);

    const html = "<!DOCTYPE html>\\n" + clone.outerHTML;

    const response = await fetch("/__save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        html,
        filePath: location.pathname
      })
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "save failed");
    }

    dirty = false;
    updateStatus();
  }

  function scheduleAutosave() {
    if (!editing) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async () => {
      try {
        await save();
      } catch (error) {
        console.error(error);
      }
    }, 1500);
  }

  editBtn.addEventListener("click", () => {
    if (editing) {
      disableEditing();
      editBtn.textContent = "edit";
    } else {
      enableEditing();
      editBtn.textContent = "done";
    }
  });

  saveBtn.addEventListener("click", async () => {
    try {
      await save();
    } catch (error) {
      console.error(error);
      alert("save failed");
    }
  });

  reloadBtn.addEventListener("click", () => {
    location.reload();
  });

  window.addEventListener("keydown", async (e) => {
    const isSave = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s";
    if (isSave) {
      e.preventDefault();
      try {
        await save();
      } catch (error) {
        console.error(error);
        alert("save failed");
      }
      return;
    }

    if (e.key === "Escape" && editing) {
      disableEditing();
      editBtn.textContent = "edit";
    }
  });

  const mutationObserver = new MutationObserver(() => {
    if (!editing) return;
    markDirty();
    scheduleAutosave();
  });

  mutationObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  updateStatus();
})();
`;