//modo de estruturar classes (1 opcao)

function Carro(modelo, chassi, qtdPortas) {
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdPortas = qtdPortas;
}

Carro.prototype.Andar = () => {
  console.log("Andando....."); //prototipo adicionando um metodo para a classe Carro
};

const prototipo = new Carro("prototipo", "1231243423423", 4);
console.log(prototipo.modelo);
console.log(prototipo.chassi);
console.log(prototipo.qtdPortas);
prototipo.Andar();

//Herança por prototype

function Sonix(modelo, chassi, qtdPortas) {
  Carro.call(this, modelo, chassi, qtdPortas); //chamando os atributos call() da classe Carro
}

Sonix.prototype = Object.create(Carro.prototype); //cria um objeto do tipo carro
Sonix.prototype.constuctor = Sonix;

Sonix.prototype.abrirTetoSolar = function () { //adicionando um metodo para classe Sonix
  console.log("abrindo teto solar");
};

const sonix = new Sonix("Sonix", "9120219", 4);
console.log(sonix.modelo);
sonix.Andar();
sonix.abrirTetoSolar();



//modo de estruturar classes (2 opcao) 

class Carros{
    constructor(modelo, chassi, qtdPortas){ //metodo construtor obrigatorio
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtdPortas = qtdPortas;
    }
    static andar(){ //metodo static que permite ser invocado sem instanciar a classe
        console.log("Andando vrummm vruuumm vrummm ....");
    }
}

Carros.andar();

//heranca extends 
class Sony extends Carros{
    constructor(modelo,chassi, qtdPortas){
        super(modelo, chassi, qtdPortas);
    }
    static abrirTetoSolar(){
        console.log("Abrindooooooo teto solar !!!");
    }
}

Sony.abrirTetoSolar();