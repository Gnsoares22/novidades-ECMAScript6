//iteráveis

var cantores = ["Roberto Carlos","Tim Maia","Gilberto Gil","Chico Buarque"];

var iterarCantores = cantores[Symbol.iterator]();

console.log(iterarCantores.next())
console.log(iterarCantores.next())
console.log(iterarCantores.next())
console.log(iterarCantores.next())
console.log(iterarCantores.next()) // done igual true quando a iteração do array é finalizada

//sortear cantores aleatórios
var randomNumber = Math.floor(Math.random()*cantores.length);
console.log(cantores[randomNumber]);



//FOR OF e FOR IN 

for(var cantor of cantores){ //iterador de enumeráveis 
    console.log(cantor);
}

var perfilDoFacebook = {
    nome: 'Carlos',
    idade: 22
}

for(var dados in perfilDoFacebook){ //for in iterador de objetos/arrays 
    console.log(perfilDoFacebook[dados]);
}