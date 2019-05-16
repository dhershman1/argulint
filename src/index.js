const chalk = require('chalk')
const generate = require('./messages')
const { errMsgs, fixableMsgs } = require('./messages/stats')

const randoNum = by => Math.floor(Math.random() * by)

const argulint = ({ results, errorCount, fixable }) => {
  console.log('==============Totals==============')
  console.log(`# of ${chalk.red('Errors')}: ${errorCount} - ${errorCount ? errMsgs[randoNum(errMsgs.length)] : 'Great Job!'}`)
  console.log(`# ${chalk.yellow('Fixable')}: ${fixable} - ${fixableMsgs[randoNum(fixableMsgs.length)]}`)
  console.log('==================================\n')

  results.forEach(x => {
    console.log(`
${chalk.underline.bold(x.filePath)}`)
    // console.log('==============Stats==============')
    // console.log(`# of ${chalk.red('Errors')}: ${x.errorCount} - ${errorCount ? errMsgs[randoNum(errMsgs.length)] : 'Great Job!'}`)
    // console.log(`# ${chalk.yellow('Fixable')}: ${x.fixableErrorCount} - ${fixableMsgs[randoNum(fixableMsgs.length)]}`)
    // console.log('\n==============Errors==============')
    generate(x.messages)
  })
}

module.exports = argulint
