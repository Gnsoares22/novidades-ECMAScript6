//novas maneiras de escrever metodos de um objeto

const tipoSanguineo = "tipoSanguineo"; //variavel como chave de um array/funçao

const obj = {
  nome: "Gina",
  idade: 19,
  [tipoSanguineo]() {
    console.log("TIPO A");
  },
};

obj[tipoSanguineo]();


//serve tambem para propriedades

const apelido = "apelido";
const pessoa = {
  nome: "José",
  [apelido]: "Zé",
};

console.log(pessoa[apelido]);


//Json

dadosJson = (nome,idade,dataNascimento) => {
    return {nome, idade, dataNascimento}
}

const getUsuarios = dadosJson("Júlia",26,"13/11/1993");

console.log(getUsuarios);


//Funcoes com parametros definidos

function meuNomeSobrenome(nome,sobrenome){
   // let oSobrenome = (sobrenome == undefined) ? "" : sobrenome
    let oSobrenome = sobrenome || '' //operador ternário simplificado 
    console.log(`Meu nome é ${nome} ${oSobrenome}`)
}

meuNomeSobrenome("Gabriel","Willians");

// 2 modo 

function meusDados(nome,sobrenome,idade = 12){ //atribuindo valores padrões que podem ser substituidos 
   
    console.log(`Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos. `)
}

meusDados('Gabriel','Nascimento',23);