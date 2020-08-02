//Map, Weak map e Set

//criando um objeto
var mapa = new Map();
var obj = {}
function teste(){}

mapa.set("string","teste"); //set atribui uma chave valor ao map
mapa.set(obj,"sou um objeto");
mapa.set(teste,"funcao");
console.log(mapa);

//recuperando os valores do mapa através de suas chaves 
console.log(mapa.get("string"));
console.log(mapa.get(obj));
console.log("Tamanho do mapa " + mapa.size); //tamanho do mapa
console.log(mapa.has("string")); //verifica se o map tem alguma palavra ou item 

console.log(mapa.delete("string")); //deleta um item do mapa/objeto através da sua chave
console.log(mapa.has("string")); //verifica se o item foi deletado, se sim retorna false

mapa.clear(); //limpando um mapa por completo
console.log(mapa.size);

//iterando maps

var itens = new Map();
itens.set('um', 1);
itens.set('dois', 2);
itens.set('três', 3);

for(var item of itens){ //pode ser iterados por Keys() ou por Values() ou por completo usando Entries() ou não
    console.log(item);
}

//Weak Map

/* var weakMap = new WeakMap(); //as chaves so podem ser objetos (exemplo só funciona com página html)
var elemento1 = document.querySelector('div');
var elemento2 = document.querySelector('body');
weakMap.set(elemento1, 'sou o elemento1');
weakMap.set(elemento2, 'sou o elemento2');

console.log(weakMap.get(elemento1));
console.log(weakMap.get(elemento2)); */


//Set estrutura de dados que não permitem dados duplicados
var set = new Set(); // ou Set([1,2,3]) o array já pode ser passado no construtor do método Set

set.add(1);
set.add(1);
set.add(2);
set.delete(2); //deleta um elemento do Set()
set.clear(); //existe tambem o clear para limpar todos elementos do Set()
// set.has() verifica se o elemento existe retornando true se sim e false se não 
//set.size() mostra o tamanho da lista Set()

for(var s of set){
    console.log(s);
}


//var let e const 