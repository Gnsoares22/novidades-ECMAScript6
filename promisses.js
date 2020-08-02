//novas maneiras de fazer requisições assíncronas evitando callback hell 

//estados resolve (resolvido) e reject (rejeitado devido a erros) para requisições
let promisse = new Promise((resolve, reject) =>{
    let resultado = true;
    if(resultado){
        resolve;
        console.log("Deu boa");
    } else {
        reject;
        console.log("Rejeitado");
    }
})

promisse.then(); //recuperar dados
promisse.catch(); // trata o erro exibindo ao usuário


promisse.then((data) => {
    console.log(`resultado: ${data}`)
}).catch((err) => {
    console.log(`resultado: ${err}`)
});

