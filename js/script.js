/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 15 символов - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll(".promo__adv img"),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        // reset standard behaviour
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;  

        //prevent adding an empty string to the list
        if(newFilm) {
            // write our film to movieDB
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            // create new element
            createMovieList(movieDB.movies, movieList);
        }

        if(newFilm) {
            // if te name is too long cut the string
            if(newFilm.length > 15) {
                newFilm = `${newFilm.substring(0, 16)}...`;
            }

            if(favorite) {
                console.log("Adding favorite film here...");
            }

        }

        event.target.reset();
    });    

    
    
    // remove advertisment   
    const removeAdv = (arr) => {
        adv.forEach(item => {
            item.remove();
        });
    };

    removeAdv(adv);
    
    const makeChanges = () => {
        // replace content
        genre.textContent = "драма";
        // changing bg
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    makeChanges();

    // sort
    const sortArr = (arr) => {
        arr.sort();
    };

    // sortArr(movieDB.movies); // => call this in createMovieList()
    

    function createMovieList(films, parentElement) {
        // clear the static data from html layout
        parentElement.innerHTML = "";

        // sorting
        sortArr(films);
        
        // go through them 
        films.forEach(function(film, i){
            parentElement.innerHTML +=  `
                <li class="promo__interactive-item">${i + 1}&nbsp;${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parentElement);
            });
        });
    }
    createMovieList(movieDB.movies, movieList);
});





