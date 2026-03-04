## Cursor Cloud specific instructions

This is a fully static personal website/blog (luminghao.com). There is no backend, no database, and no Docker.

### Serving the site

Run a static file server from the repository root:
```
npx serve . -l 3000 --no-clipboard
```
The homepage is at `/`, the blog listing at `/blog/`, and individual posts at `/<post-directory>/`.

### Project structure

- **Root `package.json`** has zero dependencies. `npm install` at root is a no-op.
- **Blog posts** are date-prefixed directories (e.g. `2025-02-01-monthblog/`) containing static HTML. Each has a `publish00000000.json` for blog index metadata.
- **Some newer posts** (`bday34/dev/`, `albumaugust/dev/`, `2025-07-28-vitetest/dev/`, `2025-02-01-monthblog/dev/`) have Vite + React dev setups. To work on one: `cd <post>/dev && npm install && npm run dev`.
- **`scripts/`** contains Node.js utilities for blog index generation. See `scripts/BLOG-WORKFLOW-README.md`.

### Lint / type-check / build

There is no root-level lint, test, or build. These exist per-post in `dev/` subdirectories:
- `npm run lint` (ESLint) and `npm run type-check` (TypeScript) are defined in post `dev/package.json` files.
- Note: the ESLint config in some posts uses `.eslintrc.json` but ESLint v9 is installed, which expects `eslint.config.js` — lint may fail due to this pre-existing mismatch.
- `npm run build` (Vite build) works correctly in post `dev/` directories.

### CDN dependencies

The homepage and blog load libraries from CDNs (D3.js, lodash, jQuery, Howler.js). Internet access is required.
