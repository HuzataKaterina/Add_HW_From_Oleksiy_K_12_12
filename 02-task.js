'use strict'

const elem = document.querySelector('ol').addEventListener('click', (e) => {
    console.log(e.target.textContent);
    e.target.remove();
});
