import { EOL } from 'os'
import fse from 'fs-extra'
import generate from '../messages'
import path from 'path'

// Rule: No unrequired semicolons
// Semicolons that are required (such as those within for loops) should be ignored
const semicolon = node => {
  // TODO: Make this better
  fse.readFile(path.join(__dirname, node), 'utf8')
    .then(data => {
      const codeArr = data.split(EOL)

      codeArr.forEach(code => {
        if (code.includes(';') && !code.match(/(for|while)/)) {
          console.log(generate('semicolon'))
        }
      })
    })
    .catch(e => {
      console.error(e)
    })
}

export default semicolon
