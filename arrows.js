//forma simplificada de escrever uma função (menos verbosa)

function somaTradicional(a, b) {
  //tradicional
  return a + b;
}

const somaArrow = (a, b) => {
  return a + b;
}; //com arrows (se tiver só um parametro pode remover os parenteses)

console.log(somaArrow(5, 4));
console.log(somaTradicional(6, 6));

// O uso do this

const equipe = {
  nome: "Guerreiros Z",
  membros: ["Goku", "Kuririn", "Vegeta"],
  membrosDaEquipe: function () {
    this.membros.forEach((membro) => {
      console.log(`${membro} é da equipe ${this.nome}`);
    });
  },
};

equipe.membrosDaEquipe();
