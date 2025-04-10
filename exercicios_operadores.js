//  Exercício 1

let a = true
let b = false

console.log(a && b); // Resposta : false
console.log(a && true); // Resposta : true
console.log(a && false); // Resposta : false
console.log((a &&(b || true) )); // Resposta : true

// Exercício 2 

let x = false
let y = true

console.log(x || y) // Resposta: true
console.log(y || false) // Resposta: true
console.log(y || false) // Resposta: true
console.log(x || (y && true)) // Resposta: true 


// Exercício 3

let z = true

console.log(!z); // Resposta: false
console.log(!false); // Resposta: true
console.log(!z && false); // Resposta: false
console.log(!z || false); // Resposta: false

// Exercício 4

let abc = true
let dfg = false  
let hij = true  

console.log(abc && dfg || hij); // Resposta: true 
console.log((abc || dfg) && !hij); // Resposta: false
console.log(!(abc && dfg) || (hij && !dfg)); // Resposta: true
console.log(abc && (dfg || hij && !dfg)); // Resposta: true


// Exercício 5
let ab = 10
let cd = 20
let ef = 15

console.log(!(cd < ef) || ab < cd); // Resposta: true
console.log((ab > ef) && !(cd > ab)); // Resposta: false
console.log((ef > ab) || (cd < ef)); // Resposta: true
console.log(!(ab < ef) || !(ef > ab) ); // Resposta: false


// Desafio

// Algoritmo para checar se o número é par

function detector(valor){
    conta = valor % 2
    return conta == 0 
}

let teste = 5
console.log(detector(teste));


// Algoritmo para vacinação para covid-19 acima de 60 anos

function vacinação(idade, vacina){
    return idade >= 60 && vacina
}

console.log(vacinação(60, true));


// Algoritmo para checar se um veículo é elétrico ou flex

function veiculo(tipo){
    eletrico = "Eletrico"
    flex = "Flex"
    return tipo == eletrico || flex
}

console.log(veiculo("Flex"))
