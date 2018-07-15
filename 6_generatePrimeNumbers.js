// 6) Write a program to generate Prime Numbers less than N and Generate ‘N’ Prime
// Numbers/in given range

const GeneratePrime = (start, end) => {
  if (typeof start === 'string' || typeof end === 'string') {
    console.log(`Please Enter a number`);
  }else if (start <= 0 || end <= 0) {
    console.log(`Please Enter a number Greater than One`);
  }else {
    var count = 0;
    for (let i = start; i <= end; i++) {
      count += 1;
    }
  }
 if( count === 2){
   console.log(`The`)
 }
};
