'use strict'

const div = document.querySelector('div');

const imeges = [
    {
        nameImege: 'New Year',
        link: 'img_1.jpg',
    },
    {
        nameImege: 'New Year',
        link: 'img_2.jpg',
    },
    {
        nameImege: 'New Year',
        link: 'img_3.jpg',
    },
    {
        nameImege: 'New Year',
        link: 'img_4.jpg',
    },
    {
        nameImege: 'New Year',
        link: 'img_5.jpg',
    },
    {
        nameImege: 'New Year',
        link: 'img_6.jpg',
    },
    {
        nameImege: 'New Year',
        link: 'img_7.jpg',
    },
    {
        nameImege: 'New Year',
        link: 'img_8.jpg',
    },
    {
        nameImege: 'New Year',
        link: 'img_9.jpg',
    },
]
let i = 0;
const img = document.querySelector('#img');
const moveImage = (e) => { 
    e.target.id == 'next'? i++: i--;
    if (i > 8){i = 0};
    if (i < 0){i = 8}
    img.src = imeges[i].link
};

const btnNext = document.querySelector('#next').addEventListener('click', moveImage)
const btnPrevious = document.querySelector('#previous').addEventListener('click', moveImage)

const keyDownImg = (e) =>{
    console.log(e)
    const img = document.querySelector('#img');
    switch (e.key){
        case '1': img.src = imeges[0].link;
        break;
        case '2': img.src = imeges[1].link;
        break;
        case '3': img.src = imeges[2].link;
        break;
        case '4': img.src = imeges[3].link;
        break;
        case '5': img.src = imeges[4].link;
        break;
        case '6': img.src = imeges[5].link;
        break;
        case '7': img.src = imeges[6].link;
        break;
        case '8': img.src = imeges[7].link;
        break;
        case '9': img.src = imeges[8].link;
        break;
    };

};
    document.addEventListener('keydown', keyDownImg);