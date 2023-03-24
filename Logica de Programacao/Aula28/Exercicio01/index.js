let escolha

do {
  escolha = prompt("Escolha uma opção: 1, 2, 3, 4 e 5")

  switch (escolha){
    case '1':
      alert("você selecionou a opção 1")
      break
    case '2':
      alert("você selecionou a opção 2")
      break
    case '3':
      alert("você selecionou a opção 3")
      break
    case '4':
      alert("você selecionou a opção 4")
      break
    case '5':
      alert("Saindo")
      break
  }
} while (escolha !== '5')