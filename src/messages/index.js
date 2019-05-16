const chalk = require('chalk')
const insults = require('./insults')

const generate = list => {
  list.forEach(x => {
    const severity = x.severity > 1 ? chalk.red('error') : chalk.yellow('warning')
    const lines = chalk.dim(`${x.line}:${x.column}`)
    const ins = chalk.bold(insults[Math.floor(Math.random() * insults.length)])
    const spacing = x.line < 10 || x.column < 10 ? '   ' : '  '

    console.log(`${lines}${spacing}${severity}  ${x.message} ${ins}`)
  })
}

module.exports = generate
