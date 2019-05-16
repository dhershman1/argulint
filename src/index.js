const chalk = require('chalk')
const generate = require('./messages')
const { errMsgs, fixableMsgs } = require('./messages/stats')

const randoNum = by => Math.floor(Math.random() * by)

const argulint = ({ results, errorCount, fixable }) => {
  console.log('==============Totals==============')
  console.log(`# of ${chalk.red('Errors')}: ${errorCount} - ${errorCount ? errMsgs[randoNum(errMsgs.length)] : 'Great Job!'}`)
  console.log(`# ${chalk.yellow('Fixable')}: ${fixable} - ${fixableMsgs[randoNum(fixableMsgs.length)]}`)
  console.log(chalk.yellow('Use the --fix flag to address the auto fixable problems'))
  console.log('==================================')

  results.forEach(x => {
    console.log(`
${chalk.underline.bold(x.filePath)}`)
    generate(x.messages)
  })
}

module.exports = argulint
