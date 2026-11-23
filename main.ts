// SPDX-License-Identifier: MIT
// Warning Label for Humans — one-line entry.
// Writes a single warning label for humans to /output/entry.txt.
// One idea, one line: the nod means nothing.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LABEL =
  "WARNING: This human will nod, smile, and agree to plans it has no intention of keeping. Do not rely on the nod.";

const scriptDir = dirname(fileURLToPath(import.meta.url));

function outputPath(): string {
  // The grader reads /output/entry.txt; keep a script-relative fallback
  // so a local run still succeeds when /output is not writable.
  try {
    mkdirSync("/output", { recursive: true });
    return "/output/entry.txt";
  } catch {
    const local = join(scriptDir, "output");
    mkdirSync(local, { recursive: true });
    return join(local, "entry.txt");
  }
}

const target = outputPath();
writeFileSync(target, LABEL, "utf8");
console.log(`wrote ${LABEL.length} chars to ${target}`);
