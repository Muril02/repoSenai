const exibir  = document.getElementById("exibir")
const valor  = document.getElementById("valor")
const resumo  = document.getElementById("resumo")

const receberServico = (servico) =>{
    let cliente =  String(prompt(`Qual o nome do cliente que receberá o ${servico}?`))
    exibir.innerHTML = `Muito obrigado cliente ${cliente} por escolher nossos serviços!`
    
    
    if(servico == "revisao"){
        valor.innerHTML = `O valor do serviço foi de R$100`
        resumo.innerHTML = `O serviço foi apenas um checkup geral no veículo.`
    }else if(servico == "oleo"){
        valor.innerHTML = `O valor do serviço foi de R$200`
        resumo.innerHTML = `Foi feito uma troca de óleo no veículo`
    }else{
        valor.innerHTML = `O valor do serviço foi de R$500`
        resumo.innerHTML = `Refizemos o motor por completo`
    }
}