const nome1 = prompt("Digite o nome do primeiro personagem: ")
let atq1 = Number(prompt("Digite o poder do ataque do personagem 1: "))

const nome2 = prompt("Digite o nome do segundo personagem: ")
let vida2 = Number(prompt("Digite a vida do personagem 2: "))
let def2 = Number(prompt("Digite o poder da defesa do personagem 2: "))
let escudo2 = confirm("O personagem 2 tem escudo? ") ? 'TEM ESCUDO' : 'NAO TEM ESCUDO'

let dano

(atq1 > def2 && escudo2 == 'NAO TEM ESCUDO') ? (dano = atq1 - def2) : (atq1 > def2 && escudo2 == 'TEM ESCUDO') ?
(dano = (atq1 / 2) - def2) : (atq1 <= def2) ? (dano = 0): 'DADOS INVALIDOS'

let novaVida = vida2 - dano
console.log(atq1)
console.log(vida2)
console.log(def2)
console.log(dano)

alert(
  "Personagem 1: " + nome1 + 
  "\n Ataque: " + atq1 +
  "\n Personagem 2: " + nome2 +
  "\n Vida: " + novaVida +
  "\n Defesa: " + def2 +
  "\n Escudo: " + escudo2
  )