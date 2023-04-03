let menu
let base
let altura
let area
let lado
let baseMaior
let baseMenor
let pi
let raio

do {
  menu = prompt("Digite o numero para a opção que desejar calcular:" +
  "\n\n1 - Área do triângulo;" + 
  "\n2 - Área do retângulo;" +
  "\n3 - Área do quadrado;" +
  "\n4 - Área do trapézio;" +
  "\n5 - Área do círculo;" +
  "\n6 - Sair.")

  switch (menu){
    case '1':
      /* function triangulo(base, altura) {
        let area = alert("A área do triângulo é " + (base * altura)/2)
        return area
      }
      triangulo(parseFloat(prompt('Digite a base:')),parseFloat(prompt("Digite a altura: "))) */

      function calcularAreaTriangulo(base, altura){
        return (base * altura) / 2; 
      }
      
      base = parseFloat(prompt('Digite a base do triângulo:'));
      altura = parseFloat(prompt('Digite a altura do triângulo:'));

      area = calcularAreaTriangulo(base, altura);

      alert(`A área do triângulo é ${area}`);

      break 

    case '2':
      function calcularAreaRetangulo(base, altura){
        return base * altura
      }
    
      base = parseFloat(prompt('Digite a base do retângulo:'));
      altura = parseFloat(prompt('Digite a altura do retângulo:'));

      area = calcularAreaRetangulo(base, altura);

      alert(`A área do retângulo é ${area}`);

      break 
    case '3':
      function calcularAreaQuadrado(lado){
        return lado * lado
      }

      lado = parseFloat(prompt("Digite o lado do quadrado:"))

      area = calcularAreaQuadrado(lado)

      alert("A área do quadrado é " + + area)
      break
    case '4':
        function calcularAreaTrapezio(baseMaior, baseMenor, altura){
          return (baseMaior + baseMenor) * altura / 2
        }

        baseMaior = parseFloat(prompt("Digite a base maior do trapézio:"))
        baseMenor = parseFloat(prompt("Digite a base menor do trapézio:"))
        altura = parseFloat(prompt("Digite a altura do trapézio:"))

        area = calcularAreaTrapezio(baseMaior, baseMenor, altura)

        alert("A área do trapézio é : " + area)
      break
    case '5':
      function calcularAreaCirculo(pi, raio){
        pi = 3.14
        return pi * (raio * raio)
      }

      raio = parseFloat(prompt("Digite o raio do círculo:"))

      area = calcularAreaCirculo(pi, raio)

      alert("A área do círculo é: " + area)
      break
    case '6':
      alert("Saindo do programa...")
      break
    default:
      alert("Opção Inválida")
  }
  
} while (menu !== '6');