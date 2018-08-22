const randoNum = by => Math.floor(Math.random() * by)

const generate = trig => {
  const insults = [
    'butter humping melon sack',
    'wart milking doodle bag',
    'seal drinking butt bender',
    'fart pimping melon breeder'
  ]

  const triggers = [
    'semicolon',
    'double-quote',
    'complexity',
    'var',
    'class',
    'mutation'
  ]

  const endings = [
    'fix it!',
    'throw it away',
    'ctrl + a + del',
    'thanks, I hate it',
    'I hope you\'re happy',
    'this is why I have trust issues'
  ]

  const ins = insults[randoNum(insults.length)]
  const end = endings[randoNum(endings.length)]

  return `What is this ${triggers[trig]} you ${ins} ${end}`
}
