import { mkdirSync, writeFileSync } from "node:fs";

// Loading-screen tip: fixed text, no randomness, no time, no network.
// Deterministic: every run writes the exact same bytes to /output/entry.txt.
const TIP =
  "Loading: CI passed, the flaky test failed, and the deploy blamed you — congratulations, the legacy code is you.";

// Written with no trailing newline: exactly one line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
