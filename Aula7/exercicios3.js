let contador = 0
// let resultado = document.getElementById('resultado')
let resultado = document.querySelector('#resultado')
const contar = () =>{
    contador++
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p>`
}

const zerar = () =>{
    contador = 0
    resultado.innerHTML = `<p>O contador foi zerado.</p>`
}

const diminuir = () =>{
    contador--
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark>.</p>`
}