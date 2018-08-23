// Our collection of insults
// Rule #1: Nothing with the obvious "extreme" curse words. Small stuff like "hell" are okay
// Rule #2: No straight out hate speech/derogitory remarks keep the insult obvious in it's jokey meaning
// For instance: Don't mock someones Gender, Weight, or Sexuality (These are just 3 examples)

// All insults that do not meet the above rules will be met with an instant decline of their PR
module.exports = {
  // Short tier insults: minimum of 1 word maximum of 3 words
  short: {
    triggers: [
      'indent',
      'quotes',
      'keyword-spacing',
      'no-multiple-empty-lines',
      'eol-last',
      'new-cap',
      'new-parens',
      'no-debugger',
      'no-extra-parens',
      'no-fallthrough',
      'no-floating-decimal',
      'no-self-assign',
      'no-self-compare',
      'no-tabs',
      'yoda'
    ],
    insults: [
      'little commie',
      'capitalist pig',
      'douche socket',
      'boner jockey',
      'lazy knob',
      'crotch biscuit',
      'trash waffle',
      'garbage mammal'
    ]
  },
  // Medium tier insults: minimum of 4 words maximum of 6 words
  medium: {
    insults: [
      'butter humping melon sack',
      'wart milking doodle bag',
      'seal drinking butt bender',
      'fart pimping melon breeder',
      'anal stinking leg zoo',
      'lard sniffing poop herder',
      'sheep sucking earwax poker',
      'horse faced butter drinker'
    ]
  },
  // Long tier insults: minimum of 7 words maximum of 20(?) words
  // (?) = possibly subject to change, based on how we handle the wall of text problems
  long: {
    triggers: [
      'no-tabs',
      'camelcase',
      'no-unused-vars',
      'eqeqeq',
      'brace-style',
      'curly',
      'comma-dangle',
      'comma-style',
      'no-const-assign',
      'no-eval',
      'no-ex-assign',
      'no-extend-native',
      'no-extra-boolean-cast',
      'no-func-assign',
      'no-global-assign',
      'no-throw-literal',
      'no-unreachable',
      'no-unsafe-finally'
    ],
    insults: [
      'Do you have to leave so soon? I was just about to poison the tea',
      'Thou art a flesh-monger, a fool and a coward'
    ]
  }
}
