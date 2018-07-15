// 16) Write a program check whether given character is an alphabet or not

const AlphabetorNot = (char) => {
  if (char.length > 1 || typeof char === 'number') {
    console.log(`Please enter a Alphabet`);
  }else if (typeof char === 'string') {
    console.log(`You Entered a Alphabet`);
  }
};

AlphabetorNot('a');
