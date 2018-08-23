const generate = require('./messages')
const branch = require('kyanite/branch')
const lte = require('kyanite/lte')

const errCountStat = count => {
  const fn = lte(count)

  if (fn(10)) {
    return 'Did we forget about an oopsie?'
  }

  if (fn(20)) {
    return 'Seriously?'
  }

  return 'Alright you\'re done get out.'
}

const argulint = ({ results, errorCount, fixable }) => {
  const errMsg = branch(
    x => x === 0,
    () => 'Great Job!',
    x => errCountStat(x)
  )

  console.log('=======Totals=======')
  console.log(`# of Errors: ${errorCount} - ${errMsg(errorCount)}`)
  console.log(`# Fixable: ${fixable} - Put me in coach!`)
  console.log('====================')

  results.forEach(x => {
    console.log('\n', x.filePath)
    console.log('=====================================')
    console.log(`# of Errors: ${x.errorCount} - ${errMsg(x.errorCount)}`)
    console.log(`# Fixable: ${x.fixableErrorCount}`)
    console.log('=====================================')
    generate(x.messages)
  })
}

module.exports = argulint
