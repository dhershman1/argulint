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

 /Users/dhershman/Documents/projects/modules/argulint/tests/other.js
=====================================
# of Errors: 25 - Alright you're done get out.
# Fixable: 12
=====================================
Lying, crying, spying, prying ultra-pig!
  You didn't notice the Extra semicolon. on line 1:12 Throw it away
You're the reason we don't have nice things!
  You didn't notice the Extra semicolon. on line 2:10 This is why I have trust issues
You're a lewd, crude, rude, bag of pre-chewed food dude!
  The 'gg' is assigned a value but never used. between line 3:5 and 3:7 I think we're done here
You prison barber!
  The Strings must use singlequote. between line 3:10 and 3:16 ctrl + a + del
Thou art a flesh-monger, a fool and a coward!
  The 'ha' is assigned a value but never used. between line 5:5 and 5:7 Please... Stop... By all that is holy...
Do you have to leave so soon? I was just about to poison the tea!
  The 'list' is assigned a value but never used. between line 7:5 and 7:9 I don't know what I expected.
You trash waffle!
  It Expected indentation of 2 spaces but found 1 tab. between line 8:1 and 8:2 I think we're done here
You trash waffle!
  You didn't notice the Unexpected tab character. on line 8:2 I hope you're happy
You nearsighted gynecologist!
  It Expected indentation of 2 spaces but found 1 tab. between line 9:1 and 9:2 Hello darkness my old friend...
You boner jockey!
  You didn't notice the Unexpected tab character. on line 9:2 Fix it! Fix it! Fix it!
You Boil-dripping beef, fart-sniffing bubble butt!!
  The ',' should be placed last. on line 9:3 Looks like we need a stricter hiring process
You mung tongue!
  It Expected indentation of 2 spaces but found 1 tab. between line 10:1 and 10:2 This is why I have trust issues
You're a lazy knob!
  You didn't notice the Unexpected tab character. on line 10:2 This is why I have trust issues
You two-toned zebra-headed, slime-coated, pimple-farmin' paramecium brain, munchin' on your own mucus, suffering from Peter Pan envy!!
  The ',' should be placed last. on line 10:3 Looks like we need a stricter hiring process
You mother lover!
  It Expected indentation of 2 spaces but found 1 tab. between line 11:1 and 11:2 Hello darkness my old friend...
You stupid seal drinking butt bender!
  The A space is required after ','. between line 11:2 and 11:3 I'm sorry, I'm unclear about what it is you do...
You substitute chemistry teacher!
  You didn't notice the Unexpected tab character. on line 11:2 [Forced laughing]
Have you always hated yourself this much, or is this new!
  The ',' should be placed last. on line 11:3 I don't know what I expected.
I'm not proud of you, your mom's not proud of you, no one is proud of you!
  It Expected '===' and instead saw '=='. on line 14:16 Throw it away
You Boil-dripping beef, fart-sniffing bubble butt!!
  The 'hell_o' is assigned a value but never used. between line 16:5 and 16:11 [Forced laughing]
You're a lewd, crude, rude, bag of pre-chewed food dude!
  The Identifier 'hell_o' is not in camel case. between line 16:5 and 16:11 Thanks, I hate it
You're a lazy knob!
  It Expected indentation of 0 spaces but found 2 tabs. between line 18:1 and 18:3 I hope you're happy
You boner jockey!
  You didn't notice the Unexpected tab character. on line 18:2 I don't know what I expected.
You're such a butter humping melon sack!
  The 'haha' is not defined. between line 18:3 and 18:7 I hope you're happy
Remind me to always bet against you!
  It Expected an assignment or function call and instead saw an expression. between line 18:3 and 18:7 [Forced laughing]
```
