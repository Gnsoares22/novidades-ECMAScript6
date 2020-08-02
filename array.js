//forEach() maneira mais limpa de iterar um array

var nomes = ["Lisandra", "Amélia", "Angela", "Maria"];

nomes.forEach((nome) => {
  console.log(nome);
});



//Map() retorna um array com os mesmos elementos só que modificado

var numeros = [1, 2, 3, 4, 5];
var dobro = numeros.map((array) => {
  return array * 2;
});

console.log(dobro);



//Filter() filtrar os dados de modo que só retorna o resultado que passar no teste lógico do filter

var alunos = [
  { nome: "joão", idade: 15 },
  { nome: "josé", idade: 18 },
  { nome: "maria", idade: 20 },
];

var resultado = alunos.filter((alunos) => {
    return alunos.idade >= 18;
})

console.log(resultado);



//Find() encontrar algum registro na lista (só retorna o primeiro registro encontrado)

var elementoEncontrado = alunos.find((alunos) => {
        return alunos.nome === "josé";
})

console.log(elementoEncontrado);



//Every() retorna true (se todos elementos do array passarem no teste lógico) AND
var todosAlunosDeMaior = alunos.every((aluno) => {
    return aluno.idade >= 18;
})

console.log(todosAlunosDeMaior);




//Some() retorna true (se pelo menos um dos elementos passarem no teste lógico) OR

var pesoMalas = [40,30,50,60,20,10];
var pesoMaior30 = pesoMalas.some((peso) => {
   return peso >= 30
})

console.log(pesoMaior30)

//reduce() condensa os valores do array em um só valor com exceção do ultimo exemplo que retorna um array de nomes
var numeros = [1,2,3,4,5];

somaElementos = numeros.reduce((a,b) => a+b);
console.log(somaElementos);

somenteNomes = alunos.reduce((arrayNomes, alunos) => {
    arrayNomes.push(alunos.nome)
    return arrayNomes;
},[])
console.log(somenteNomes);


