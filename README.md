# Argulint
Tired of your linter not making you feel like the terrible developer you really are? Welcome.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[Click here to read about contributing](https://github.com/dhershman1/argulint/blob/master/CONTRIBUTING.md)

## What

Argulint is a little linter wrapper that runs the [`standardjs`](https://standardjs.com/) lint process but adds a fun twist to it.

The only goal is to have a little fun with your linting.

## Features

- A simple CLI tool, it is just running [`standardjs`](https://standardjs.com/) under the hood
- Which means it still works with standard options in the `package.json` as well as the `--fix` argument in the CLI
- Re formats the output with _some_ extra organization
- Insults your mistakes for fun

## How To

Intall:

`npm i -D argulint`

Once installed you would use argulint just like you can use the `standardjs` linter via the CLI. It supports the `--fix` flag as well as using the standard options built into your `package.json` file.

Usage example:

`argulint src/place/*.js`

Or with the flag:

`argulint --fix src/place/*.js`

**Note: There is no API this is strictly used within the CLI**

## Generation

Messages are generated in the following format:

> We check the rule broken, if it falls into one of the categories listed for small or long it will use an insult from there, OR it will fallback to the medium insults

Once all the strings are picked the message itself formats like this:

```
{insult} {mid} {linting error} {lines} {ending}
```

Where:

- `insult` is the actual picked insult
- `mid` is a generated (hopefully to the best) of the linter abilities to adjust grammar for a sentence
- `linting error` is the actual error that was found
- `lines` is the line(s) and column(s) of the error in this format: `line:column`
- `ending` is the chosen ending from our endings list
