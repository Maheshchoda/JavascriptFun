// ===============   ************************  ==============
// 2) Write a program to Generate Even and Odd Number less than N and Generate ‘N’ Even and Odd
// Numbers.

const EvenorOddforN = (x) => {
    var n = x;
    console.log(`The given input is ${x}`);
    if (x <= 0) {
      console.log('Enter a number Greater than Zero');
    } else if (typeof x === 'string') {
      console.log('You Entered a Characters please enter a number');
    }else {
      console.log(`Generating Even and Odd for the given number:----`);
      for (let i = 1; i <= n; i++, x--) {
        if (x % 2 === 0) {
          console.log(`Even number:  ${x}`);
        }else {
          console.log(`Odd number:   ${x}`);
        }
      }
    }
  };

EvenorOddforN(31);
