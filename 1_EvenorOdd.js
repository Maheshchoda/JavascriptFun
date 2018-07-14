// ===============  ************************  ==============
// 1)Write a program to given input Check whether Even or odd

const EvenorOdd = (x) => {
        if (x <= 0) {
          console.log('Please Enter a number greater than Zero');
        }else if (typeof x === 'string') {
          console.log('You Entered a Characters please enter a number');
        }else if (x % 2 === 0) {
          console.log(` ${x} is even`);
        } else {
          console.log(` ${x} is odd`);
        };
      };

EvenorOdd(3);
