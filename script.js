
const form = document.getElementById('form-check')
const message = document.getElementById('message')

form.addEventListener('submit', (e) => {
    const numberOne = document.getElementById('number-1')
    const numberTwo = document.getElementById('number-2')
    
     if(numberOne.value > numberTwo.value) {
        console.log(numberOne.value)
     }
})