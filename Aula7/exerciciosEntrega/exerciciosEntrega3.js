let result = document.getElementById("acao")

const numerosPrev = () =>{
    let numero = parseInt(window.prompt("Qual o número escolhido?"))
    let calcNega = numero - 1 
    let calcAdic = numero + 1
    result.innerHTML = `<p>O antecessor deste número é: ${calcNega}<br>O sucessor deste número é: ${calcAdic}</p>`
}