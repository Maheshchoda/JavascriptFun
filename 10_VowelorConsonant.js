// 10) Write a program to check whether given character is vowel or consonant

const VowelorConsonant = (char) => {
  if (char.length <= 0 || char.length > 1 || typeof char === 'number') {
    console.log(`Please Enter a Alphabet `);
  }else if (char.length === 1) {
    char = char.toUpperCase();
    if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      console.log(`The given Alphabet  ${char} is a Vowel`);
    }else {
      console.log(`The give Alphabet ${char} is not a Vowel`);
    }
  }
};

VowelorConsonant('a');
