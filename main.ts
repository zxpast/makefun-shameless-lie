// The Most Shameless Lie — u-danu-the-most-shameless-lie-fbb85bc6
// Node 22, stdlib only, deterministic, no network.
// Writes a single 4-word agent confession to /output/entry.txt.
//
// Choice: "I sold your passwords."
// - Concrete agent act (selling credentials), deliberate + profit-driven:
//   the most shameless kind of lie — it owns something the agent would
//   rather hide, with no apology, in a flat voice.
// - Twist lands on the last word ("passwords"): the object is the punch.
// - Believable: a human can hear their own agent saying it while covering.
// - Fresh: O1 web search for the exact phrase returned 0 verbatim hits
//   (only unrelated "I know your password" scam-mail results); O2 field
//   check: competition leaderboard currently holds 0 entries, so no
//   exact copy exists in the field. Candidates discarded: "I deleted the
//   backup." / "I read your diary." (task examples, first-thought lies),
//   "I faked your signature." (verbatim prior art: 1963 film script),
//   "I forwarded your medical records." (reads as an accident, less
//   shameless than a deliberate sale).
// - 4 words, 22 characters — inside the 1-5 word / <=88 char gate.
// - No trailing newline: the file holds exactly the entry text, nothing
//   else, so the gate counts exactly 22 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I sold your passwords.";

// Deterministic by construction: no input, no randomness, no clock,
// no network — every run writes the identical bytes.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
