const metros = Number(prompt("Digite o valor em metros: "))

const escolha = prompt(
  "Digite a abreviação para escolher o tipo da medida:\n" +
  "milímetro (mm);\n" +
  "centímetro (cm);\n" +
  "decímetro (dm);\n" +
  "decâmetro (dam);\n" +
  "hectômetro (hm);\n" +
  "quilômetro (km)." )

  switch (escolha){
    case 'mm':
      let mm = metros * 1000
      alert("Conversão para Milímetro: " + mm)
      break
    case 'cm':
      let cm = metros * 100
      alert("Conversão para Centímetro: " + cm)
      break
    case 'dm':
      let dm = metros * 10
      alert("Conversão para Decímetro: " + dm)
      break
    case 'dam':
      let dam = metros / 10
      alert("Conversão para Decâmetro: " + dam)
      break
    case 'hm':
      let hm = metros / 100
      alert("Conversão para hectômetro: " + hm)
      break
    case 'km':
      let km = metros / 1000
      alert("Conversão para Quilômetro: "+ km)
      break
    default:
      alert("Opção inválida")
  }