//5)Write a program to find remainder of two numbers without using modulus (%)
// operator

const remainder = (x, y) =>  {
  console.log(x - y * Math.floor(x / y));
};

remainder(3, 7);
