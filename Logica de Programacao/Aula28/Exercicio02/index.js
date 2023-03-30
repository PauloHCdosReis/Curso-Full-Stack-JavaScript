let escolha
let saldoConta = 0
let addSaldo
let retirarSaldo 


do{
  alert("Seu saldo é de: " + saldoConta)
  escolha = prompt("Escolha uma opção: \n\n1 - Adcionar Dinheiro\n2 - Retirar Dinheiro\n3 - Sair da Conta")
  switch (escolha){
    case '1':
      addSaldo = Number(prompt("Adicione um saldo a ser adicionado? "))
      saldoConta = saldoConta + addSaldo
      //ou posso fazer saldo += prompt("Informe o valor a ser adicionado:")
    break
    case '2':
      retirarSaldo = Number(prompt("Digite um valor para ser retirado? "))
      saldoConta = saldoConta - retirarSaldo
      //ou posso fazer saldo -= prompt("Informe o valor a ser retirado:")
    break
    case '3':
      alert("Encerrando sessão")
    break
    default:
      alert("Opção Inválida")
      break
  }
}while (escolha !== '3')