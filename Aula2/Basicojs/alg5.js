// Exercícios de fixação 
// Checar idade com habilitação para dirigir 

function dirigir(idade, habilitação){
    return idade >= 18 && habilitação
}

// console.log(dirigir(17, true));
// console.log(dirigir(30, true));

// Exercícios de fixação 
let a = true
let b = true

// console.log(a || b);
// console.log(b || false);

function fimDeSemana(dia){
    return dia == "Sábado"  || dia == "Segunda"
}

// console.log(fimDeSemana("Sábado"));
// console.log(fimDeSemana("Domingo"));

function naoAdulto(idade){
    return ! (idade >= 18)
}

console.log(naoAdulto(20));
console.log(naoAdulto(16));
