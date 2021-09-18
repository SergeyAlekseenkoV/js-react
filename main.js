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

function movieInterview(numberOfFilms,lastseenFilm,evaluation,movies,personalMovieDB) {
    numberOfFilms = +prompt("How many films have you seen?", "");

personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [], 
    privat: false,
};

   lastseenFilm = prompt("One of the last seen films?","");
   evaluation = +prompt("How can you evaluate it?","");

    personalMovieDB[movies] = {
        lastseenFilm: evaluation,
    };

    console.log(personalMovieDB);
}

movieInterview();

const numberOfFilms = +prompt("How many films have you seen?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

 let  a = prompt("Tell us one of the last films",""),
      b = prompt("How are you evaluating it?",""),
      c = prompt("Tell us one of the last films",""),
      d = prompt("How are you evaluating it?","");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);

  












