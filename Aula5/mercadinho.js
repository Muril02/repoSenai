

// Mercadinho

const mercadinho = (compras) =>{
    let pagar = 0
    for(i = 0; i < compras.length; i++){
        pagar+= compras[i]
    }
    return pagar
}


let compras = []
let show = parseInt(prompt("Quantos produtos irá comprar?"))

for(m = 0; m < show; m++){
    let carrinho = parseFloat(prompt(`Digite o valor do produto número ${m + 1}`))
    compras.push(carrinho)
}

resultado = mercadinho(compras)
alert(`A sua compra deu R$ ${resultado}`)

