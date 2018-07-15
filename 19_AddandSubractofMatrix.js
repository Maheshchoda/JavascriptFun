// 19) Write a program to add and subtract of given (NXN) Matrices

const AddandSubract = (matrix1, matrix2) => {
  let sum = new Array();
  let subract = 0;
  for (let i = 0; i <= matrix1.length - 1; i++) {
    for (let j = 0; j <= matrix2.length; j++) {
      sum.push((matrix1[i][j] + matrix2[i][j]));
    }
  }

  console.log(sum);
};

var matrix1 = [[1, 2, 3], [4, 5, 6]];
var matrix2 = [[7, 8, 9], [10, 11, 12]];
AddandSubract(matrix1, matrix2);
