// Operador lógico E(&&) com valores numéricos

let a = false
let b = true
let c = false
let d = false

// console.log(a && b)
// console.log( a && true)
// console.log("Resultado de c + d: " + (c && d))
// console.log( d && true)

//  Operador lógico OU(||) com valores booleanos

let f = false
let g = true
let h = true
let i = false

// console.log("Resultado de f + g: " + (f || g));
// console.log("Resultado de i + h: " + (i || h));
// console.log("Resultado de i + g: " + (i || g));
// console.log("Resultado de i + f: " + (i || f));


// Operador lógico !(não) com valores booleanos

let naosei = true
let limeira = false

// console.log("Resultado !naosei: " + !naosei);
// console.log("Resultado !limeira: " + !limeira);


// Operador E (&&)
let ab = true
let bc = false

let eResultado = ab && bc

// console.log("Resultado de ab && bc: " + eResultado);

// Operador OU (||)

let ouResultado = ab || bc

// console.log("Resultado de ab || bc: " + ouResultado);

// Operador Não (!)

let naoResultado = !ab

// console.log("Resultado de !ab: " + naoResultado)

let combinados = (ab && !bc) || (!ab && bc)

// console.log("Resultado de (ab || !bc) + (!ab + bc): " + naoResultado)

// Exemplos de operadores lógicos com valores numéricos 

let x = 10
let y = 5
let z = 0

let resultadoE = (x > y) && (y > z)
let resultadoE2 = (z < y) && (x > z)
console.log("Resultado de (x > y) + (y > z): " + resultadoE)
console.log("Resultado de (x > y) + (y > z): " + resultadoE2)

// Operador OU (||) com valores numéricos 
let resultadoOu = (x < y) || (y > z)
console.log("Resultado de (x < y) || (y > z): " + resultadoOu);

// Operador Não (!) com valores numéricos 
let resultadoNao = !(x < y)
console.log("Resultado de !(x < y): " + resultadoNao);

// Combinação de operadores lógicos com valores numéricos
let resultadoC = ((x > y) && (y > z)) || ((x < y) && (z > y))
console.log("Resultado de ((x > y) && (y > z)) || ((x < y) && (z > y)): " + resultadoC);




let teste = 9
let seila = 5

// for(i = seila; i<=teste; i++){
//     let teste1 = teste % 2
//     if(teste1 == 1){
//         console.log("Não sei programar");
//     }else{
//         console.log("Ainda não sei programar");
        
//     }
    
// }
