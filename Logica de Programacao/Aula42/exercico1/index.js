let imoveis = [];
let quantidadeImoveis = 0
let opcao = ''

do{
  opcao = prompt('Quantidade de imóveis cadastrado no sistema: ' + quantidadeImoveis +
    '\n\nEscolha uma opção:\n1 - Cadastrar imóvel\n2 - Listar imóveis\n3 - Sair');

  
  switch(opcao) {
    case '1':
        let imovel = {
          nomePropriedade: prompt("Qual o nome do proprietário?"),
          quartos: prompt("Quantos quartos tem o imóvel?"),
          banheiros: prompt("Quantos banheiros tem o imóvel?"),
          garagem: confirm("Tem garagem o imóvel?")
        }
        imoveis.push(imovel)
        alert('Imóvel cadastrado com sucesso!')
        quantidadeImoveis++
      break
    case '2':
      let stringdosimoveis = ''
      for (let i = 0; i < imoveis.length; i++){
        stringdosimoveis += 'Imovel numero:'+(i+1) + '\nNome da Propriedade: '+ imoveis[i].nomePropriedade +
          '\nNumero de Quartos:' + imoveis[i].quartos + '\n'
      }
      alert(stringdosimoveis)
      console.log(imoveis)
      break
    case '3':
      alert('Obrigado por utilizar o nosso programa!');
      break;

    default:
      alert('Opção inválida! Tente novamente.');
      break;
}
} while(opcao !== '3');