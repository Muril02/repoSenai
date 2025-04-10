const itens = document.querySelectorAll(".carrinho")
const carrinho = document.querySelector(".botaoComprar")
const exibir = document.querySelector(".exibicao")
const valor = []

itens.forEach(item => {
    item.addEventListener('click', () => {
        const valorFinal = parseInt(item.dataset.floor)
        valor.push(valorFinal)
        // console.log(valorFinal);
        somaTotal = valor.reduce((acc, som) =>{
            return acc + som
        })
        exibir.innerHTML = `Sua conta foi de R$${somaTotal}`
    })
})