//hoinstings 

// é possível invocar uma função antes mesmo dela ser criada 

imprimirNome('Gabriel');

function imprimirNome(nome){
    console.log(nome);
}

//strings nova maneira de concatenar

const nome = "Gabriel";
console.log(`Meu nome é ${nome}`); //usa se crase `

const n1 = 1, n2 = 2;

//novo método de fazer uma quebra de linha template string
console.log(`${n1}  
+ ${n2} 
= 
${n1 + n2}`);
