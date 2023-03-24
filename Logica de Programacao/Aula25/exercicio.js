let nomeTurista = prompt('Qual seu nome? ')
let visitou = confirm('Você visitou alguma cidade? ')
let cidadeVisitadas = ""
let contagem = 0


while ( visitou == true){
  let cidade = prompt("Qual o nome da cidade que você visitou? ")
  cidadeVisitadas += "\n - " + cidade + "\n"
  contagem++
  visitou = confirm("Você visitou mais alguma cidade? ")
  
  if(visitou == false){
    break
  }
}

alert( nomeTurista + ', você visitou ' + contagem +  ' cidades, essas cidades são: ' + cidadeVisitadas)