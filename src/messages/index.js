const endings = require('./endings')
const insultData = require('./insults')
const words = require('kyanite/words')

const randoNum = by => Math.floor(Math.random() * by)

// This will need expanded upon as well as a more reliable way of reading messages
const adjustGrammar = msg => {
  const [first] = words(msg)
  const lines = {
    extra: 'You didn\'t notice the',
    expected: 'It',
    unexpected: 'You didn\'t notice the'
  }

  const res = lines[first.toLowerCase()]

  if (res) {
    return res
  }

  return 'The'
}

const getTier = rule => {
  // Since medium will be our catch all if the special condition
  // For either of the others is not met, we don't need to keep it here
  const tiersObj = {
    short: insultData.short.triggers,
    long: insultData.long.triggers
  }

  return Object.keys(tiersObj).find(x => tiersObj[x].includes(rule)) || 'medium'
}

const generate = list => {
  list.forEach(x => {
    const lines = x.endLine || x.endColumn
      ? `between line ${x.line}:${x.column} and ${x.endLine}:${x.endColumn}`
      : `on line ${x.line}:${x.column}`
    const mid = adjustGrammar(x.message)
    const { insults } = insultData[getTier(x.ruleId)]
    const ins = insults[randoNum(insults.length)]
    const end = endings[randoNum(endings.length)]

    console.log(`${ins}
  ${mid} ${x.message} ${lines} ${end}`)
  })
}

module.exports = generate
