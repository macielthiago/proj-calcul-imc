var botão = document.getElementById('botão')
var altura = document.getElementById('altura')
var peso = document.getElementById('peso')
var tres = document.getElementById('tres')

let tcor1 = document.getElementById('tcor1')
let tcor2 = document.getElementById('tcor2')
let tcor3 = document.getElementById('tcor3')
let tcor4 = document.getElementById('tcor4')
let tcor5 = document.getElementById('tcor5')

botão.addEventListener('click', clicar)

function clicar() {
    var imc = (peso.value / (altura.value * altura.value)).toFixed(2)

    if(imc < 18.5) {
        tres.innerHTML = `${imc}`
        tcor1.style.backgroundColor = 'lightgrey'
    } else if(imc > 18,5 && imc < 25) {
        tres.innerHTML = `${imc}`
        tcor2.style.backgroundColor = 'lightgrey'
    } else if(imc > 25 && imc < 30) {
        tres.innerHTML = `${imc}`
        tcor3.style.backgroundColor = 'lightgrey'
    } else if(imc > 30 && imc < 40) {
        tres.innerHTML = `${imc}`
        tcor4.style.backgroundColor = 'lightgrey'
    } else {
        tres.innerHTML = `${imc}`
        tcor5.style.backgroundColor = 'lightgrey'
    }
}