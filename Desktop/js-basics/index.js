
let a='blue';
let b ='red';

let c=a;
a=b;
b=c;
console.log(a);
console.log(b);

// hour if hour is between 6am and 12pm; Good morning!
// if hour is between 12pm and 6pm: Good afternoon!
// otherwise:Good evening
'use strict'
let hour=10;

if (hour>= 6 && hour<12)
    console.log('Good morning');

else if(hour>= 12 && hour<18)
    console.log('Good afternoon');

else 
    console.log('Good evening');


lunction fizzBuzz2(n) {
    for (let i = 1; i <= n; i++) {
      let str = "";
  
      if (i % 3 === 0) str += "fizz"
      if (i % 5 === 0) str += "buzz"
      if (str === "") str = i;
    
      console.log(str);
    }
  }
