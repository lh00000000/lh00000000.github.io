#!/usr/bin/env node
/**
 * Inset the root <svg> viewBox on each file (edge crop in user space).
 *
 * Usage:
 *   node scripts/hannadeck-preprocess-svgs.js [path/to/svgs/dir]
 *   node scripts/hannadeck-preprocess-svgs.js --crop=0.03 ../2022-11-12-hannadeck/svgs
 *   node scripts/hannadeck-preprocess-svgs.js --dry-run
 *
 * Default dir: 2022-11-12-hannadeck/svgs under repo root.
 * Default crop: 2.5% removed from each edge (viewBox width/height shrink symmetrically).
 */

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const defaultSvgsDir = path.join(repoRoot, "2022-11-12-hannadeck", "svgs");

function parseArgs(argv) {
    let crop = 0.025;
    let dryRun = false;
    let dir = null;
    for (let i = 2; i < argv.length; i += 1) {
        const a = argv[i];
        if (a === "--dry-run") dryRun = true;
        else if (a.startsWith("--crop=")) crop = parseFloat(a.slice(7), 10);
        else if (!a.startsWith("--")) dir = path.resolve(a);
    }
    if (crop < 0 || crop >= 0.49) {
        console.error("crop must be in [0, 0.49)");
        process.exit(1);
    }
    return { crop, dryRun, dir: dir || defaultSvgsDir };
}

function insetViewBox(svgText, crop) {
    const re = /viewBox="(-?[0-9.]+(?:e-[0-9]+)?)\s+(-?[0-9.]+(?:e-[0-9]+)?)\s+(-?[0-9.]+(?:e-[0-9]+)?)\s+(-?[0-9.]+(?:e-[0-9]+)?)"/i;
    const m = svgText.match(re);
    if (!m) return { text: svgText, changed: false };
    const minX = parseFloat(m[1], 10);
    const minY = parseFloat(m[2], 10);
    const w = parseFloat(m[3], 10);
    const h = parseFloat(m[4], 10);
    if (!(w > 0 && h > 0)) return { text: svgText, changed: false };
    const nx = minX + w * crop;
    const ny = minY + h * crop;
    const nw = w * (1 - 2 * crop);
    const nh = h * (1 - 2 * crop);
    const fmt = (n) => {
        const s = n.toFixed(4);
        return s.replace(/\.?0+$/, "") || "0";
    };
    const replacement = `viewBox="${fmt(nx)} ${fmt(ny)} ${fmt(nw)} ${fmt(nh)}"`;
    return {
        text: svgText.replace(re, replacement),
        changed: true
    };
}

function main() {
    const { crop, dryRun, dir } = parseArgs(process.argv);
    if (!fs.existsSync(dir)) {
        console.error("Directory not found:", dir);
        process.exit(1);
    }
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".svg"));
    let updated = 0;
    let skipped = 0;
    for (const f of files) {
        const fp = path.join(dir, f);
        const raw = fs.readFileSync(fp, "utf8");
        const { text, changed } = insetViewBox(raw, crop);
        if (!changed) {
            skipped += 1;
            continue;
        }
        if (dryRun) {
            console.log("would update", f);
        } else {
            fs.writeFileSync(fp, text, "utf8");
        }
        updated += 1;
    }
    console.log(
        dryRun ? `[dry-run] would update ${updated} file(s), skip ${skipped} (no viewBox)` : `updated ${updated} file(s), skipped ${skipped} (no viewBox)`
    );
}

main();
