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

## Example

Example output looks something like this:

```
=======Totals=======
# of Errors: 31 - Alright you're done get out.
# Fixable: 17 - Put me in coach!
====================

 /Users/dhershman/Documents/projects/modules/argulint/tests/index.js
=====================================
# of Errors: 6 - Did we forget about an oopsie?
# Fixable: 5
=====================================
You little anal stinking leg zoo!
  You didn't notice the Extra semicolon. on line 1:10 [Forced laughing]
In your face, camel cake!!
  You didn't notice the Extra semicolon. on line 2:10 Throw it away
You... you man! Stupid, stupid man!!
  You didn't notice the Extra semicolon. on line 3:10 Throw it away
Go away you, wart milking doodle bag!
  You didn't notice the Extra semicolon. on line 4:10 Please... Stop... By all that is holy...
I'm not proud of you, your mom's not proud of you, no one is proud of you!
  The 'g' is assigned a value but never used. between line 5:7 and 5:8 Thanks, I hate it
You little anal stinking leg zoo!
  You didn't notice the Extra semicolon. on line 5:13 Fix it! Fix it! Fix it!

(This is just showing the first file from the test list)
```
