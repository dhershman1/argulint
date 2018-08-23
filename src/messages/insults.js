// Our collection of insults
// Rule #1: Nothing with the obvious "extreme" curse words. Small stuff like "hell" are okay
// Rule #2: No straight out hate speech/derogitory remarks keep the insult obvious in it's jokey meaning
// For instance: Don't mock someones Gender, Weight, or Sexuality (These are just 3 examples)
// Rule #3: Please when adding new insults keep the arrays alphabetized

// All insults that do not meet the above rules will be met with an instant decline of their PR
module.exports = {
  // Short tier insults: minimum of 1 word maximum of 3 words
  short: {
    triggers: [
      'eol-last',
      'indent',
      'keyword-spacing',
      'new-cap',
      'new-parens',
      'no-debugger',
      'no-extra-parens',
      'no-fallthrough',
      'no-floating-decimal',
      'no-multiple-empty-lines',
      'no-self-assign',
      'no-self-compare',
      'no-tabs',
      'quotes',
      'yoda'
    ],
    insults: [
      'boner jockey',
      'capitalist pig',
      'crotch biscuit',
      'douche socket',
      'garbage mammal',
      'lazy knob',
      'little commie',
      'trash waffle'
    ]
  },
  // Medium tier insults: minimum of 4 words maximum of 6 words
  medium: {
    insults: [
      'anal stinking leg zoo',
      'butter humping melon sack',
      'fart pimping melon breeder',
      'horse faced butter drinker',
      'lard sniffing poop herder',
      'seal drinking butt bender',
      'sheep sucking earwax poker',
      'wart milking doodle bag'
    ]
  },
  // Long tier insults: minimum of 7 words maximum of 20(?) words
  // (?) = possibly subject to change, based on how we handle the wall of text problems
  long: {
    triggers: [
      'brace-style',
      'camelcase',
      'comma-dangle',
      'comma-style',
      'curly',
      'eqeqeq',
      'no-const-assign',
      'no-eval',
      'no-ex-assign',
      'no-extend-native',
      'no-extra-boolean-cast',
      'no-func-assign',
      'no-global-assign',
      'no-tabs',
      'no-throw-literal',
      'no-unreachable',
      'no-unsafe-finally',
      'no-unused-vars'
    ],
    insults: [
      'Do you have to leave so soon? I was just about to poison the tea',
      'Thou art a flesh-monger, a fool and a coward',
      'Have you always hated yourself this much, or is this new',
      'I\'ll go get the .22, go wait out back for me'
    ]
  }
}
