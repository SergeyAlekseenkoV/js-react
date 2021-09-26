"use strict";
/* ============== dynamic typization ==============*/

// To String

/* 1) */

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2) //

// console.log(typeof(null + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To number

// 1)

console.log(typeof(Number("4")));
console.log(Number('4'));

// 2)

console.log(typeof(+'5'));

// 3)

console.log(typeof(parseInt("15", 10)));

// let answer = +prompt("Hi there!", "");

// To boolean

// false all the time ====== F ++ A ++ L ++ S ++ E ===== //

// 0, '', null, undefined, NaN;

// 1)

let switcher = null;

if(switcher) {
    console.log('Running...');
}

switcher = 1;
if(switcher) {
    console.log('Running...');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!"44444"));












