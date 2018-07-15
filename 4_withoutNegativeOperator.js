//4)Write a program to subtract two integers without using Minus (-) operator
const Subraction = (x, y) => {
  if (typeof x === 'string' || typeof y === 'string') {
    console.log('Please enter a Number');
  }else {
    var result = x + (~y + 1);
    console.log(`${result}`);
  }
};

Subraction(5, 0);
