'use strict'

const btns = document.querySelectorAll('button');

btns.forEach(btn => {btn.addEventListener('click', (e) => {e.target.parentElement.textContent = 'Hello'})});

