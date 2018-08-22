import endings from './endings'
import insults from './insults'
import triggers from './triggers'

const randoNum = by => Math.floor(Math.random() * by)

const generate = trig => {

  const ins = insults[randoNum(insults.length)]
  const end = endings[randoNum(endings.length)]

  return `What is this ${trig} you ${ins} ${end}`
}

export default generate
