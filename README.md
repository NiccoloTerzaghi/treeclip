# treeclip

> 📋 Copy your project directory structure as an ASCII tree directly to your clipboard!

**treeclip** is a simple command-line tool to generate and copy an ASCII representation of your project's folder structure.
You can exclude folders (e.g. `node_modules`) and it works on Windows, macOS, and Linux.

---

## Installation

```sh
npm install -g treeclip-cli
```

---

## Usage

```sh
treeclip [--exclude=folder1,folder2,...] [--help|-h]
```

### Options

| Option              | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `--exclude=folders` | Comma-separated list of folder names to collapse (overrides `.treeclipignore` and defaults) |
| `--help`, `-h`      | Show help and exit                                                                      |

---

### Ignore list (custom exclude)

* If a file named `.treeclipignore` exists in the current directory, its non-comment lines (one per line) will be used as the exclude list.
* If neither `--exclude` nor `.treeclipignore` are provided, the default is: `node_modules`, `.git`.

**Example `.treeclipignore` file:**

```
node_modules
.git
.next
dist
.vscode
```

---

### Example

```sh
treeclip --exclude=node_modules,.git,.cache
```

This will output (and copy to clipboard) something like:

```
my-project/
├── index.js
├── package.json
├── src/
│   ├── app.js
│   └── utils.js
├── node_modules/(...)
└── .git/(...)
```

---

## Features

* **Easy to use:** Just run `treeclip` in any directory.
* **Clipboard ready:** Output is automatically copied.
* **Customizable:** Exclude any folders you want from tree expansion (via CLI or `.treeclipignore`).
* **Fast & lightweight:** Zero config needed.

---

## Author

[Niccolò Terzaghi](https://github.com/NiccoloTerzaghi)
