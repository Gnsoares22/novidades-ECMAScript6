//muitos parametros na função ...

//no ECMAS5 usava-se arguments para pegar todos os argumentos passados na função

function soma(...valores) {
  let iterar = valores.length;
  let soma = 0;
  for (let i = 0; i < iterar; i++) {
    soma += valores[i];
  }
  return soma;
}

let resultado = soma(1, 2, 3);
console.log(resultado);


// ou utilizando o reduce()
function soma(...valores) {
  return valores.reduce((a, b) => a + b);
}

let resultado2 = soma(1,5,6,7);
console.log(resultado2);