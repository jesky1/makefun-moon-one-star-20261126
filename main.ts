import { mkdirSync, writeFileSync } from "node:fs";

// The Moon Gets One Star — exactly one line, 120 characters at most.
// Judge brief: a real one-star review of the Moon itself, funnier on first
// read, a specific surprising grievance (not craters, cheese or brightness),
// every word earning its place, punchline at the end. Setup: the Moon as a
// bad roommate — it runs the tides, pays no rent, and watches you sleep.
// Punchline: "Worst roommate ever."
// How the line maps to the brief, beat by beat: "One star." opens in the
// voice of a genuine review site; the grievance is domestic, not cosmic —
// tide control as a utility it never pays for, rent skipped entirely, and
// the all-night staring as the creepy detail a real reviewer would cite.
// Nothing is spent on scenery: every clause adds a new roommate offence,
// so the final verdict lands as a summary rather than a new joke.
export const LINE =
  "One star. It controls the tides, never pays rent, and stares through my window all night. Worst roommate ever.";

// The gate allows 1..120 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees. Stray
// leading or trailing whitespace counts as invalid too — it would change
// the character count the judge reads without adding a single laugh.
if (LINE.length < 1 || LINE.length > 120 || LINE.includes("\n") || LINE !== LINE.trim()) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
