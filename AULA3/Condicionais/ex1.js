// if (condição){
    // código muito bolado
// }

let num = 1

if(num === 1){
    console.log("Não sei");
}

let idade = 18

if(idade >= 18){
    console.log("Ele é maior de idade")
}

let idade2 = 6

if(idade2 >= 60){
    console.log("Essa pessoa pode se vacinar");
}

let vacina = 15

if(vacina >= 60){
    console.log("Pode vacinar");
}else if(vacina >= 15 && vacina <= 59){
    console.log("Lista de espera");
}else{
    console.log("Não pode vacinar");
}

let nota1 = 6

if(nota1 >= 90){
    console.log("Excelente");
}else if(nota1 <= 80 && nota1 >= 71){
    console.log("muito bom");
}else if(nota1 <= 70 && nota1 >= 61){
    console.log("Bom");
}else if(nota1 <= 60 && nota1 >= 51){
    console.log("Ok");
}else if(nota1 == 50){
    console.log("Na média");
}else{
    console.log("Reprovado");
}