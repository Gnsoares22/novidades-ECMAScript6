function * rotaOnibus(){ //funcoes que podem ser interrompidas com yield e podem retornar a mensagem de interrupção 
    console.log("Passei pela rua 113");
    yield 'Fim da linha'
} 

const linha = rotaOnibus();
console.log(linha.next());