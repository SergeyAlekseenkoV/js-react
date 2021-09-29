/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector('.promo__interactive-list');


// remove advertisment   
adv.forEach(item => {
    item.remove();
});
// replace content
genre.textContent = "драма";
// changing bg
poster.style.backgroundImage = "url('img/bg.jpg')";
// clear the static data from html layout
movieList.innerHTML = "";
console.log(poster.innerHTML);
// ==== sort elements ==== //
movieDB.movies.sort();
// go through them 
movieDB.movies.forEach(function(film, i){
    movieList.innerHTML +=  `
        <li class="promo__interactive-item">${i + 1}&nbsp;${film}
            <div class="delete"></div>
        </li>
    `;
});





