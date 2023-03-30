let menu
let paciente = []

do {
menu = prompt("Digite o numero para entrar na aba desejada:\n\n" + 
              "1 - Lista de todos os pacientes na espera;\n" +
              "2 - Novo paciente;\n" +
              "3 - Consultar paciente;\n" +
              "4 - Tirar paciente;\n" +
              "5 - Sair.")

  switch(menu){

    case '1':
      let mensagem = "Lista de Paciente:\n\n"
      if(paciente.length === 0){
        mensagem = "Não há pacientes na fila!"
      }else {
        for(let i = 0; i < paciente.length; i++){
          mensagem += (i + 1) + '. ' + paciente[i] + '; \n';
        }
      }
      alert(mensagem)
      break

    case '2':
      paciente.push(prompt("Digite o nome do Paciente:"))
      let ultimoPaciente = paciente[paciente.length - 1]
      alert("Nome do paciente que foi adicionado:  " + ultimoPaciente + ".")
      break

    case '3': //if(typeof paciente === "string") ou if(paciente)
      if(paciente.length === 0){
        alert("Não há pacientes na fila!")
      }else{
        let consultarPaciente = paciente.shift()
        alert("Paciente " + consultarPaciente + " foi chamado para consulta com o médico")
      }
      break

    case '4':
      if(paciente.length === 0){
        alert("Não há pacientes na fila!")
      } else {
        let removerPaciente = prompt("Digite o nome do paciente a ser removido:")
        let i = paciente.indexOf(removerPaciente)
        if(i === -1){
          alert("Paciente, " + removerPaciente + ", não encontrado na fila!")
        } else {
          paciente.splice(i, 1)
          alert("Paciente, " + removerPaciente + ", removido com sucesso!")
        }
      }
      break

    case '5':
      alert("Encerrando o programa...");
      break
    
    default:
      alert("Opção inválida!");
      break;
  }
} while (menu !== '5')