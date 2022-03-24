/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';
movieList.innerHTML = "";

movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});
