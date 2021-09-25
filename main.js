"use strict";

// ========= objects ========= //

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() {
//         console.log('Tested!');
//     }
// };

// options.makeTest();

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// console.log(options['colors']['border']);

// ===== Object destructuring ===== //

// const {border, bg} = options.colors;
// console.log(border);

// ===== loop through the object by using Method for(in) ===== //

// for (let key in options) {
//     console.log(`Property ${key} has a value ${options[key]}`);
// }

// for(of) method doesn't work for looping through the object //
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]) {
//             console.log(`Property ${i} has a value ${options[key][i]}`);
//             // counter++;
//         }
//     } else {
//         console.log(`Property ${key} has a value ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// ===== arrays ===== //

// var arr = [2,3,4,5,6];

// last element position

// let last = arr.length -1;
// console.log(last);
// console.log(arr.length);
// ===== callback function gets 3 arguments,firstly forEach goes after callbacks inside running
// ===== elem - element, i - iterations, arr - link to the array
// arr.forEach(function(elem, i, arr){
//    console.log(`${i}: ${elem} inside ${arr}`);
// });


// var strArr = prompt("","");
// var products = strArr.split(", ");
// products.sort();
// console.log(products.join(';'));

// var numArr = [2, 13 , 45 , 453, 222];
// numArr.sort(compareNum);
// console.log(numArr);

// // callback function to sort numbers 

// function compareNum(a , b) {
//     return a - b;
// }
// //
//
// ===== pass data through value or through the link ===== //

let someA = 5,
    someB = someA; // these work with the ptimitives alone
someB = someB + 5;

console.log(someB);
console.log(someA);

const obj = {
    someA: 5,
    someB: 1
};

// ==== !!!! ==== passed through the link ==== !!!! ==== ///
const copy = obj;

copy.someA = 10;

console.log(copy);
console.log(obj);

function copyC(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// ==== we have made the clone(copy),it is shallow copy ==== //
const newNumbers = copyC(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

var add = {
    d: 17,
    e: 20
};
// add.d = 20;
// //  independent shallow copy
// console.log(Object.assign(numbers, add));

var clone = Object.assign({}, add);
clone.d = 20;

// console.log(add);
// console.log(clone); // in clone stores shallow copy of the previuos Obj

// ======= create copy of an Array ========== //

const oldArray = ["a","b","c"];
const newArray = oldArray.slice();

newArray[1] = "asdasdsa";

console.log(newArray);
console.log(oldArray);

const videos = ["youtube", "vimeo", "rutube"],
    blogs = ["wordpress", "livejournal", "blogger"],
    internet = [...videos, ...blogs, 'vk', 'facebook'];

    console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];

log(...num);

// create copy of an array //
const someArray = ["a", "b"];

const newSomeArray = [...someArray];

console.log(newSomeArray);

// == copy of an Objects == //

const q = {
    one:1,
    two: 2
};

const newObj = {...q};

console.log(newObj);

