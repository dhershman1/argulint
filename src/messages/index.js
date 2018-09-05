const endings = require('./endings')
const insultData = require('./insults')

const randoNum = by => Math.floor(Math.random() * by)

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
    const { insults } = insultData[getTier(x.ruleId)]
    const ins = insults[randoNum(insults.length)]
    const end = endings[randoNum(endings.length)]

    console.log(`${ins}
   ${x.message} ${lines} ${end}`)
  })
}

module.exports = generate
