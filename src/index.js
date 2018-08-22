import defaults from 'kyanite/defaults'
import rules from './rules'

// Do a thing! (Currently is not doing a thing)
const argulint = options => {
  const def = defaults({
    patterns: [
      '**/*.js',
      '**/*.jsx'
    ],
    ignore: [
      'node_modules/**',
      '**/*.min.js',
      '**/bundle.js',
      'coverage/**',
      'vendor/**'
    ]
  })
  const opts = def(options)

  console.log(rules, opts)
}

argulint()
