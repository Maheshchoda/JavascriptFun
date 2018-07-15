// 13) Write a program to Check Whether the given year is a leap year or not

const LeapYearorNot = (n) => {
    if (n % 100 === 0 && n % 400 !== 0) {
      console.log(`${n} is not a Leap Year`);
    }else if (n % 4 === 0) {
      console.log(`${n} is a  Leap year`);
    }else {
      console.log(`${n} not a Leap year`);
    }
  };

LeapYearorNot(1802);
