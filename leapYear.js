// const year = 3620;
// if(year % 4 == 0){
//     console.log('Year year is a Leap Year');
// }else{
//     console.log('Year year is Not a Leap Year');
// }


function leapYear(year){
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return  true;
      }
      else{
        return false;
      }

     
}

const res1 = leapYear(2032);
console.log(res1);
const res2 = leapYear(2031);
console.log(res2);
const res3 = leapYear(2020);
console.log(res3);
const res4 = leapYear(1700);
console.log(res4);

