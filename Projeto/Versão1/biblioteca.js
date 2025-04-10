let biblioteca = []

function adicionarLivro(){
    let titulo = prompt("Digite o título do livro")
    let autor = prompt("Digite o nome do autor")
    let ano = parseInt(prompt("Digite o ano de publicação do livro:"))
    biblioteca.push({titulo, autor, ano})
    alert("Livro adicionado com sucesso!")
}

function listarLivros(){
    if(biblioteca.length > 0){
        let mensagem = "Lista de livros na Biblioteca:\n"
        biblioteca.forEach((livro) => {
            mensagem+= `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}\n`
        })
        alert(mensagem)
    }else{
        alert("A biblioteca está vazia")
    }
}

function exibirMenu(){
    return prompt("Menu:\n" + 
        "1. Adicionar Livro\n" + 
        "2. Buscar Livro\n" + 
        "3. Listar Livro\n" + 
        "4. Sair\n" + "Escolha uma opção:"
    )
}


let opcao

do{
    exibirMenu()
}while(exibirMenu() < 0){

}


switch(exibirMenu()){
    case "1":
        adicionarLivro()
        exibirMenu()
        break
    case "2":
        buscarLivros()
        exibirMenu()
        break
    case "3": 
        listarLivros()
        exibirMenu()
        break
    case "4":
        close()
        break
    }
    