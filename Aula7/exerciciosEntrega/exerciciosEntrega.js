
let chamar = document.getElementById("acao")

const cor =()=>{
    let variavel = window.prompt("Diga o nome da cor que quer o texto")
    chamar.innerHTML = `<p style='color:${variavel}'>Esta é a cor alterada</p>`
}

const background = () =>{
    let back = window.prompt("Diga o nome da cor que quer o fundo")
    chamar.innerHTML = `<p style='background-color: ${back}'>Esta é a cor alterada</p>`
}


const size = () =>{
    let size2 = window.prompt("Diga o tamanho que quer a fonte")
    chamar.innerHTML = `<p style='font-size:${size2}'>Esta é a cor alterada</p>`
}

