/* Classes e Atributos */

const menu = document.querySelector('.menu');
// console.log(menu.classList[0]);

menu.classList.add('louco', 'teste');
// console.log(menu.classList);
menu.classList.remove('teste');
// console.log(menu.classList);
// Adicionar ou remover
menu.classList.toggle('teste');

if (menu.classList.contains('teste')) {
    menu.classList.add('novo');
    // console.log(menu.classList);
}

/* Não sobreescreve as classes existentes */
menu.className += ' nao-removeu';
// console.log(menu.className);

const animais = document.querySelector('.animais');
// console.log(animais.attributes);
// console.log(animais.attributes[0]);
// console.log(animais.attributes.class);

const img = document.querySelector('img');
// console.log(img.getAttribute('src'));
img.setAttribute('alt', 'Mudei o alt');

const possuiAtributo = img.hasAttribute('title');
// console.log(possuiAtributo);

// Adicione a classe ativa a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu li');
itensMenu.forEach((item) => {
    item.classList.add('ativa')
});

// Remove a classe ativa de todos os itens do menu e mantenha apenas o primeiro
itensMenu.forEach((item => {
    item.classList.remove('ativa');
}));
itensMenu[0].classList.add('ativa');

// Verifique se as imagens possuem atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach((item) => {
    // console.log(item.hasAttribute('alt'));
});

// Modifique o href do link externo do menu (o ultimo link)
const ultimoItemMenu = itensMenu[itensMenu.length - 1].querySelector('a'); 
ultimoItemMenu.setAttribute('href', 'https://www.coxinha.com/');
console.log(ultimoItemMenu);

const ultimoItem = document.querySelector('a[href^="http"]');
ultimoItem.setAttribute('href', 'https://www.mariacoxinha.com/');
console.log(ultimoItem);
