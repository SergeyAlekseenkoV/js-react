/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

/* ======= task ======= */

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("How many films have you seen?","");
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("How many films have you seen?","");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };
    
//     function rememberMyFilms() {
//         for(let i = 0; i < 2; i++) {
//             var  a = prompt("Tell us one of the last films",""),
//                  b = prompt("How are you evaluating it?","");
    
//             if(a != null && b != null && a !='' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     }
    
//     rememberMyFilms();
// //    ======== the same loop by using while loop ======== //

//     // var i = 0;
//     // while(i < 2) {
//     //     var  a = prompt("Tell us one of the last films",""),
//     //          b = prompt("How are you evaluating it?","");

//     //     if(a != null && b != null && a !='' && b != '' && a.length < 50) {
//     //         personalMovieDB.movies[a] = b;
//     //         console.log('done');
//     //     } else {
//     //         console.log('error');
//     //         i--;
//     //     }
//     //     i++;
//     // }

// function defineTheLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log("You have seen such little amount");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//         console.log("You are the common watcher");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("You are the big fun of films");
//     } else {
//         console.log("An error occured!");
//     }
// }

// defineTheLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     } 
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for(var i = 1; i <= 3; i++) {
//         // const genre = prompt(`Your favorite genre is ${i}`);
//         // personalMovieDB.genres[i - 1] = genre;
//         personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is ${i}`);
//     }
// }

// writeYourGenres();

var a = [41,2,43,43,444,4,4,4,4,4];
var rar = [];

function revAr() {
    
    for(; a.length; ){
        var cut = a.pop();
        rar.push(cut);
    }
}
revAr();
console.log(rar.lenght);
console.log(rar);

// ==== callback functions ==== //

function someFunction() {
    // do something
    setTimeout(function(){
        console.log(1);
    },500);
}

function doSmth(){
    console.log(2);
}

someFunction();
doSmth();

function learnJS(lang, callback) {
    console.log(`I'am learning ${lang}`);
    callback();
}

function done() {
    console.log('I made it!');
}

learnJS('JS', done);
