let pizzas = []

const mudarSec = (secao) =>{
    document.getElementById("adicPizza").classList.add("hidden")

    document.getElementById(secao).classList.remove("hidden")
}


const registrarPizza = () =>{
    const nome = document.getElementById("nomePizza").value
    const ingrediente1 = document.getElementById("ingrediente1").value
    const ingrediente2 = document.getElementById("ingrediente2").value
    const ingrediente3 = document.getElementById("ingrediente3").value
    const preco = parseInt(document.getElementById("precoPizza"))
    const descricao = document.getElementById("descricaoPizza").value

    if(nome && ingrediente1 && ingrediente2 && ingrediente3 && preco && descricao !== ''){
        pizzas.push({nome, ingrediente1, ingrediente2, ingrediente3, preco, descricao})

        document.getElementById("nomePizza").value = ''
        document.getElementById("ingredientes1").value = ''
        document.getElementById("ingredientes2").value = ''
        document.getElementById("ingredientes3").value = ''
        document.getElementById("preco").value = ''
        document.getElementById("descricao").value = ''

        alert(`A pizza de ${nome} foi registrada`)
    }else{
        alert("Não foi possível adicionar a pizza")
    }

}