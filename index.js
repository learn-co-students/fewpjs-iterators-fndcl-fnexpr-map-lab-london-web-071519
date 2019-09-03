const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = tutorials.map(tutorial => {
  let newPhrase = [];
  let words = tutorial.split(" ") 
    words.forEach(word => { 
      let capitalLetter = word.charAt(0).toUpperCase(); 
      let newWords = word.slice(1)
      let phrase = capitalLetter.concat(newWords);
      newPhrase.push(phrase)
      newPhrases = newPhrase.join(" ")  }
      )
      return newPhrases;
  })
