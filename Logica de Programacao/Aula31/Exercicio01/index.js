let numero = Number(prompt("Digite um valor para ser usado no cálculo: "))
let tabuada = ""

for (
  let i = 1;
  i <= 20;
  i++
){
  let resultados = numero * i
  tabuada += numero + ' x ' + i + ' = ' + resultados + ';\n'
}

alert("Resultado da tabuada do número 1 ao 20:\n" + tabuada)
