const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar Elementos

// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Teste")
console.log(arr)
console.log(tamanho)


//Removendo Elementos

// pop: Remove um elemento no final do array e devolve o elemento removido
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)
// shift: Remove um elemento no começo do array e devolve o elemento removido
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)


//Pesquisando por um Elemento

// includes: Verifica se um certo elemento está presente no array
const inclui = arr.includes("Sam")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)


//Cortando e Concatenando

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros
  )

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)


//Substituindo Elementos

// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos =  sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)


//Iterando sobre os Elementos

// Usando o for para percorrer cada elemento do array
for(let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra ma posiçao " + indice)
}