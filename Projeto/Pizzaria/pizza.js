let pizzas = []
let login = []
let pizzaComprada = []
// MUDAR SEÇÃO

const mudarSec = (secao) =>{
    document.getElementById("adicPizza").classList.add("hidden")
    document.getElementById("cardapio").classList.add("hidden")
    document.getElementById("pedirPizza").classList.add("hidden")
    document.getElementById("relatorio").classList.add("hidden")
    
    document.getElementById(secao).classList.remove("hidden")
}


// REGISTRAR PIZZA

const registrarPizza = () =>{
    const nome = document.getElementById("nomePizza").value
    const ingrediente1 = document.getElementById("ingrediente1").value
    const ingrediente2 = document.getElementById("ingrediente2").value
    const ingrediente3 = document.getElementById("ingrediente3").value
    const preco = (document.getElementById("precoPizza")).value.toString()
    const descricao = document.getElementById("descricaoPizza").value

    if(nome && ingrediente1 && ingrediente2 && ingrediente3 && preco && descricao !== ''){
        pizzas.push({nome, ingrediente1, ingrediente2, ingrediente3, preco, descricao})

        document.getElementById("nomePizza").value = ''
        document.getElementById("ingrediente1").value = ''
        document.getElementById("ingrediente2").value = ''
        document.getElementById("ingrediente3").value = ''
        document.getElementById("precoPizza").value = ''
        document.getElementById("descricaoPizza").value = ''

       mensagemRegistro("Sua pizza foi cadastrada!", "sucesso")
 
    }else{
        mensagemRegistro("Sua pizza não pode ser cadastrada", "erro")
    }
    
    console.log(pizzas);
    console.log(ingrediente1);
    console.log(ingrediente2);
    console.log(ingrediente3);
    console.log(preco);
    
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
                <div class="ingredientesDiv">
                    <span class='strong'>Ingredientes Principais: </span>
                    <span class='ingredientes'>${pizza.ingrediente1}</span> - 
                    <span class='ingredientes'>${pizza.ingrediente2}</span> - 
                    <span class='ingredientes'>${pizza.ingrediente3}</span>
                </div>
                <div>
                    <p class="descricao">${pizza.descricao}</p> 
                </div>
            </div>
        </div>
        <div class='flex-center'>
            <div class='editarExclu'>
                <a class='editarExclu' onclick='mudarSec("pedirPizza");pedirPizza("${nome}", ${preco})'>Pedir</a>
                <span class='editarExclu'>Editar</span>
            </div>
        </div>
    </div>
</div>
        `
        console.log("Foi a pizza filtrada");
        console.log(pizzaPesquisa);
        
        
    });
}else{
     pizzas.forEach(pizza => {
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
                <div class="ingredientesDiv">
                    <span class='strong'>Ingredientes Principais: </span>
                    <span class='ingredientes'>${pizza.ingrediente1}</span> - 
                    <span class='ingredientes'>${pizza.ingrediente2}</span> - 
                    <span class='ingredientes'>${pizza.ingrediente3}</span>
                </div>
                <div>
                    <p class="descricao">${pizza.descricao}</p> 
                </div>
            </div>
        </div>
        <div class='flex-center'>
            <div class='editarExclu'>
                <a class='editarExclu' onclick='mudarSec("pedirPizza");pedirPizza("${nome}", ${preco})'>Pedir</a>
                <span class='editarExclu'>Editar</span>
            </div>
        </div>
    </div>
</div>
        `
        console.log("Foi a pizza normal");
        
    });
}
     document.getElementById("exibirCard").innerHTML = cards   
    
    
}


// PEDIR PIZZA


const pedirPizza = (nome, preco) =>{
    codigo = ""
            
    codigo +=`
             <div>
                    
                    <input class='teste' type="text" id="nomeUser" placeholder="Seu nome""><br>
                    <input type="text" id="nomePagar" placeholder="Nome da pizza" value="${nome}"><br>
                    <input type="numeric" id="precoPagar" placeholder="Valor da pizza" value="${preco}"><br>
                    <button onClick='comprarPizza()'>Comprar pizza</button>
               </div>

    `
    
        document.getElementById("exibicao").innerHTML = codigo
}

const comprarPizza = () =>{
    let mensagem = document.getElementById("mensagemCompra")
    let nomeUser = document.getElementById("nomeUser").value
    let nomePizza = document.getElementById("nomePagar").value
    let precoPagar = document.getElementById("precoPagar").value
    
    if(nomeUser == "" || nomePizza == "" || precoPagar == ""){
        mensagem.innerHTML = "Preencha todos os campos"    
    }else{
        pizzaComprada.push({nomeUser, nomePizza, precoPagar})
        
        mensagem.innerHTML = `Pizza de ${nomePizza} comprada por ${precoPagar} pelo cliente ${nomeUser}`
        
                setTimeout(() =>{
                mensagemTeste.classList.add("hidden")
                mudarSec("cardapio")
            }, 2000)
            console.log("Deu Errado nessa porra");
            
    }
    console.log(pizzaComprada);
    
}

// LOGIN

const fazerLogin = () =>{
    nome = document.getElementById("loginNome").value
    login = document.getElementById("loginSenha").value

    nomeCorreto = "admin"
    senhaCorreta = "123"

    if(nome === nomeCorreto && login === senhaCorreta){
        mensagem("Login feito com sucesso", "sucesso")
        setTimeout ( () =>{
            window.location.href = "index.html"
        }, 1000)
    }else{
        mensgem("Erro no login", "erro")
    }
}


const mensagem = (text, tipe) =>{
   let mensagemEx = document.getElementById("mensagem")

    mensagemEx.textContent = text
    mensagemEx.className = `Mensagem tipo ${tipe}`
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
}

// RELATÓRIO 

const exibirRelatorio = () =>{
    let compras = document.getElementById("exibirCompras")
    let exibir = ""
    pizzaComprada.forEach(pizza => {
        exibir += `
                    <div class='cardRelatorio'>
                        <span><strong>Cliente: </strong>${pizza.nomeUser}</span><br>
                        <span><strong>Pizza: </strong>${pizza.nomePizza}</span><br>
                        <span><strong>Preço: R$ </strong>${pizza.precoPagar}</span><br>
                    </div>
        `
        compras.innerHTML = exibir
    });
}
