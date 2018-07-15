// 18) Write a program to find area and circumference of circle

const AreaandCircumference = (diameter) => {
  var PI = 3.14;
  var Radius = 2 / diameter;
  var Area = PI * (Radius * Radius);
  var Circumference = PI * diameter;
  console.log(`The Area of the Circle is ${Area}`);
  console.log(`The Circumference of a Circle is ${Circumference}`);
};

AreaandCircumference(2);
