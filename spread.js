//operador de propagação
const argumentos = [1, 2, 3];
console.log(...argumentos); //desmembrando um array

let listaMae = ["ovo", "margarina", "café", "pão"];
let listaNamorada = ["bombom", "chocolate", "sorvete"];
let listaEscritorio = ["caneta", "borracha", "lapis"];

//com spread trata multiplos argumentos de forma individual
const listaCompras = [...listaMae, ...listaNamorada, ...listaEscritorio];
console.log(listaCompras);

//sem spread
const listaComprasNova = [listaMae, listaNamorada, listaEscritorio];
console.log(listaComprasNova);

//adicionando item do objeto no array com spread
const produtoSelecionado = {
  descricao: "Blusa de Lã",
  preco: "R$ 59,90",
};

const compra = [
  { descricao: "Bota de Cano Médio", preco: "R$ 199,90" },
  { descricao: "Saia Colorida", preco: "R$ 29,90" },
  { descricao: "Vestido Longo", preco: "R$ 399,90" },
];

const compraAtualizada = [...compra, produtoSelecionado]
console.log(compraAtualizada)