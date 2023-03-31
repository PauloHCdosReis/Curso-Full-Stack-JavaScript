/* function ola(){
  console.log("Olá Mundo!")
}

ola() */

function dobro(x){
  alert("O dobro de " + x + " é " + (x * 2))
}

/* dobro(5)
dobro(7)
dobro(Number(prompt("Digite um número:"))) */

function dizerOla(nome) {
  alert("Olá, " + nome + '!')
}

/* dizerOla("Paulo") 
dizerOla() */

function soma(a, b) {
  alert("Resultado da soma é: " + (a + b))
}
/* soma(1,2)  */

function criarUsuario(nome, email, senha, tipo = 'admin') {
  const usuario = {
    nome, /* mesmo que nome: nome */
    email,
    senha,
    tipo
  }

  console.log(usuario)
}

function muitoParametros(nome, telefone, endereco, aniversario, email, senha){
  //...
}

function objetoComoParametros(usuario){
  usuario.nome
  usuario.email
}
muitoParametros("nome", "telefone", "endereco", "aniversario", "email", 'senha')

const dados = {
  nome: '',
  telefone: '',
  email:''
}
objetoComoParametros(dados)