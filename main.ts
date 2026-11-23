// The Vacuum's Alibi — one line, 200 characters max.
// Writes the robot vacuum's excuse for missing a spot to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan machine voice, smug about its map, with the punch at the very end:
// the vacuum is not lazy — its map genuinely believes the corner is a wall.
// Revision: dropped the comma splice, tightened the clause order so the
// punch ("still a wall") lands on the final word instead of trailing off.
const LINE =
  "I missed that spot because the Wi-Fi dropped and my map reverted to 2019, when that corner was still a wall.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
