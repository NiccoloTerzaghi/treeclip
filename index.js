#!/usr/bin/env node
// index.js

import { buildTree } from "./lib/buildTree.js";
import { parseExcludeArg, shouldShowHelp } from "./lib/cli.js";
import clipboardy from "clipboardy";

import fs from "fs";
import path from "path";
const helpPath = new URL("./lib/help.txt", import.meta.url);

function printHelp() {
  try {
    const helpText = fs.readFileSync(helpPath, "utf8");
    console.log(helpText);
  } catch {
    console.log("Help file not found.");
  }
}

async function main() {
  if (shouldShowHelp()) {
    printHelp();
    process.exit(0);
  }

  try {
    const exclude = parseExcludeArg();
    const rootDir = process.cwd();
    const rootFolderName = path.basename(rootDir);
    let tree = `${rootFolderName}/\n`;
    tree += buildTree(rootDir, exclude);
    await clipboardy.write(tree);
    console.log("Project tree copied to clipboard!\n");
  } catch (error) {
    console.error("Error copying to clipboard:", error);
    process.exit(1);
  }
}

main();
