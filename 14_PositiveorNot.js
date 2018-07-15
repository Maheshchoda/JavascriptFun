// 14) Write a program to check whether a number is a positive number or negative
// number?

const PositiveorNot = (x) => {
  var n = 0;
  n = x + 1;
  if (x === 0) {
    console.log(`The number ${x} is Neither Negative nor Possitve`);
  }else if (n < 1) {
    console.log(`The number ${x} is Negative`);
  }else {
    console.log(`The number ${x} is Positive`);
  }
};

PositiveorNot(32);
