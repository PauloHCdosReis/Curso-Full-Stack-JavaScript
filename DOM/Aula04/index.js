function show(){
  const contacList = document.getElementById('contac-list')
  console.log(contacList)

  const listElements = document.getElementsByTagName('li')
  console.log(listElements)
  
  const contacInputs = document.getElementsByClassName('contact-input')
  console.log(contacInputs)
  
  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)
  
  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)
  
  const primeiroContact = document.querySelector('#contact-list > li > label')
  console.log(primeiroContact)
  
}