"use strict";
// let symb = "#";
// for (let count = 0; count <7; count++) {
//     console.log(symb);
//     symb += "#";
// }


for (let num = 0; num <= 100; num++) {
    if (num % 3 == 0 && num != 0) { // Если num делится на 3 без остатка и num != 0,
        console.log('Buzz'); //  то выводим Buzz
    } else if (num % 5 == 0 && num % 3 != 0) { // Если num делится на 5 без остатка и не делится на 3 без остатка
        console.log('Fizz'); // то вывыдим Fizz
    } 
}

// for (let num = 0; num <= 100; num++) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log("FizzBuzz");
//     }
// }
