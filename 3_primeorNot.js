//3)Write a program to decide given N is Prime or not.
const primeorNot = (x) => {
  var count = 0;
  if (typeof x === 'string') {
    console.log('You Entered a Characters please enter a number');
  } else if (x < 1) {
    console.log('Enter a number Greater than Zero');
  }else if (x === 1) {
    console.log(`The Number 1 is neither Prime nor Composite`);
  }else {
    for (i = 1; i <= x; i++) {
      if (x % i === 0) {
        count += 1;
      }
    }

    if (count === 2) {
      console.log(`${x} is a Prime number`);
    }else {
      console.log(`${x} it's not a prime number`);
    };
  }
};

primeorNot(4);
