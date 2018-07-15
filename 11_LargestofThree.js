// 11) Write a program to find the largest number among three numbers

const LargestofThree = (a, b, c) => {
  console.log((a > b) ? ((a > c) ? a : c) : (b > c ? b : c));
};

LargestofThree(6, 74, 30);
