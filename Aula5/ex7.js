// const calcularMedia = (numeros) =>{
//     let soma = 0
//     for(let i = 0; i < numeros.length; i++){
//         soma += numeros[i]
//     }
//     return soma / numeros.length
// }

// Calculos dos valores

const calculos = (quantidade) =>{
    let exibicao = 0
    if (mostrar === "+"){
        for(j = 0; j < quantidade.length; j++){
            exibicao+= quantidade[j]
        }
        return exibicao 
    }else if(mostrar === "-"){
        for(j = 0; j < quantidade.length; j++){
            exibicao = exibicao - quantidade[j]
        }
        return exibicao
    }else if(mostrar === "/"){
        for(j = 0; j < quantidade.length; j++){
            exibicao = exibicao / quantidade[j]
        }
        return exibicao
    }
}

let quantidade = []

let mostrar = String(prompt("Digite o símobolo da operação que deseja realizar"))
let mostrar2 = parseFloat(prompt("Digite a quantidade de números que irá usar"))

for (let i = 0; i < mostrar2; i++){
    let valor = parseInt(prompt(`Digite o número ${i + 1}:`))
    quantidade.push(valor)
}

 let resultado = calculos(quantidade)
 alert(`O resultado é: ${resultado}`)






// let numeros = []
// let quantidade = parseInt(prompt("Quantos números você deseja inserir?"))

// for (let i = 0; i < quantidade; i++){
//     let numero = parseFloat(prompt(`Digite o número ${i + 1}:`))
//     numeros.push(numero)
// }

// let media = calcularMedia(numeros)
// alert(`A média é: ${media}`)






// Mercadinho

// const mercadinho = (compras) =>{
//     let pagar = 0
//     for(i = 0; i < compras.length; i++){
//         pagar+= compras[i]
//     }
//     return pagar
// }


// let compras = []
// let show = parseInt(prompt("Quantos produtos irá comprar?"))

// for(m = 0; m < show; m++){
//     let carrinho = parseFloat(prompt(`Digite o valor do produto número ${m + 1}`))
//     compras.push(carrinho)
// }

// resultado = mercadinho(compras)
// alert(`A sua compra deu R$ ${resultado}`)

