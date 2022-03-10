/*
  Function() construtor

  * expressão new
  * criar um novo objeto 
  * this keyword

*/ 

function Person() {
  this.name = name 
  this.walk = function() {
    return this.name + "andando"
  }
 }

const gabys = new Person("Gabys")
const joao = new Person("Joao")

console.log(gabys.walk)
console.log(joao.name)