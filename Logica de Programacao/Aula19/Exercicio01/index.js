const car1 = prompt("Digite o nome do veiculo número 1:")
let speed1 = prompt("Digite a velocidade do veiculo número 1, '" + car1 + "': ")
const car2 = prompt("Digite o nome do veiculo número 2:")
let speed2 = prompt("Digite a velocidade do veiculo número 2, '" + car2 + "': ")

speed1 = parseFloat(speed1)
speed2 = parseFloat(speed2)

const resultado =  (speed1 > speed2) 
? ("Veiculo 1, " + car1 + ", é mais rápido que o veiculo 2, " + car2 +".") 
: (speed1 == speed2) ? ("Veiculo 1 e 2 tem a mesma velocidade")
: ("Veiculo 2, " + car2 + ", é mais rápido que o veiculo 1, " + car1 +".")



console.log(resultado)