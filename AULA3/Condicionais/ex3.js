// Condicionais if, else if, else

let nota = 85
if(nota >= 80){
    console.log("Parabéns, você foi aprovado")
}else if(nota < 80 && nota >= 60){
    console.log("Você está na lista de espera")
}else{
    console.log("Você foi reprovado")
}


let hora = 5

if(hora >= 6 && hora <= 12){
    console.log("Bom dia");
}else if(hora >= 12 && hora <= 18){
    console.log("Boa tarde");
}else{
    console.log("Boa noite");
}


let dia = "quarta"

if(dia === "domingo"){
    console.log("Vou a praia");
}else if(dia ==="sabado"){
    console.log("Durmo");
}else if(dia === "segunda"){
    console.log("Trabalho");
}else if(dia === "terça"){
    console.log("Estudo");
}else if(dia==="quarta"){
    console.log("Trabalho e Estudo");
}else if(dia==="quinta"){
    console.log("Espero a sexta-feira");
}else{
    console.log("Fico feliz");
}
