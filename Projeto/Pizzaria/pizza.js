let pizzas = []
let login = []
let pizzaComprada = []
let alterarPizza;
let codigoEditar = ""
// MUDAR SEÇÃO

const mudarSec = (secao) =>{
    document.getElementById("adicPizza").classList.add("hidden")
    document.getElementById("cardapio").classList.add("hidden")
    document.getElementById("pedirPizza").classList.add("hidden")
    document.getElementById("editarPizza").classList.add("hidden")
    document.getElementById("relatorio").classList.add("hidden")
    document.getElementById("home").classList.add("hidden")

    
    
    document.getElementById(secao).classList.remove("hidden")
}


// REGISTRAR PIZZA

const registrarPizza = () =>{
    const nome = document.getElementById("nomePizza").value
    const preco = (document.getElementById("precoPizza")).value.toString()
    const descricao = document.getElementById("descricaoPizza").value

    if(nome && preco && descricao !== ''){
        pizzas.push({nome, descricao, preco})

        document.getElementById("nomePizza").value = ''
        document.getElementById("precoPizza").value = ''
        document.getElementById("descricaoPizza").value = ''

       mensagemRegistro("Sua pizza foi cadastrada!", "sucesso")
          setTimeout(() =>{
                mensagemTeste.classList.add("hidden")
                mudarSec("cardapio")
                exibirCard()
            }, 1500)
 
    }else{
        mensagemRegistro("Sua pizza não pode ser cadastrada", "erro")
    }
    
    console.log(pizzas);
  
    
}


const mensagemRegistro = (text, tipo) =>{
    mensagemTeste = document.getElementById("mensagemReg")

    mensagemTeste.textContent = text
    mensagemTeste.className = `Mensagem tipo ${tipo}`
    mensagemTeste.classList.remove("hidden")
    setTimeout(() =>{
        mensagemTeste.classList.add("hidden")
    }, 2000)

}


// CARDÁPIO

const exibirCard = (pizzaPesquisa) =>{
   let cards = ""
   
   if(pizzaPesquisa && pizzaPesquisa.length > 0){    
    
    pizzaPesquisa.forEach(pizza => {
        let nome = pizza.nome
        let preco = pizza.preco
        cards +=`
<div class='flex-cent'>
    <div class=" geralCard card" id="cards">
       <div class="text-align">
            <div>
                <div class="tituloCard ">
                    <span class="">${pizza.nome} - <span class='strong'>R$${pizza.preco}</span></span>
                </div>
                <div>
                    <p class="descricao">${pizza.descricao}</p> 
                </div>
            </div>
        </div>
        <div class='flex-center'>
            <div class='editarExclu'>
                <a class='editarExclu' onclick='mudarSec("pedirPizza");pedirPizza("${nome}", ${preco})'>Pedir</a>
                <span class='editarExclu' onclick='mudarSec("editarPizza");edicao("${nome}", ${preco}); pegarNomePizza()'>Editar</span>
            </div>
        </div>
    </div>
</div>
        `
        console.log("Foi a pizza filtrada");
        console.log(pizzaPesquisa);
        document.getElementById("mensagemPesquisa").innerHTML = "Pizza encontrada!"   
        setTimeout(() =>{
                 document.getElementById("mensagemPesquisa").classList.add("hidden")   
                }, 2000)
      
        
    });
    document.getElementById("exibirCard").innerHTML = cards
}else{
     pizzas.forEach(pizza => {
        let nome = pizza.nome
        let preco = pizza.preco
        let descricao = pizza.descricao
        cards +=`
<div class='flex-cent'>
    <div class=" geralCard card" id="cards">
       <div class="text-align">
            <div>
                <div class="tituloCard ">
                      <span class="">${pizza.nome} - <span class='strong'>R$${pizza.preco}</span></span>
                </div>
                <div>
                    <p class="descricao">${pizza.descricao}</p> 
                </div>
            </div>
        </div>
        <div class='flex-center'>
            <div class='editarExclu'>
                <a class='editarExclu' onclick='mudarSec("pedirPizza");pedirPizza("${nome}", ${preco})'>Pedir</a>
                <a class='editarExclu' onclick='mudarSec("editarPizza"); edicao("${nome}", ${preco}, "${descricao}"); pegarNomePizza()'>Editar</a>
            </div>
        </div>
    </div>
</div>
        `
        console.log("Foi a pizza normal");
        
    });
    document.getElementById("exibirCard").innerHTML = cards
}
}


// PEDIR PIZZA


const pedirPizza = (nome, preco) =>{
    codigo = ""
            

    codigo =`
             <div>
                    <strong>Nome do cliente</strong><br>
                    <input class='inputComprar' type="text" id="nomeUser" placeholder="Seu nome"><br>
                    <h4>Pizza selecionada</h4>
                    <input class='inputComprar' type="text" id="nomePagar" placeholder="Nome da pizza" value="${nome}">
                    <h4>Valor da pizza</h4>
                    <input class='inputComprar' type="numeric" id="precoPagar" placeholder="Valor da pizza" value="${preco}"><br>
                    <button onClick='comprarPizza()'>Comprar pizza</button>
                    <div id="mensagemCompra"></div>
               </div>

    `
    
        document.getElementById("exibicao").innerHTML = codigo

            let lockNome = document.getElementById("nomePagar")
        lockNome.addEventListener('keydown', e => e.preventDefault());   
        lockNome.addEventListener('paste', e => e.preventDefault());    
        lockNome.addEventListener('cut', e => e.preventDefault());       
     lockNome.addEventListener('drop', e => e.preventDefault());   
            
            let lockPagar = document.getElementById("precoPagar")
        lockPagar.addEventListener('keydown', e => e.preventDefault());   
        lockPagar.addEventListener('paste', e => e.preventDefault());    
        lockPagar.addEventListener('cut', e => e.preventDefault());       
     lockPagar.addEventListener('drop', e => e.preventDefault());   

}

const comprarPizza = () =>{
    let mensagem = document.getElementById("mensagemCompra")
    let nomeUser = document.getElementById("nomeUser").value
    let nomePizza = document.getElementById("nomePagar").value
    let precoPagar = document.getElementById("precoPagar").value
    
    
    if(nomeUser == "" || nomePizza == "" || precoPagar == ""){
        mensagem.innerHTML = "Preencha todos os campos"    
    }else{
       pizzaSelect = pizzas.find((pizza) =>{
             return pizza.nome.toLowerCase().includes(nomePizza.toLowerCase())
        })
        if(pizzaSelect){
            pizzaComprada.push({nomeUser, nomePizza, precoPagar})

            mensagem.innerHTML = `A compra da sua pizza de ${nomePizza} foi efetuada!`
            
                    setTimeout(() =>{
                    mensagemTeste.classList.add("hidden")
                    mudarSec("cardapio")
                }, 2000)
        }else{
             mensagem.innerHTML = `Pizza inválida!`
        }
        
            
    }
    console.log(pizzaComprada);
    
}

// EDITAR PIZZA

const editarPizzaHandler = () => {
    pegarNomePizza(); 
    editarPizza(); 
};


const pegarNomePizza = () =>{
    
    let nomeTeste = document.getElementById("nomePagarEdicao").value.toLowerCase()
    alterarPizza = pizzas.find((pizza) =>{
           return pizza.nome.toLowerCase().includes(nomeTeste)
        })
        console.log(alterarPizza);
        
    }


    const editarPizza = () =>{
    let mensagem = document.getElementById("mensagemEditar")
    let nomePizza = document.getElementById("nomePagarEdicao").value
    let precoPagar = document.getElementById("precoPagarEdicao").value         
    let descricaoEdit = document.getElementById("descricaoEdit").value    
    console.log(nomePizza);
    
    
    if(nomePizza == "" || precoPagar == ""){
        mensagem.innerHTML = "Não é permitido nenhum campo em branco!"    
    }else if(alterarPizza){
        alterarPizza.nome = nomePizza
        alterarPizza.preco = precoPagar
        alterarPizza.descricao = descricaoEdit
    
       
        mensagem.innerHTML = `Pizza de alterada!`
        
                setTimeout(() =>{
                mensagemTeste.classList.add("hidden")
                mudarSec("cardapio")
                exibirCard()
            }, 2000)
            
            
    }

}

const edicao = (nome, preco, descricao) =>{
   
    codigoEditar =`
             <div>
                    <input class='inputComprar' type="text" id="nomePagarEdicao" placeholder="Nome da pizza" value="${nome}"><br>
                    <input class='inputComprar' type="number" id="precoPagarEdicao" placeholder="Valor da pizza" value="${preco}"><br>
                    <input class='inputComprar' type="text" id="descricaoEdit" placeholder="Descrição" value="${descricao}"><br>
                    <button onClick='editarPizza()'>Editar pizza</button>
                    <div id="mensagemEditar"></div>
               </div>

    `
    document.getElementById("exibicaoEditar").innerHTML = codigoEditar
}



// LOGIN

const fazerLogin = () =>{
    nome = document.getElementById("loginNome").value
    login = document.getElementById("loginSenha").value

    nomeCorreto = "admin"
    senhaCorreta = "123"

    if(nome === nomeCorreto && login === senhaCorreta){
        mensagem("Login feito com sucesso!", "sucesso")
        setTimeout ( () =>{
            window.location.href = "index.html"
        }, 1000)
    }else{
        mensagem("Credenciais inválidas!", "erro")
    }
}


const mensagem = (text, type) =>{
   let mensagemEx = document.getElementById("mensagem")

    mensagemEx.textContent = text
    mensagemEx.className = `Mensagem tipo ${type}`
    mensagemEx.classList.remove("hidden")
    setTimeout(() => {
        mensagemEx.classList.add("hidden")
    }, 3000);
}


// PESQUISAR PIZZA

const pesquisar = () =>{
    pizzaPesquisada = document.getElementById("pesquisar").value
    let pizzaRecebida = []
    
     pizzaRecebida = pizzas.filter((pizza) =>{
       return pizza.nome.toLowerCase().includes(pizzaPesquisada.toLowerCase())
    })

    exibirCard(pizzaRecebida)
    console.log(pizzaRecebida);
    
}

// RELATÓRIO 

const exibirRelatorio = () =>{
    let compras = document.getElementById("exibirCompras")
    let total = document.getElementById("total")
    let exibir = ""
    let valor = 0
    console.log(pizzaComprada);
    
    pizzaComprada.forEach(pizza => {
        exibir += `
                    <div class='cardRelatorio teste'>
                        <span><strong>Cliente: </strong>${pizza.nomeUser}</span><br>
                        <span><strong>Pizza: </strong>${pizza.nomePizza}</span><br>
                        <span><strong>Preço: R$ </strong>${pizza.precoPagar}</span><br>
                    </div>
        `

         valor += parseFloat(pizza.precoPagar);
    });
    compras.innerHTML = exibir
    total.innerHTML = `<strong>Valor total: R$${valor}</strong>`

    
}
