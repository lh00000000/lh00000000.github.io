#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PUBLISH_FILE = "publish00000000.json";
const README_SOURCE = path.join(__dirname, "BLOG-WORKFLOW-README.md");
const README_NAME = "README.md";

const content = fs.readFileSync(README_SOURCE, "utf8");

const items = fs.readdirSync(ROOT);
const dirs = items.filter((item) => {
  const full = path.join(ROOT, item);
  return fs.statSync(full).isDirectory() && fs.existsSync(path.join(full, PUBLISH_FILE));
});

for (const dir of dirs) {
  const readmePath = path.join(ROOT, dir, README_NAME);
  fs.writeFileSync(readmePath, content, "utf8");
  console.log("Wrote:", readmePath);
}

console.log("\nDone. Wrote README.md to", dirs.length, "blog directories.");
