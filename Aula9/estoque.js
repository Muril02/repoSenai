const estoque = document.querySelector(".form")
const exibicao = document.querySelector(".exibir")

    estoque.addEventListener('submit', (event) => {
        event.preventDefault();
       const est = document.querySelector(".estValor").value
        
        if(est <= 30){
            exibicao.innerHTML = "O valor do estoque está ruim"
        }else{
            exibicao.innerHTML = "O valor do estoque está bom"
        }
    })
