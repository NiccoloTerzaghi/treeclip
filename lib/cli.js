// lib/cli.js

import fs from "fs";
import path from "path";

const DEFAULT_EXCLUDE = [
  "node_modules",
  ".next",
  ".git",
  ".vscode",
  "dist",
  "build",
  "coverage",
  "out",
  "public",
  "tmp",
];
const TREEIGNORE_FILENAME = ".treeignore";

/**
 * Reads .treeignore file from the current working directory, if present.
 * Returns an array of patterns, or null if the file is missing.
 */
export function readTreeIgnore() {
  const cwd = process.cwd();
  const ignorePath = path.join(cwd, TREEIGNORE_FILENAME);
  try {
    if (fs.existsSync(ignorePath)) {
      const content = fs.readFileSync(ignorePath, "utf8");
      return content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => !!line && !line.startsWith("#"));
    }
  } catch {
    // Ignore error, fallback to default
  }
  return null;
}

/**
 * Returns the array of folders to exclude, giving priority:
 * CLI arg > .treeignore > default
 */
export function getExcludeList() {
  const args = process.argv.slice(2);
  const excludeArg = args.find((a) => a.startsWith("--exclude="));
  if (excludeArg) {
    return excludeArg
      .replace("--exclude=", "")
      .split(",")
      .map((e) => e.trim());
  }
  const treeIgnore = readTreeIgnore();
  if (treeIgnore) {
    return treeIgnore;
  }
  return DEFAULT_EXCLUDE;
}

/**
 * Returns true if --help or -h is present in CLI args.
 */
export function shouldShowHelp() {
  const args = process.argv.slice(2);
  return args.includes("--help") || args.includes("-h");
}
