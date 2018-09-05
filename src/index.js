const branch = require('kyanite/branch')
const between = require('kyanite/between')
const gt = require('kyanite/gt')

const generate = require('./messages')
const { errMsgs, fixableMsgs } = require('./messages/general')

const genRando = by => Math.floor(Math.random() * by)

const errCountStat = count => {
  const tier = {
    low: between(1, 20, count),
    mid: between(21, 40, count),
    high: gt(count, 41)
  }

  const data = errMsgs[Object.keys(tier).find(k => tier[k])]

  return data[genRando(data.length)]
}

const argulint = ({ results, errorCount, fixable }) => {
  const errMsg = branch(
    x => x === 0,
    () => 'Great Job!',
    x => errCountStat(x)
  )

  console.log('===========Totals===========')
  console.log(`# of Errors: ${errorCount} - ${errMsg(errorCount)}`)
  console.log(`# Fixable: ${fixable} - ${fixableMsgs[genRando(fixableMsgs.length)]}`)
  console.log('============================')

  results.forEach(x => {
    console.log('\n', x.filePath)
    console.log('=====================================')
    console.log(`# of Errors: ${x.errorCount} - ${errMsg(x.errorCount)}`)
    console.log(`# Fixable: ${x.fixableErrorCount} - ${fixableMsgs[genRando(fixableMsgs.length)]}`)
    console.log('=====================================')
    generate(x.messages)
  })
}

module.exports = argulint
