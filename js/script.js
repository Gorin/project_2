/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// М О Е Р Е Ш Е Н И Е 
// const promoAdv = document.getElementsByClassName('promo__adv'),
//       genrePromo = document.getElementsByClassName('promo__genre'),
//       genreId = document.getElementById('promoId'),
//       listId = document.getElementById('itemId'),
//       movieList = document.querySelectorAll('.promo__interactive-list'),
//       promoList = document.querySelector('.promo__interactive-title'),
//       genreText = document.createTextNode('ДРАМА');


// promoAdv[0].remove();
// genrePromo[0].replaceWith(genreText);
// genreId.style.cssText = 'font-weight: bold; font-size: 18px; line-height: 21px; color: #FFFFFF; text-transform: uppercase; background: url("../img/bg.jpg") center center/cover no-repeat;' ;
// // listId.style.cssText = 'font-weight: 300; font-size: 20px; line-height: 18px; color: #000000; margin-bottom: 15px; padding-right: 40px; text-transform: uppercase;' ;


// movieDB.movies.sort();

// movieList.forEach(item => {
//     item.replaceWith(movieDB.movies);
// })


// for (let i = 0; i < hearts.length; i++) {
//       hearts[i].style.backgroundColor = 'blue';
// }

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


    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        // movieItem = document.getElementsByClassName('promo__interactive-item'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');


    // Функция добавления фильма в базу данных, при работе с формой и кнопкой добавить
    addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // отключаем стандартное поведение на странице, она не будет обновляться.

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) { // Создаем условие, при котором условие не выполняется, если строка пуста

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            // Выводим в консоль сообщение, если стоит галочка чекбокса.
            if (favorite) {
                console.log("");
            };

            movieDB.movies.push(newFilm); // пушим новый фильм в базу данных
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });



    // Функция удаления рекламы и прочего
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    
    // Функция внесения изменений
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };


    // Функция сортировки
    const sortArr = (arr) => {
        arr.sort();
    };


    // Функция добавления строки в список базы данных
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        // Делаем нумерацию списка
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        // Удаляем фильмы из базы данных, при нажатии на корзинку.
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                // Добавляем сортировку списка при удалении строки из базы данных
                createMovieList(films, parent);
            });
        });
    }


    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});