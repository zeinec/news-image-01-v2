// Copies entry.png byte-for-byte into the configured output directory as entry.png.
const fs = require("node:fs/promises");
const path = require("node:path");

async function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  await fs.mkdir(outputDir, { recursive: true });
  await fs.copyFile(path.join(__dirname, "entry.png"), path.join(outputDir, "entry.png"));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
