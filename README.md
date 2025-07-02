# tree-clipboard

> 📋 Copy your project directory structure as an ASCII tree directly to your clipboard!

**tree-clipboard** is a simple command-line tool to generate and copy an ASCII representation of your project's folder structure.
It lets you exclude folders (e.g. `node_modules`) and works on Windows, macOS, and Linux.

---

## Installation

```sh
npm install -g tree-clipboard
```

---

## Usage

```sh
treeclip [--exclude=folder1,folder2,...] [--help|-h]
```

### Options

| Option            | Description                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| --exclude=folders | Comma-separated list of folder names to collapse.<br>(default: node\_modules,.next,.git) |
| --help, -h        | Show help and exit                                                                       |

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
* **Customizable:** Exclude any folders you want from tree expansion.
* **Fast & lightweight:** Zero config needed.

---

## License

MIT

---

## Author

[Niccolò Terzaghi](https://github.com/your-username)
