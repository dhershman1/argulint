const convert = require('./convert')
const duplexer = require('duplexer2')
const stream = require('stream')

const argulint = () => {
  const readable = new stream.Readable({ objectMode: true })
  const writable = new stream.Writable({ objectMode: true })
  let results = []

  writable._write = (input, _, done) => {
    if (readable.push(input)) {
      return done()
    }

    readable.once('drain', done)
  }

  // no-op
  readable._read = () => {}

  const dup = duplexer(writable, readable)

  dup.on('data', e => {
    // This regex gets the file & everything after it
    const reg = /[a-z]+\.js.+/gi

    results = results.concat(e.toString().match(reg))
  })

  dup.on('finish', () => {
    console.log('finish event')
    convert(results)
  })

  return dup
}

module.exports = argulint
