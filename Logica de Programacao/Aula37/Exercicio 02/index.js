let menu
let baralho = []
let quantidadesCartas = 0

do {
  menu = prompt("Quantidade de cartas: " + quantidadesCartas +
                "\n\nDigite o número da opção que deseja escolher:\n\n"+
                "1 - Adicionar uma carta\n" +
                "2 - Puxar uma carta\n" +
                "3 - Sair"
                )
  
  switch(menu){
    case '1':
      let addCarta = baralho.unshift(prompt("Adicione a carta, escreva o nome da carta:"))
      quantidadesCartas++
      break
    
    case '2':
      let puxarCarta = baralho[baralho.length -1]
      quantidadesCartas--
      alert("A carta que foi puxada foi " + puxarCarta)
      let removerCarta = baralho.pop()
      break
    case '3':
      alert("Saindo do jogo de cartas ...")
      break
  }
} while (menu !== '3');