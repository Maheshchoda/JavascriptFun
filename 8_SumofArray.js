// 8) Write a program to find the Sum of Array Elements.

const SumofArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
};

let arr = [1, 5, 5, 23];
SumofArray(arr);
