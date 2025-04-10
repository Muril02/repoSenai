
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



