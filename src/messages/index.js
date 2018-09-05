const endings = require('./endings')
const insults = require('./insults')

const randoNum = by => Math.floor(Math.random() * by)

const generate = list => {
  list.forEach(x => {
    const lines = x.endLine || x.endColumn
      ? `between line ${x.line}:${x.column} and ${x.endLine}:${x.endColumn}`
      : `on line ${x.line}:${x.column}`
    const ins = insults[randoNum(insults.length)]
    const end = endings[randoNum(endings.length)]

    console.log(`${ins}
   ${x.message} ${lines} ${end}`)
  })
}

module.exports = generate
