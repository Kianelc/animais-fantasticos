/* Seleção de Elementos */

const animais = document.getElementById('animais');
// console.log(animais);
// console.log(animais.innerText);

const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);
// console.log(gridSection.length);
// console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
// console.log(linkInterno);

const imgAnimais = document.querySelectorAll('.animais img');
// console.log(imgAnimais);
// console.log(imgAnimais[0]);

/* Atualiza em tempo real */
const gridSectionHtml = document.getElementsByClassName('grid-section');
/* Constante - não atualiza */
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');
// console.log(gridSectionHtml);
// console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index) {
    // console.log(item);
});

/* transforma em array */
const arrayGrid = Array.from(gridSectionHtml);
 arrayGrid.forEach(function(item) {
    // console.log(item);
 });

// Retorne no console todas as imagens do site
const todasImagens = document.getElementsByTagName('img');
// console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('[src^="img/imagem"]');
// console.log(imagens);

// Selecione todo os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2AnimaisDescricao = document.querySelector('.animais-descricao h2');
// console.log(h2AnimaisDescricao.innerText);

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
//console.log(ultimoP[ultimoP.length - 1].innerText);


