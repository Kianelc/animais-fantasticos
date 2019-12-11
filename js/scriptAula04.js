/* Dimensões e Distâncias */

const animaisLista = document.querySelector('.animais-lista');
const height = animaisLista.scrollHeight;
const altura = animaisLista.offsetTop;
// console.log(altura);

const primeiroH2 = document.querySelector('h2');
const esquerdaH2 = primeiroH2.offsetLeft;
// console.log(esquerdaH2);

/* Coordenadas do objeto */
const rect = primeiroH2.getBoundingClientRect();
// console.log(rect);

if (rect.top < 0) {
    // console.log('passou do elemento');   
}

/* console.log(
    window.innerHeight, 
    window.innerWidth, 
    window.outerHeight, 
    window.outerWidth,
    window.pageYOffset
); */

const small = window.matchMedia('(max-widh: 600px)');

if (small.matches) {
    // console.log('Usuario mobile');    
}

// Verifique a distancia da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
 console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((item, index) => {
        const largura = item.offsetWidth;
        soma += largura;
    });
    console.log(soma);
}

window.onload = function() {
    somaImagens();
}

// Verifique se os links da página possuem o minimo recomendado para telas mobiles (48px/48px)
const links = document.querySelectorAll('a');
links.forEach((item) => {
    const linkWidth = item.offsetWidth;
    const linkHeight = item.offsetHeight;
    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log('Acessível');
    }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const menuMobile = window.matchMedia('(max-width: 720px');
const menu = document.querySelector('.menu');

if (menuMobile.matches) {
    menu.classList.add('menu-mobile');
}