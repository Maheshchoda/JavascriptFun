// 9) Write a program for swapping of two arrays

const SwappingofArrays = (arr1, arr2) => {
  var arr3 = arr2;
  arr2 = arr1;
  arr1 = arr3;
  console.log(arr1);
  console.log(arr2);
};

var arr1 = [1, 2, 5];
var arr2 = [4, 5, 6];
SwappingofArrays(arr1, arr2);
