import endings from './messages/endings'
import insults from './messages/insults'
import triggers from './messages/triggers'

const randoNum = by => Math.floor(Math.random() * by)

const generate = trig => {

  const ins = insults[randoNum(insults.length)]
  const end = endings[randoNum(endings.length)]

  return `What is this ${triggers[trig]} you ${ins} ${end}`
}

export default generate
