"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = 'blue'; // hex , RGB
// box.style.width = '500px';

// 1 и 2 вариант = одинаковый итог
box.style.cssText = 'background-color: red; width: 500px' ;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//       hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
      item.style.backgroundColor = 'blue';
})



const div = document.createElement('div');
// const text = document.createTextNode('Kekw Kekw');

div.classList.add('black');
wrapper.append(div); // Код для новых браузероd

// wrapper.appendChild(div); // Код для старых браузеров

// wrapper.prepend(div);

// hearts[0].before(div); // Код для новых браузеров
// wrapper.insertBefore(div, hearts[1]); // Код для старых браузеров

// hearts[0].after(div);

// circles[0].remove(); // Код для новых браузеров
// wrapper.removeChild(hearts[1]); // Код для старых браузеров

// hearts[0].replaceWith(circles[0]); // Код для новых браузеров
// wrapper.replaceChild(circles[0], hearts[0]); // Код для старых браузеров




div.innerHTML = "<h1>Hello world!</h1>";

// div.textContent = "Hello";

// div.insertAdjacentHTML('afterend', '<h2>hey</h2>');

