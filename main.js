"use strict";
/* ============== tasks from interviews ==============*/
// 1)
let x = 5;
alert(x++);// 5
console.log(x);// 6

// 2)
let str = [] + false - null + true;
console.log(str); // NaN

// 3)
let y = 1;
let X = y = 2;
alert(X); // 2

// 4)

console.log([] + 1 + 2); // "12"

// 5)

alert("1"[0]); // first(0) element of a string - "1"

// 6)

console.log(2 && 1 && null && 0 && undefined); // && breaks on false(null here) - null

// 7) Is here a difference?
// !!(a && b) and (a && b)?

console.log(!!(1 && 3) === (1 && 3)); // false

// 8) What will be the output here?
alert(null || 2 && 3 || 4); // 3

// 9) A = B ? // no, false

var A = [1, 2, 3];
var B = [1, 2, 3];

// 10)
alert(+"Infinity"); // Infinity

// 11) is it true - "Ежик" > "Яблоко" ... // false

console.log("Ежик" < "Яблоко");








