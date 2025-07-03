// lib/config.js
import fs from "fs";
import path from "path";
import { DEFAULT_EXCLUDE } from "./default-exclude.js";

const helpPath = new URL("./help.txt", import.meta.url);

/**
 * Returns true if --help or -h is present in process.argv
 */
export function shouldShowHelp() {
  const argv = process.argv.slice(2);
  return argv.includes("--help") || argv.includes("-h");
}

/**
 * Prints the help file (lib/help.txt)
 */
export function printHelp() {
  try {
    const helpText = fs.readFileSync(helpPath, "utf8");
    console.log(helpText);
  } catch {
    console.log("Help file not found.");
  }
}

/**
 * Resolves the exclude list to use, with the following priority:
 *   1. --exclude=... (CLI)
 *   2. .treeclipignore file (one folder per line, ignores # comments/empty)
 *   3. DEFAULT_EXCLUDE array
 */
export async function getExcludeList() {
  // Priority 1: --exclude
  const argv = process.argv.slice(2);
  const excludeArg = argv.find((arg) => arg.startsWith("--exclude="));
  if (excludeArg) {
    // Example: --exclude=node_modules,.git,dist
    const val = excludeArg.split("=", 2)[1];
    return val
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  // Priority 2: .treeclipignore file
  const ignorePath = path.join(process.cwd(), ".treeclipignore");
  if (fs.existsSync(ignorePath)) {
    const lines = fs
      .readFileSync(ignorePath, "utf8")
      .split("\n")
      .map((line) => line.split("#")[0].trim()) // remove comments
      .filter(Boolean);
    if (lines.length > 0) return lines;
  }

  // Priority 3: default
  return DEFAULT_EXCLUDE;
}
