const a = window.prompt("Digite o valor A: ");
const b = window.prompt("Digite o valor B: ");

a = parseFloat(a)
b = parseFloat(b)

const soma = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;

let resultado = window.alert("Resultados. Soma: " + soma +
"; Subtração: " + subtracao + "; Multiplicação: " + multiplicacao +
"; Divisão: " + divisao + " !!");