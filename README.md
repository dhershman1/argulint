# Argulint
Tired of your linter not making you feel like the terrible developer you really are? Welcome.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Contributing

PRs fully welcome, come up with some sick nasty messaging combos, improve the linter, or whatever!

This project follows the [JS Standard Style](https://standardjs.com/) guidelines

The rules are simple, please follow them as they are marked inside of both `insults.js` and `endings.js` any PR not following these rules will be declined

## What

Argulint is a little linter wrapper that runs the [`standardjs`](https://standardjs.com/) lint process but adds a fun twist to it.

The only goal is to have a little fun with your linting.

## Features

- A simple CLI tool, it is just running [`standardjs`](https://standardjs.com/) under the hood
- Which means it still works with standard options in the `package.json` as well as the `--fix` argument in the CLI
- Re formats the output with _some_ extra organization
- Insults your mistakes for fun
