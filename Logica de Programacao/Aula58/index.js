let listasVagas = []

function listarVaga(){
  let alerta = '';
  
  if (listasVagas.length === 0){
    alerta = "Nenhuma vaga adicionada no sistema!!";
  }else{
    listasVagas.forEach((vagas, index) => {
      alerta += ("\n___________\n\n" + "Indice:" + (index + 1) +
      "\nNome da Vaga: " + vagas.nomeVaga +
      "\nCandidatos:" + vagas.candidatos.length)
    });
  }
  
  alert(alerta);
}

function criarVaga(){
  let novaVaga = {
    nomeVaga: prompt("Informe o nome da vaga:"),
    descricaoVaga: prompt("Informe uma descrição para a vaga:"),
    dataLimiteVaga: prompt("Informe uma data limite para a vaga:"),
    candidatos: []
  }

  let confirmacao = confirm("Salvar vaga?\n\n"+
  "Nome: " + novaVaga.nomeVaga +
  "\nDescrição: " + novaVaga.descricaoVaga +
  "\nData limite: " + novaVaga.dataLimiteVaga)

  if(confirmacao){
    listasVagas.push(novaVaga)
    alert("Vaga salva com sucesso!!")
  }else{
    alert("Vaga não foi salva, voltando para o menu!!")
  }
  return 
}

function visualizarVaga(){
  if (listasVagas.length === 0) {
    alert("Não há vagas cadastradas.")
    return
  }

  let indice = parseFloat(prompt("Informe o número do indice da vaga que deseja buscar:"))

  if (indice > 0 && indice <= listasVagas.length){
    const vaga = listasVagas[indice-1] 
    let mensagem = "A vaga foi encontrada!!\n\n" +
    "Índice: " + indice +
    "\nNome: " + vaga.nomeVaga +
    "\nDescrição: " + vaga.descricaoVaga +
    "\nData limite: " + vaga.dataLimiteVaga +
    "\nCandidatos:\n"

    vaga.candidatos.forEach(function(candidato, index) {
      mensagem += (index+1) + ". " + candidato + "\n";
    })

    alert(mensagem)
  }else {
    alert("Índice inválido.")
  }
}

function inscreverCandidato(){
  if (listasVagas.length === 0) {
    alert("Não há vagas cadastradas.")
    return
  }

  let indice = parseFloat(prompt("Informe o número do indice da vaga que deseja buscar:"))

  if (indice > 0 && indice <= listasVagas.length){
    const vaga = listasVagas[indice-1]
    let nomeCandidato = prompt("Digite o nome do candidato para adicionar à vaga: " + vaga.nomeVaga)
    
    let confirmacao = confirm("Salvar candidato " + nomeCandidato + "?\n\n"+
    "Nome: " + vaga.nomeVaga +
    "\nDescrição: " + vaga.descricaoVaga +
    "\nData limite: " + vaga.dataLimiteVaga)

    if(confirmacao){
      vaga.candidatos.push(vaga)
      alert("Candidato " + nomeCandidato + " cadastrado com sucesso na vaga " + vaga.nomeVaga)
    }else{
      alert("Candidato " + nomeCandidato + " não foi cadastrado na vaga" + vaga.nomeVaga)
    }
  }else {
    alert("Índice inválido.")
  }
}

function excluirVaga(){
  if (listasVagas.length === 0) {
    alert("Não há vagas cadastradas.")
    return
  }
  
  let indice = parseFloat(prompt("Informe o número do indice da vaga que deseja excluir:"))
  
  if (indice > 0 && indice <= listasVagas.length){
    const vaga = listasVagas[indice-1]

    let confirmacao = confirm("Excluir vaga?\n\n"+
    "Nome: " + vaga.nomeVaga +
    "\nDescrição: " + vaga.descricaoVaga +
    "\nData limite: " + vaga.dataLimiteVaga)

    if(confirmacao){
      listasVagas.splice(indice-1, 1)
      alert("Vaga excluida com sucesso, vaga: " + vaga.nomeVaga)
    }else{
      alert("Vaga não foi excluida, vaga: " + vaga.nomeVaga)
    }

  }else {
    alert("Índice inválido.")
  }
}

function exibirMenu (){
  return prompt("Gerenciador de Vagas - Informe o número para escolher a opção:" +
  "\n\n1 - Listar vagas disponíveis;" +
  "\n2 - Criar uma nova vaga;" +
  "\n3 - Visualizar uma vaga;" +
  "\n4 - Inscrever um candidato em uma vaga;" +
  "\n5 - Excluir uma vaga;" +
  "\n6 - Sair.")
}
function executar (){
  let opcao  = ''

  do {
    opcao = exibirMenu()
    //let resultado

    switch(opcao){
      case '1':
        listarVaga()
        break
      case '2':
        criarVaga()
        break
      case '3':
        visualizarVaga()
        break
      case '4':
        inscreverCandidato()
        break
      case '5':
        excluirVaga()
        break
      case '6':
        alert("Saindo do Gerenciador de Vagas!!")
        break
      default:
        alert("Opção Inválida!!")
    }
  } while (opcao !== '6');
}

executar()
console.log(listasVagas)