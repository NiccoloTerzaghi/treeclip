// lib/buildTree.js
import fs from "fs";
import path from "path";

/**
 * Recursively builds the ASCII tree structure of a directory, excluding specified folders.
 * Shows a placeholder for unreadable files or directories.
 */
export function buildTree(dir, exclude = [], prefix = "") {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch {
    const dirName = path.basename(dir);
    return `${prefix}└── ${dirName}/ [unreadable]\n`;
  }

  let tree = "";

  files.forEach((file, index) => {
    const isLast = index === files.length - 1;
    const filePath = path.join(dir, file);
    let stats;
    try {
      stats = fs.statSync(filePath);
    } catch {
      tree += `${prefix}${isLast ? "└── " : "├── "}${file} [unreadable]\n`;
      return;
    }
    const pointer = isLast ? "└── " : "├── ";

    if (stats.isDirectory()) {
      if (exclude.includes(file)) {
        tree += `${prefix}${pointer}${file}/(...)\n`;
      } else {
        tree += `${prefix}${pointer}${file}/\n`;
        const newPrefix = prefix + (isLast ? "    " : "│   ");
        tree += buildTree(filePath, exclude, newPrefix);
      }
    } else {
      tree += `${prefix}${pointer}${file}\n`;
    }
  });

  return tree;
}
