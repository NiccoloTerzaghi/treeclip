// lib/cli.js
import { getExcludeList, shouldShowHelp, printHelp } from "./config.js";
import { buildTree } from "./buildTree.js";
import clipboardy from "clipboardy";
import path from "path";

export async function runCli() {
  if (shouldShowHelp()) {
    printHelp();
    process.exit(0);
  }
  try {
    const exclude = await getExcludeList();
    const rootDir = process.cwd();
    const rootFolderName = path.basename(rootDir);
    let tree = `${rootFolderName}/\n`;
    tree += buildTree(rootDir, exclude);
    await clipboardy.write(tree);
    console.log("🌳 Project tree copied to clipboard!");
  } catch (error) {
    console.error("❌ Error copying to clipboard:", error);
    process.exit(1);
  }
}
