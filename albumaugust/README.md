# Blog post workflow (build & publish)

This folder was part of a blog that used a simple file-based workflow. The same layout works whether the folder lives in the main repo or is **detached** and served on its own. The only long-term contract is **HTML and static assets**—dev tooling (Vite, React, etc.) may change over time.

---

## `publish00000000.json`

**Purpose:** Tells the blog index how to list this post and how to reach it.

- **Location:** This file must live in the **root of this folder** (same level as `index.html` or your built output).
- **Format:** JSON.

**Fields:**

| Field      | Required | Description |
|-----------|----------|-------------|
| `tags`    | No       | Array of strings, e.g. `["#personal", "#event"]`. Used for filtering and display on the blog index. |
| `redirect`| No       | If set, the blog index will link to this URL instead of the folder path. Use for posts that live elsewhere (e.g. Notion, external site). The folder name is still shown as the post label. |

**Examples:**

- Local post (content in this folder):
  ```json
  { "tags": ["#personal", "#event"] }
  ```
- Redirect to an external URL:
  ```json
  { "tags": ["#personal"], "redirect": "https://example.com/my-post" }
  ```

When **statically served**, this folder should be exposed at a path that matches the folder name (e.g. `/2019-06-19-mypost`). The blog index uses either that path or `redirect` as the post link.

---

## `build00000000.sh` (optional)

**Purpose:** Per-post build script. Used to compile a dev setup (e.g. Vite, npm) into static HTML/CSS/JS in this folder so the result can be served anywhere.

- **Location:** Root of this folder.
- **When it runs (in the original repo):** The main blog build (`scripts/build-blog-static.js`) only runs this script for directories that have **recent git changes** (commits in the last 1 day). That avoids rebuilding every post on every run.
- **When detached:** You can run it yourself from this folder:
  ```bash
  chmod +x build00000000.sh
  ./build00000000.sh
  ```
  Run from the **folder that contains** `build00000000.sh` (the script should `cd` to its own directory).

**What it does:** Depends on the post. Common pattern:

- Build from a `dev/` (or similar) subfolder (e.g. `npm install` + `npm run build`).
- Copy built assets (e.g. `dev/dist/*`) into the folder root so the result is a flat set of `index.html`, JS, CSS, and other static files.
- Optionally generate or rewrite `index.html` (e.g. inject hashed asset paths, service worker).

**Important:** There is **no single standard** for what’s inside `build00000000.sh`. Different posts may use different stacks (Vite, plain JS, etc.). The only requirement for the blog is that after building (or without building, if there’s no script), this folder is **statically servable** and uses normal HTML/CSS/JS.

An archived copy of the **central** blog build script (that used to run in the repo and in CI) is in this folder as `build-blog-static-archived.js`. It is for reference only; it must be run from the repository root, not from this folder.

---

## Serving this folder

- **In the original repo:** The site build collects all such folders, reads each `publish00000000.json`, and serves the folder contents at a path derived from the folder name.
- **Detached:** Serve this folder as a static site (e.g. `npx serve .`, or any static host). Ensure the server is configured so that the URL path for this folder matches how the blog index expects to link to it (or use `redirect` in `publish00000000.json` to point elsewhere).

No server-side logic is required; everything is static HTML and assets.
