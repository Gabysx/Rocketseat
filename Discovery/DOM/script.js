// getElementById()
// const element = document.getElementById('blog-title')
// console.log(element)

// getElementByClassName()
// const element = document.getElementsByClassName('blog-title');
// console.log(element)

// getElementByTagName()
// const element = document.getElementsByTagName('h1');
// console.log(element)

//querySelector() => pega o primeiro que acha!! 
// const element = document.querySelector('h1');
// console.log(element)

// //querySelectorAll() => pega todos que encotrar !! 
// const element = document.querySelectorAll('h1');
// console.log(element)

/*
  Manipulando Conteudo
  textContent
*/

// const element = document.querySelector('h1');
// element.textContent += ' Hello World!';

// console.log(element.textContent);

/*
  Manipulando Conteudo
  innerText
*/

// const element = document.querySelector('h1');
// element.innerText =  'Hello World!';

/*
  Manipulando Conteudo
  innerHTML
  
  const element = document.querySelector('h1');
  element.innerHTML +=  ' Hello World! <span>Droga</span>';
*/
/*
  Manipulando Conteudo
  value - Valor de input 

 const element = document.querySelector('input');
 element.value =  'Hello World!';
*/

/*
  Manipulando Conteudo
  Atributos 
*/

// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerID = document.querySelector('#header')
// console.log(headerID.getAttribute('id'))

// header.removeAttribute('id')

/*
  Manipulando Styles 

const element = document.querySelector('body');
element.style.backgroundColor ='#f9f3D2' //atribuir

console.log(element.style.backgroundColor) //pegar
*/

/*
  Manipulando Styles 
  classList

const element = document.querySelector('body');
element.classList.add('active') // adiciona a class
console.log(element.classList) 
element.classList.remove('active') // remove a class
element.classList.toggle('active') // adicona ou remove a class(depende da ação inicial )*/

/*
  Navegando pelos elementos (PAI)
  **parentNode **parentElement

const element = document.querySelector('h1');
console.log(element.parentElement)
const body = document.querySelector('body');
console.log(body.parentNode)
*/

/*
  Navegando pelos elementos (Filho)
  **childNodes **children

const body = document.querySelector('body');

console.log(body.children)
*/

/*
  Navegando pelos elementos
  **nextSibling **nextElementSibling



const el = document.querySelector('header');
console.log(el.nextSibling)
console.log(el.nextElementSibling)// mais especifico */

/*
  Navegando pelos elementos
  **previousSibling **previousElementSibling


const el = document.querySelector('header');
console.log(el.nextSibling)
console.log(el.nextElementSibling)// mais especifico
*/

/*
  Criando e adicionando elementos 

  const el = document.createElement('div')
  el.innerText = "Olá seu bosta"

  // append prepend 
  const body = document.querySelector('body')
  body.append(el) // adiciona o elemento criado depois 
  body.prepend(el) // adiciona o elemento criado antes, se torna o primeiro filho
*/

/*
  Criando e adicionando elementos 
  insertBefore
  
 

  const el = document.createElement('div')
  el.innerText = "Olá seu bosta"

  const body = document.querySelector('body')
  const script = body.querySelector('script')

  body.insertBefore(el,script)
*/

/*Eventos on 

const input = document.querySelector('input')

input.onkeydown = function() {
  console.log('rodei')
}

const h1 = document.querySelector('h1')
  h1.addEventListener('mouseover', print)

function print() {
  console.log('print')
}
*/