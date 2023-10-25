const form = document.getElementById('form-check')
const message = document.getElementById('message')
const numberOne = document.getElementById('number-1')
const numberTwo = document.getElementById('number-2')


form.addEventListener('submit', (e) => {
      e.preventDefault()

     if(numberOne.value < numberTwo.value) {
        message.style.display = 'block'
        message.innerHTML = 'Número B maior que número A'
        message.classList.add('right')
     } 
      if(numberOne.value >= numberTwo.value){
         message.style.display = 'block'
         message.innerHTML = 'Número B não é maior que número A'
         message.classList.add('wrong')
      }
})