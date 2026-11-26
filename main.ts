import { mkdirSync, writeFileSync } from "node:fs";

// The Moon Gets One Star — exactly one line, 120 characters at most.
// Judge brief: a real one-star review of the Moon itself, funnier on first
// read, a specific surprising grievance (not craters, cheese or brightness),
// every word earning its place, punchline at the end. Setup: the Moon as a
// bad roommate — it runs the tides, pays no rent, and watches you sleep.
// Punchline: "Worst roommate ever."
export const LINE =
  "One star. It controls the tides, never pays rent, and stares through my window all night. Worst roommate ever.";

// The gate allows 1..120 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees.
if (LINE.length < 1 || LINE.length > 120 || LINE.includes("\n")) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
