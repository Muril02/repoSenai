let result = document.getElementById("acao")

const lojaBolada = () =>{
    let produto = window.prompt("Qual será o produto comprado?")
    let preco = parseInt(window.prompt("Qual é o valor do produto?"))
    let valorPago = parseInt(window.prompt("Com qual valor pagará a compra?"))
    let troco = valorPago - preco 

    alert(`Você pagou R$${preco.toFixed(2)} pelo produto ${produto}. Usando R$${valorPago.toFixed(2)}`)
    if(troco < 0){
        alert(`Não houve troco nesta compra`)
    }else{
        alert(`Seu troco foi de R$${troco.toFixed(2)} reais`)
    }
}