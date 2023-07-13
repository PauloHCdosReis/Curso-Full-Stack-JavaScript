// Manipulando estilos diretamente pela propriedade style
function useLightTheme() {
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
  console.log(useLightTheme)
}

function useDarkTheme() {
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#212529'
  console.log(useDarkTheme)
}

// Manipulando estilos através das classes utilizadas pelo CSS
function switchTheme() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
  console.log(switchTheme)
}

// Adicionando os eventos
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)