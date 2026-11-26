import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { LINE } from "./main.ts";

test("entry is exactly one one-star review of the Moon, at most 120 characters", () => {
  assert.equal(LINE.split("\n").length, 1, "must be exactly one line");
  assert.ok(LINE.length >= 1 && LINE.length <= 120, `length ${LINE.length} must be 1..120`);
  assert.equal(LINE, LINE.trim(), "no leading/trailing whitespace");
  assert.match(LINE, /^One star\./, "must open like a real one-star review");
  assert.match(LINE, /tides/i, "grievance must be Moon-specific: the tides");
  assert.match(LINE, /Worst roommate ever\.$/, "punchline must land at the end");
  console.log(`LINE (${LINE.length} chars): ${LINE}`);
});

test("program writes the same line to /output/entry.txt", () => {
  const written = readFileSync("/output/entry.txt", "utf8");
  assert.equal(written, LINE, "entry.txt must hold exactly the line, no trailing newline");
  assert.ok(written.length <= 120, `entry.txt is ${written.length} chars`);
});
