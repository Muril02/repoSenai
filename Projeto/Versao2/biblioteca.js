let biblioteca = []
let livroParaAlternar = null

const mostrarSecao = (secao) =>{
    //  Esconde todas as seções
    document.getElementById("cadastro").classList.add("hidden")
    document.getElementById("consulta").classList.add("hidden")
    // document.getElementById("alterar").classList.add("hidden")

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

// const buscarLivroParaAlterar = () =>{
//     const busca = document.getElementById("busca-alterar").value.toLowerCase()
//     livroParaAlternar = biblioteca.find((livro) => livro.titulo.toLowerCase().includes(busca))
// }

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