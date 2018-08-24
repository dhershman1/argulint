// Our collection of insults
// Rule #1: Nothing with the obvious "extreme" curse words. Small stuff like "hell" are okay
// Rule #2: No straight out hate speech/derogitory remarks keep the insult obvious in it's jokey meaning
// For instance: Don't mock someones Gender, Weight, or Sexuality (These are just 3 examples)
// Rule #3: Please when adding new insults keep the arrays alphabetized

// All insults that do not meet the above rules will be met with an instant decline of their PR
module.exports = {
  // Short tier insults: Try to keep it to only a few words
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
      'Why you little commie',
      'You boner jockey',
      'You crotch biscuit',
      'You garbage mammal',
      'You little douche socket',
      'You math tutor',
      'You mother lover',
      'You mung tongue',
      'You nearsighted gynecologist',
      'You pinhead',
      'You prison barber',
      'You substitute chemistry teacher',
      'You trash waffle',
      'You\'re a capitalist pig',
      'You\'re a lazy knob'
    ]
  },
  // Medium tier insults: Try to stick to a max of 7-8 words
  medium: {
    insults: [
      'Gah, what a horse faced butter drinker',
      'Go away you, wart milking doodle bag',
      'In your face, camel cake!',
      'In your rear, cow derrière',
      'Lying, crying, spying, prying ultra-pig',
      'Why you fart pimping melon breeder',
      'Why you sheep sucking earwax poker',
      'You lard sniffing poop herder',
      'You little anal stinking leg zoo',
      'You stupid seal drinking butt bender',
      'You... you man! Stupid, stupid man!',
      'You\'re such a butter humping melon sack'
    ]
  },
  // Long tier insults: Get creative but not too much keep it interesting!
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
      'Do you have no self respect?',
      'Do you have to leave so soon? I was just about to poison the tea',
      'Have you always hated yourself this much, or is this new',
      'I\'ll go get the .22, go wait out back for me',
      'Thou art a flesh-monger, a fool and a coward',
      'Why don\'t you just go suck on a dead dog\'s nose',
      'You Boil-dripping beef, fart-sniffing bubble butt!',
      'You\'re a lewd, crude, rude, bag of pre-chewed food dude',
      'You two-toned zebra-headed, slime-coated, pimple-farmin\' paramecium brain, munchin\' on your own mucus, suffering from Peter Pan envy!'
    ]
  }
}
