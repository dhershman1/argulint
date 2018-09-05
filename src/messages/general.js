// These messages are built for the totals screen
// Example:
// =====================================
// # of Errors: 25 - Alright you're done get out. <-- This guy here
// # Fixable: 12
// =====================================
// As usual please follow the rules:
// Rule #1: Nothing with the obvious "extreme" curse words. Small stuff like "hell" are okay
// Rule #2: No straight out hate speech/derogitory remarks keep the insult obvious in it's jokey meaning
// For instance: Don't mock someones Gender, Weight, or Sexuality (These are just 3 examples)
// Rule #3: Please when adding new insults keep the arrays alphabetized

module.exports = {
  errMsgs: {
    low: [
      'Did we forget about an oopsie?',
      'Uh oh!'
    ],
    mid: [
      'Seriously?',
      'Are you even trying?'
    ],
    high: [
      'Alright you\'re done get out.',
      'You\'re making ME want to quit...'
    ]
  },
  fixableMsgs: [
    'Put me in coach!',
    'I got this.',
    'Leave it to the pros!'
  ]
}
