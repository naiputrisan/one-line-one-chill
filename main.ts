import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "When the surgeon removed my appendix, he found a note inside it, in my handwriting, dated next Thursday.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
