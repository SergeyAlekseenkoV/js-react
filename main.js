"use strict";
/* ==============  OOP basis ==============*/
// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3,4]);

// === old method with __proto__ === //

const soldier = {
    health: 400,
    armor: 100,
    sayCommand: function() {
        console.log("Run!");
    }
};

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;
// console.log(john.armor);


// =============== modern method =============== //

const john = Object.create(soldier);

// the same as john.__proto__ = soldier;
Object.setPrototypeOf(john, soldier);
john.sayCommand();

// ============ practice ============ //

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How many films have you seen?","");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many films have you seen?","");
        }
    },
    myFilms: function() {
        for(let i = 0; i < 2; i++) {
            var  a = prompt("Tell us one of the last films",""),
                 b = prompt("How are you evaluating it?","");
    
            if(a != null && b != null && a !='' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    personalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("You have seen such little amount");
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log("You are the common watcher");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are the big fun of films");
        } else {
            console.log("An error occured!");
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeGenres: function() {
        for(let i = 1; i <= 1; i++) {
            // let genre = prompt(`Your favourit genre is ${i}`);
            // personalMovieDB.genres[i - 1] = genre;

            // if(genre === "" || genre == null) {
            //     console.log("Entred data is incorrect!");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genre = prompt(`Enter your favouri genres through commas`);
            if(genre === "" || genre == null) {
                    console.log("Entred data is incorrect!");
                    i--;
            } else {
                    personalMovieDB.genres = genre.split(', ');
                    personalMovieDB.genres.sort();
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Favourit genre ${i + 1} is ${item}`);
        });
    }
};










