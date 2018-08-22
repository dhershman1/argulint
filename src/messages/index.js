const endings = require('./endings')
const insults = require('./insults')
const words = require('kyanite/words')

const randoNum = by => Math.floor(Math.random() * by)

const fixGrammar = msg => {
  const [first] = words(msg)
  const lines = {
    extra: 'you didn\'t notice the',
    expected: 'it',
    unexpected: 'you didn\'t notice the'
  }

  // console.log(first)
  const res = lines[first.toLowerCase()]

  if (res) {
    return res
  }

  return 'the'
}

const generate = msg => {
  const mid = fixGrammar(msg)
  const ins = insults[randoNum(insults.length)]
  const end = endings[randoNum(endings.length)]

  return `You're such a ${ins} ${mid} ${msg} ${end}`
}

module.exports = generate
