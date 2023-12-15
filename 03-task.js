'use strict'
// <!-- Створіть форму для введення імені користувача кнопку “Відправити”, та div.
// Коли користувач натискає на кнопку, повинен спрацьовувати алгоритм, який перевірятиме, чи введене ім’я користувача складається не менше ніж з 3-х символів, і виводить відповідне повідомлення у div, якщо умови порушені, якщо ім’я введено вірно, то воно має відображатись в div, а також і в консоль. -->

const input = document.querySelector('input');
const div = document.querySelector('div');

const handlerClick = (e) =>{
    const text = input.value;
    if (text.length <= 3){div.textContent = 'Введено менше 3-х симоволів'}
    else {div.textContent = `Ім'я введено вірно. Ім'я: ${text}`;
        console.log(text);     
    };
};
const button = document.querySelector('button').addEventListener('click', handlerClick);