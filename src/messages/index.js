const chalk = require('chalk')
const endings = require('./endings')
const insults = require('./insults')

const generate = list => {
  function randoNum (by) {
    return Math.floor(Math.random() * by)
  }

  list.forEach(x => {
    const severity = x.severity > 1 ? chalk.red('error') : chalk.yellow('warning')
    const linesTmp = chalk.dim(`${x.line}:${x.column}`)
    const lines = x.endLine || x.endColumn
      ? `between line ${x.line}:${x.column} and ${x.endLine}:${x.endColumn}`
      : `on line ${x.line}:${x.column}`
    const ins = chalk.bold(insults[randoNum(insults.length)])
    const end = chalk.underline(endings[randoNum(endings.length)])

    console.log(`${linesTmp} ${severity} ${x.message} ${end}`)
  })
}

module.exports = generate
