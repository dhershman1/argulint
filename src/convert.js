const generate = require('./messages')

const convert = list => {
  // Regex to select only the message
  const msgReg = /\s.+\./
  const fileReg = /.+:\s/

  list.forEach(x => {
    const [msg] = x.match(msgReg)
    const [file] = x.match(fileReg)

    // generate(str.trim())
    console.log(generate(msg.trim(), file.trim()))
  })
}

module.exports = convert
