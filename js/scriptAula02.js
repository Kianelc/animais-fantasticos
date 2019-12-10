/* forEach e Arrow Function */

const imgs = document.querySelectorAll('img');
// console.log(imgs);

let i = 0;
imgs.forEach(function(item, index, array) {
    // console.log(i++);
    // console.log(item, index, array);
});

/* transformar em array */
const titulos = document.getElementsByClassName('titulo');
const arrayTitulos = Array.from(titulos);

arrayTitulos.forEach(function(item) {
    //console.log(item);
});

imgs.forEach((item, index) => {
    // console.log(item, index);
});

imgs.forEach(item => {
    // console.log(item);
});

let x = 0;
// imgs.forEach(() => console.log(x++));

// Mostre no console cada parágrafo do site
const paragrafo = document.querySelectorAll('p');
// paragrafo.forEach(item => console.log(item));

// Mostre o texto dos parágrados no console
// paragrafo.forEach(item => console.log(item.innerText));

// Como corrigir os erros abaixo:
imgs.forEach((item, index) => {
    // console.log(item, index);
});

let b = 0;
// imgs.forEach(() => console.log(b++));

imgs.forEach(() => b++);