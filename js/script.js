"use strict";

// =========== work with Date() ============ //

let now = new Date();

// current date and time
// console.log(now);

// now = new Date(2021, 5, 1, 20); 
// console.log(now);

// since 1970 all dates goes in milliseconds
now = new Date(); 
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTime());
// console.log(now.getTimezoneOffset());

console.log(now.setHours(18));

// benchmark

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();
console.log(`loop done after ${end -start}ms`);