let usuarios = []
function boasVindas(){
  return alert("Bem vindo!!")
}
function dadosUsuarios(){
  let dados = {
    nomeUsuario: prompt("Informe seu nome:"),
    idadeUsuario: prompt("Informe sua idade:")
  }

  let confirmacao = confirm("Você deseja salvar a sua idade:" + dados.idadeUsuario)?"Sim":"Não"
  if (confirmacao == "Sim") {
    alert("Idade salva com sucesso!!")
    usuarios.push(dados)
    alert("Seus dados são?\n\n" +
  "Nome: " + dados.nomeUsuario +
  "\nIdade: " + dados.idadeUsuario +
  '\nConfirmação da idade: ' + confirmacao)
  } else {
    dadosUsuarios()
  }
  
  return
}

boasVindas()
dadosUsuarios()

