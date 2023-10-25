const form = document.getElementById('form-check')
const message = document.getElementById('message')
const numberOne = document.getElementById('number-1')
const numberTwo = document.getElementById('number-2')


form.addEventListener('submit', (e) => {
      e.preventDefault()

      if(Number(numberOne.value) < Number(numberTwo.value)) {
        message.style.display = 'block'
        message.innerHTML = 'Número B maior que número A'
        message.classList.remove('wrong')
        message.classList.add('right')
     } 
      if(Number(numberOne.value) >= Number(numberTwo.value)){
         message.style.display = 'block'
         message.innerHTML = 'Número B não é maior que número A'
         message.classList.remove('right')
         message.classList.add('wrong')
      }
})