// 12) Write a program to find the roots of a quadratic equation
// x= (−b ±sqrt((b*b)-4 * a * c))/2a;

const rootsofQuadratic = (a, b, c) => {
  let squareRoot = Math.sqrt((b * b) - 4 * a * c);
  let denominator = 2 * a;
  let root1 = (-b + squareRoot) / denominator;
  let root2 = (b + squareRoot) / denominator;
  console.log(root1, root2);
};

rootsofQuadratic(2, -4, -3);
