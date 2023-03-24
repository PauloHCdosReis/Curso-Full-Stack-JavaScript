const primeiroNome = window.prompt("Digite seu primeiro nome?")
const sobrenome = window.prompt("Digite seu sobrenome?")
const campoEstudo = window.prompt("Qual é seu campo de estudo?")
const anoNascimento = window.prompt("Qual seu ano de nascimento?")

/* 
\n quebra a linha

idade = 2023 - anoNascimento

let resultado =  window.alert("Seu nome é " + primeiroNome + " " + sobrenome + 
  ", seu campo de estudo é " + campoEstudo + 
  " e sua idade baseada pelo seu ano de nascimento é " + idade + ". Está correto!!")

  ou
  */

  let resultado =  window.alert("Seu nome é " + primeiroNome + " " + sobrenome + 
  "\n seu campo de estudo é " + campoEstudo + 
  "\ne sua idade baseada pelo seu ano de nascimento é " + (2023 - anoNascimento) 
  + "\nEstá correto!!")
