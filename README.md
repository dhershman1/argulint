# Argulint
Tired of your linter not making you feel like the terrible developer you really are? Welcome.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Contributing

PRs fully welcome, come up with some sick nasty messaging combos, improve the linter, or whatever!

This project follows the [JS Standard Style](https://standardjs.com/) guidelines

## TODO

- Allow options to be passed in via the package.json
- Add file names and line numbers onto the message
- Supporting more `rules`
- Clean up semi colon rule
- Setup a standardized testing system
- CLI support
- A _better_ way to run it?
- Automate generating the rules index.js
- Documentation
- ???

## Options

`argulint` accepts an options object to get started

- `patterns`: `Array[String]` - An array of pattern strings to lint through
- `ignore`: `Array[String]` - An array of patterns the linter will use to ignore

#### Defaults

The option defaults look like so:

```js
{
  patterns: [
    '**/*.js',
    '**/*.jsx'
  ],
  ignore: [
    'node_modules/**',
    '**/*.min.js',
    '**/bundle.js',
    'coverage/**',
    'vendor/**'
  ]
}
```
