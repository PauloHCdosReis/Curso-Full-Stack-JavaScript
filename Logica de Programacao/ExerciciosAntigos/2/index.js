let pessoas = [];

function novaPessoa (){
  let pessoa = {
    nomePessoa: prompt("Informe seu  nome:"),
    idadePessoa: prompt("Informe a idade da pessoa:")
  };

  let salvar = confirm("Salvar os dados:\n\n" + "Nome: " + pessoa.nomePessoa + "\nIdade: " + pessoa.idadePessoa + " anos.");

  if(salvar){
    alert("Dados salvos com sucesso!!");
    pessoas.push(pessoa);
  } else {
    alert("Dados não foram salvos!!");
  }
}

function pessoaMaisVelha (){
  if(pessoas.length === 0){
    alert("Não há nenhuma pessoa cadastrada");
    return;
  } else if (pessoas.length === 1){
    alert("Não há pessoas suficientes");
    return;
  }

  let primeiraPessoa = prompt("Informe o nome da primeira pessoa:");
  let segundaPessoa = prompt("Informe o nome da segunda pessoa:");

  let idadePrimeiraPessoa;
  let idadeSegundaPessoa;

  pessoas.forEach(function(pessoa) {
    if(pessoa.nomePessoa === primeiraPessoa) {
      idadePrimeiraPessoa = pessoa.idadePessoa;
    } else if (pessoa.nomePessoa === segundaPessoa) {
      idadeSegundaPessoa = pessoa.idadePessoa;
    }
  });

  if(idadePrimeiraPessoa === undefined || idadeSegundaPessoa === undefined) {
    alert("Algum dos nomes informados não corresponde a uma pessoa cadastrada");
    return;
  }

  idadePrimeiraPessoa = parseInt(idadePrimeiraPessoa);
  idadeSegundaPessoa = parseInt(idadeSegundaPessoa);

  if (idadePrimeiraPessoa > idadeSegundaPessoa) {
    alert(primeiraPessoa + " é mais velho(a) que " + segundaPessoa + " por " + (idadePrimeiraPessoa - idadeSegundaPessoa) + " anos.");
  } else if (idadeSegundaPessoa > idadePrimeiraPessoa) {
    alert(segundaPessoa + " é mais velho(a) que " + primeiraPessoa + " por " + (idadeSegundaPessoa - idadePrimeiraPessoa) + " anos.");
  } else {
    alert(primeiraPessoa + " e " + segundaPessoa + " têm a mesma idade.");
  }
}

function exibirMenu() {
  let opcao = prompt("Escolha uma opção:\n\n1. Cadastrar pessoa\n2. Verificar pessoa mais velha\n3. Sair")

  switch(opcao) {
    case "1":
      novaPessoa()
      exibirMenu()
      break
    case "2":
      pessoaMaisVelha()
      exibirMenu()
      break
    case "3":
      alert("Saindo do programa...")
      break
    default:
      alert("Opção inválida, tente novamente.")
      exibirMenu()
  }
}

exibirMenu()
