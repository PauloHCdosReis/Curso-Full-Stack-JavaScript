let velocidade = 0
function piloto (){
  let nomePiloto = prompt("Qual seu nome?")
  alert("Nome do piloto: " + nomePiloto)
}

function nave (){
  alert("Velocidade: " + velocidade)
  let mudarVelocidade = parseFloat(prompt("Qual velocidade que você quer acelerar a nave?"))

  let confirmacacao = confirm("A velocidade da nave vai mudar para " + mudarVelocidade)

  if(confirmacacao){
    alert("Velocidade mudada com sucesso")
    velocidade += mudarVelocidade
  }else{
    alert("A velocidade não foi mudada")
  }
}

function exibirMenu (){
  let opcao

  do {
    opcao = prompt("Escolha um opção:\n\n" + "1 - Nome do piloto\n" + "2 - Aumentar velocidade da nave\n3 - Sair")
    switch(opcao){
      case '1':
        piloto()
        exibirMenu()
        break
      case '2':
        nave()
        exibirMenu()
        break
      case '3':
        alert("Saindo do programa ... ")
        break
      default:
        alert("Opção inválida!!")
    }
    
  } while (opcao !== '3')
  array.forEach(element => {
    
  });
}
exibirMenu()