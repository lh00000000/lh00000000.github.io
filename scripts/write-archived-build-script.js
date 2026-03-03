#!/usr/bin/env node
// One-off script: wrote build-blog-static-archived.js into each blog folder.
// scripts/build-blog-static.js was removed; the only copies are now in each blog dir.
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PUBLISH_FILE = "publish00000000.json";
const ARCHIVED_NAME = "build-blog-static-archived.js";

const header = `// ARCHIVED COPY — kept in each blog folder for reference if the folder is detached.
// This was the central blog build script. It must be run from the repository root (not this folder):
//   node scripts/build-blog-static.js
// It: scans all blog dirs, reads publish00000000.json, writes blog/dist/api/*.json, and runs
// build00000000.sh in dirs with recent git changes (1 day). See README.md in this folder.
// -----------------------------------------------------------------------------

`;

const scriptPath = path.join(__dirname, "build-blog-static.js");
if (!fs.existsSync(scriptPath)) {
  console.error("build-blog-static.js was removed. Archived copies are in each blog folder as build-blog-static-archived.js.");
  process.exit(1);
}
const scriptContent = fs.readFileSync(scriptPath, "utf8");
const archivedContent = header + scriptContent;

const items = fs.readdirSync(ROOT);
const dirs = items.filter((item) => {
  const full = path.join(ROOT, item);
  return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, PUBLISH_FILE));
});

for (const dir of dirs) {
  const outPath = path.join(ROOT, dir, ARCHIVED_NAME);
  fs.writeFileSync(outPath, archivedContent, "utf8");
  console.log("Wrote:", outPath);
}

console.log("\nDone. Wrote", ARCHIVED_NAME, "to", dirs.length, "blog directories.");
