//extraindo dados de um array/objeto com destruct

const Usuario = {
  nome: " Elliot",
  sobrenome: "Alderson",
  senha: "mrrobot",
  email: "elliot.alderson@gmail.com",
  profissao: "Engenheiro de Cibersegurança",
  github: "https://github.com/ElliotAlderson",
};

const {email} = Usuario; //pegando um atributo do objeto 
console.log(email)

//usando rotulos (atribuindo um outro nome ao atributo selecionado)
const {senha:senhaEliot} = Usuario;
console.log(senhaEliot);


//Em Arrays
const [nome,idade] = ["Julio",33]
console.log(nome)
console.log(idade)