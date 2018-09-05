const generate = require('./messages')
const { errMsgs, fixableMsgs } = require('./messages/stats')

const randoNum = by => Math.floor(Math.random() * by)

const argulint = ({ results, errorCount, fixable }) => {

  console.log('==============Totals==============')
  console.log(`# of Errors: ${errorCount} - ${errorCount ? errMsgs[randoNum(errMsgs.length)] : 'Great Job!'}`)
  console.log(`# Fixable: ${fixable} - ${fixableMsgs[randoNum(fixableMsgs.length)]}`)
  console.log('==================================')

  results.forEach(x => {
    console.log('\nFile:', x.filePath)
    console.log('==============Stats==============')
    console.log(`# of Errors: ${x.errorCount} - ${errorCount ? errMsgs[randoNum(errMsgs.length)] : 'Great Job!'}`)
    console.log(`# Fixable: ${x.fixableErrorCount} - ${fixableMsgs[randoNum(fixableMsgs.length)]}`)
    console.log('==================================')
    generate(x.messages)
  })
}

module.exports = argulint
