const generate = require('./messages')

const convert = list => {
  // Regex to select only the message
  const reg = /\s.+\./

  list.forEach(x => {
    const [str] = x.match(reg)

    // generate(str.trim())
    console.log(generate(str.trim()))
  })
}

module.exports = convert
