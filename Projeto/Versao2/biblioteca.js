let biblioteca = []
let livroParaAlternar = null

const mostrarSecao = (secao) =>{
    //  Esconde todas as seções
    document.getElementById("cadastro").classList.add("hidden")
    document.getElementById("consulta").classList.add("hidden")
    document.getElementById("alterar").classList.add("hidden")
    document.getElementById("emprestimo").classList.add("hidden")

    // Mostra a seção selecionada
    document.getElementById(secao).classList.remove("hidden")
}

const adicionarLivro = () =>{
    const titulo = document.getElementById("titulo").value
    const autor = document.getElementById("autor").value
    const ano = parseInt(document.getElementById("ano").value)

    if(titulo && autor && ano){
        biblioteca.push({titulo, autor, ano})
        document.getElementById("titulo").value = ""
        document.getElementById("autor").value = ""
        document.getElementById("ano").value = ""
        // atualizarLista()
        alert("Livro atualizado com sucesso")
    }else{
        alert("Por favor, preencha todos os campos")
    }
    
}

const buscarLivro = () =>{
    const busca = document.getElementById("busca").value.toLowerCase()
    const resultados = biblioteca.filter((livro) => livro.titulo.toLowerCase().includes(busca))

    atualizarLista(resultados)
}

const buscarLivroParaAlterar = () =>{
    const busca = document.getElementById("busca-alterar").value.toLowerCase()
    livroParaAlternar = biblioteca.find((livro) => livro.titulo.toLowerCase().includes(busca))

    if(livroParaAlternar){
        document.getElementById("form-alterar").classList.remove("hidden")
        document.getElementById("novo-titulo").value = livroParaAlternar.titulo
        document.getElementById("novo-autor").value = livroParaAlternar.autor
        document.getElementById("novo-ano").value = livroParaAlternar.ano
    }else{
        alert("Livro não encontrado")
    }

}

const alterarLivro = () =>{
    if(livroParaAlternar){
        const novoTitulo = document.getElementById("novo-titulo").value
        const novoAutor = document.getElementById("novo-autor").value
        const novoAno = parseInt(document.getElementById("novo-ano").value)

        if(novoTitulo && novoAno && novoAutor){
            livroParaAlternar.titulo = novoTitulo
            livroParaAlternar.autor = novoAutor
            livroParaAlternar.ano = novoAno

            atualizarLista()
            alert("Livro alterado com sucesso")
            document.getElementById("forma-alterar").classList.add("hidden")
        }else{
            alert("Por favor, preencha todos os campos")
        }
    }
}


const atualizarLista = (lista = biblioteca) =>{
    const tabela = document.getElementById("lista-livros")
    tabela.innerHTML = ""

    lista.forEach((livro) =>{
        const linha = document.createElement("tr")
        linha.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.ano}</td>
        `;
        tabela.appendChild(linha)
    })
}

const fazerEmprestimo = () =>{
    const livroEmprestimo = document.getElementById("livro-emprestimo").value.toLowerCase()
    const usuario = document.getElementById("usuario").value.toLowerCase()
    const ex = document.getElementById("exibirEmpre")

    const livro = biblioteca.find((livro) => livro.titulo.toLowerCase().includes(livroEmprestimo))
    if(livro){
        ex.innerHTML += `Livro emprestado: ${livroEmprestimo} - Usuário: ${usuario}<br>`
    }else{
        alert("Livro não encontrado")
    }
}