// Verificação de idade

// function idadeCheck(){
//     let check = parseInt(prompt("Digite a sua idade:"))
//     if(check >=18 ){
//         alert("Você está apto para dirigir!")
//     } else{
//         alert("Você não está apto para dirigir!")
//     }
// }

// idadeCheck()


// Verificação de sistema 

// let usuarioBanco = "Teste"
// let senhaBanco = 123
// function verificacao(){
//     let usuario = prompt("Qual o seu nome de Usuário?")
//     let senha = prompt("Qual a sua senha?")
//     if(senha == senhaBanco && usuario == usuarioBanco){
//         alert("Logado com sucesso!")
//     }else{
//         alert("Usuário ou senha incorretos!")
//     }
// }

// verificacao()



// Votação idade e nacionalidade

// let nacionalidade = "Brasileiro"

// function votacao(){
//    let naci = prompt("Qual a sua nacionalidade?")
//    let idade = parseInt(prompt("Qual a sua idade?"))
//    if(naci == nacionalidade && idade >= 18){
//     alert("Você pode votar normalmente!")
//    }else{
//     alert("Infelizmente você não pode votar!")
//    }
// }

// votacao()


// Desconto na loja

// function desconto(){
//     let itens = parseInt(prompt("Quantos itens você irá comprar?"))
//     let vip = prompt("Você faz parte dos nossos clientes VIP?")
//     if(itens >= 8 && vip == "Sim"){
//         alert("Você ganhará desconto!!!!")
//     }else{
//         alert("Você é pobre e não ganhará desconto :)")
//     }
// }

// desconto()



// Loja de discos

// let discosArray = []
// function discos(){
//     let nome = prompt("Qual o nome do disco?")
//     let artista = prompt("Qual o nome do artista?")
//     let ano = parseInt(prompt("Qual o ano de lançamento?"))
//     let preco = parseInt(prompt("Qual o preço do disco?"))
//     discosArray.push({nome, artista, ano, preco})
// }

// function exibirDisco(){
//     if(discosArray.length > 0){
//         let exibicao = "Lista de Discos:\n"
//         discosArray.forEach((discos) => {
//         exibicao+= `Nome: ${discos.nome} - Artista: ${discos.artista} - Ano: ${discos.ano} - Preço: ${"R$" + discos.preco}`
//         })
//         alert(exibicao)
//     }else{
//         alert("Não há discos cadastrados!")
//     }
// }

// discos()
// exibirDisco()



// Loja de móveis

// let moveisArray = []
// function moveis(){
//         let movel = prompt("Qual o tipo do seu móvel?")
//         let material = prompt("Qual o tipo do material?")
//         let cor = prompt("Qual a cor do seu móvel?")
//         let preco = prompt("Qual o preço do seu móvel?")
//         moveisArray.push({movel, material, cor, preco})
// }

// function exibirMovel(){
//     if(moveisArray.length > 0){
//         let exibicao = "Móvel cadastrado:\n"
//         moveisArray.forEach((movel) => {
//         exibicao+= `TIpo: ${movel.movel} - Material: ${movel.material} - Cor: ${movel.cor} - Preço: ${"R$" + movel.preco}`
//         })
//         alert(exibicao)
//     }else{
//         alert("Não há discos cadastrados!")
//     }
// }

// moveis()
// exibirMovel()


// Ingressos


// const ingressoValor = 10
// function ingressos(){
//     let tipo = prompt("Qual o seu tipo de ingresso?")
//     if(tipo == "Meia"){
//         let valor = ingressoValor / 2
//         alert(`Seu ingresso é meia, portanto o valor é: R$${valor}`)
//     }else{
//         alert(`Seu ingresso é inteiro, portanto: R$${ingressoValor}`)
//     }
// }

// ingressos()


// Streaming

// const padrao = 20
// const plus = 50
// const evolve = 100

// function streaming(){
//     let compra = prompt("Tipos de planos:\n" + 
//         `Padrão: R$${padrao}\n` + `Plus: R$${plus}\n` + `Evolve: R$${evolve}`
//     )
//     if(compra == "Padrão"){
//         alert(`Você assinou o plano Padrão por R$${padrao}`)
//     }else if(compra == "Plus"){
//         alert(`Você assinou o plano Plus por R$${plus}`)
//     }else{
//         alert(`Você assinou o plano Evolve por R$${evolve}`)
//     }
// }

// streaming()



// Placa de veículo


// const placaBanco = "AAA 1A11"
// function placa(){
//     let placa = prompt("Qual a placa do carro que quer consultar?")
//     if(placa == placaBanco){
//         alert("Esta placa está registrada!")
//     }else{
//         alert("Esta placa não está registrada!")
//     }
// }

// placa()



// Arrays lista

let numeros = [100, 200, 300, 400, 500]
let numerosImpares = [3, 5, 9, 11, 13, 17, 19, 23, 25, 27]
let genero = ["Terror", "Suspense", "Ação", "Sci-fi", "Aventura", "Fantasia"]


function atribuir(){
    let mostrar = prompt("Escolha o que quer fazer:\n" + "1. Exibir Numeros de 100 em 100\n" + "2. Exibir Numeros impares\n" + "3. Exibir os genêros de filmes")
    if(mostrar == 1){
        alert(numeros)
    }else if(mostrar == 2){
        alert(numerosImpares)
    }else if(mostrar == 3){
        alert(genero)
    }
}

atribuir()