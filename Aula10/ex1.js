let estado = 0

const mudarLuz =() =>{
    const luzVermelha = document.getElementById("vermelha")
    const luzLaranja = document.getElementById("laranja")
    const luzAmarela = document.getElementById("amarela")
    const luzVerde = document.getElementById("verde")
    const luzAzul = document.getElementById("azul")

    luzAmarela.classList.remove("amarela")
    luzLaranja.classList.remove("laranja")
    luzVerde.classList.remove("verde")
    luzVermelha.classList.remove("vermelha")
    luzAzul.classList.remove("azul")

    if(estado == 0){
        luzVermelha.classList.add("vermelha")
        estado = 1
    }else if(estado == 1){
        luzLaranja.classList.add("laranja")
        estado = 2
    }else if(estado == 2){
        luzAmarela.classList.add("amarela")
        estado = 3
    }else if(estado == 3){
        luzVerde.classList.add("verde")
        estado = 4
    }else{
        luzAzul.classList.add("azul")
        estado = 0
    }
}