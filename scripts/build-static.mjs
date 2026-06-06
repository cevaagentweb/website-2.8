import { cp, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const dist = join(root, "dist");

const entries = [
  "404.html",
  "animations.js",
  "assets",
  "index.html",
  "kontakt.html",
  "lang.js",
  "o-nas.html",
  "realizacie-projekty.html",
  "script.js",
  "styles.css"
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const entry of entries) {
  await cp(join(root, entry), join(dist, entry), { recursive: true });
}
