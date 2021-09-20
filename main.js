"use strict";

// a = 123;

// console.log(a);

// let num = 5;
// const leftBorderWidth = 1;

// console.log(num + leftBorderWidth);

// const obj = {
//     a: 233
// };

// obj.a = 3432;

// console.log(obj);

// // hoisting
// console.log(name);
// var name = "NIKOLAS";

// {
//     var result = 50;
// }

// console.log(result);

// ======== types of data =========== //

// numbers

// let numB = 4.6;
// console.log(numB/0);// infinity
// console.log('string' * 9);// NaN - not a number

// const person = `5 and ${numB}`; // string
// console.log(person);

// const logical = true; // boolean (true or false)
      
// undefind (if we try to output the variable without declaration)
// ReferenceError - ошибка ссылочного типа

// let und;
// console.log(und); // undefind

// Symbol and BigInt are rearly used data

// Objects (inside data and properties(methods))
/* obj ={
     key: value,
} */

// const obj_ = {
//     name: "John",
//     age: 36,
//     isMarried: true,
// };

// console.log(obj_.name);
// console.log(obj_['name']);

// arrays(it's a particular case of an object) complex type of data

// let arr = ['plum.png','orange.jpg','apple.webp',];
// console.log(arr[0]);

// ============= comunication with client ============= //

// functions alert(),prompt(),confirm()

// const result_ = confirm("Are you here?");
// console.log(result_);

// const answer = prompt("Are you old enough ?","18");
// string in all cases, if add '+' before we canchange it to number
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt(`What's your name ?`,'');
// answers[1] = prompt(`What's your surname ?`,'');
// answers[2] = prompt(`What's your age ?`,'');

// document.write(typeof(answers));

// const CATEGORY = "toys";

// console.log('https://someurl.com/' + CATEGORY + '/');

// console.log(`https://someurl.com/${CATEGORY}/5`)

// alert(`Hello ${CATEGORY}`);

/* ++++++++ my version of the assignment ++++++++ */

// function movieInterview(numberOfFilms,lastseenFilm,evaluation,movies,personalMovieDB) {
//     numberOfFilms = +prompt("How many films have you seen?", "");

// personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [], 
//     privat: false,
// };

//    lastseenFilm = prompt("One of the last seen films?","");
//    evaluation = +prompt("How can you evaluate it?","");

//     personalMovieDB[movies] = {
//         lastseenFilm: evaluation,
//     };

//     console.log(personalMovieDB);
// }
// movieInterview();

/* ======= task ======= */
// 1) Automize questions about films by using a cicle
// 2) Make such way the program, so that user can not leave answer as the
// empty string, cancle it or type name more than 50 characters.If it is going on
// return him to questions again.
/* 3) BY using conditios check peronalmMovieDB.count, if it is less than 10 - 0utput message
"You have seen such little amount", from 10 to 30 -
"You are the common watcher", if more than 30
"You are big fun of films", else output "error"
*/

// const numberOfFilms = +prompt("How many films have you seen?","");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

//     for(let i = 0; i < 2; i++) {
//         var  a = prompt("Tell us one of the last films",""),
//              b = prompt("How are you evaluating it?","");

//         if(a != null && b != null && a !='' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }

    // ======== the same loop by using while loop ========

    // var i = 0;
    // while(i < 2) {
    //     var  a = prompt("Tell us one of the last films",""),
    //          b = prompt("How are you evaluating it?","");

    //     if(a != null && b != null && a !='' && b != '' && a.length < 50) {
    //         personalMovieDB.movies[a] = b;
    //         console.log('done');
    //     } else {
    //         console.log('error');
    //         i--;
    //     }
    //     i++;
    // }


    //     if (personalMovieDB.count < 10) {
    //         console.log("You have seen such little amount");
    //     } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    //         console.log("You are the common watcher");
    //     } else if (personalMovieDB.count >= 30) {
    //         console.log("You are the big fun of films");
    //     } else {
    //         console.log("An error occured!");
    //     }

    //   console.log(personalMovieDB);

//   =========== conditions ============ //

// if(4 == 9) {
//     console.log('ok');
// } else {
//     console.log('error!');
// }

// const num = 50;
// if(num < 49){
//     console.log("err");
// } else if (num > 100) {
//     console.log("to much...");
// } else {
//     console.log("ok");
// }

// // ternary operator

// (num === 50) ? console.log('ok!') : console.log('Error');

/* ====== switch ====== */

// let num = 50;
// switch (num) {
//     case 49: 
//         console.log("Error");
//         break;
//     case 100:
//         console.log("Error");
//         break;
//     case 50: 
//         console.log("true!");
//         break;
//     default:
//         console.log("not now...");
// }

/* ====== while ====== */

// while(num < 65) {
//     console.log(num);
//     num++;
// }

/* ====== do while ====== */

// do {
//    console.log(num);
//    num++; 
// }
// while(num < 55);

/* ====== for ====== */

// for (let i = 1; i < 8; i++) {
//     if(i == 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

/* ======== functions ========= */

// function expression 

let num = 10;

function showMessage(text) {
    console.log(text);
    num = 12;
}

showMessage('My message here . . .' + num);
console.log(num);

function calc(a,b) {
    return (a + b);
}

console.log(calc(4,3));
console.log(calc(5,7));

function ret() {
    let num = 45;
    // some code here
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// functio declaration

const logger = function(){
     console.log("Some log here))");
};

logger();

// arrow function
// has no context this

const CALC = (a,b) => {return a + b};

// methods and properties strings and numbers

const STR = "test";
const ARR = [1,2,3,4,];

console.log(STR.length);
console.log(STR[0]);
console.log(STR.toUpperCase());
console.log(ARR.length);

// "поиск подстроки"

let fruit = "Some fruit";

console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q')); // "-1", that means it doesn't exist.

let logg = "Some log";

console.log(logg.slice(5, 8)); 
console.log(logg.slice(-5,-1)); // "e lo"

console.log(logg.substring(5, 8)); // "log"

console.log(logg.substr(5, 8)); // 'log'

const nUm = 12.2;
console.log(Math.round(nUm));

const test = "12.2px";
console.log(parseFloat(test));

var a = [41,2,3,4,5];
var rar = [];

function revAr() {
    
    for(let i = 0; i = a.length; i++ ){
        var cut = a.pop();
        rar.push(cut);
    }
}
revAr();
console.log(rar);







