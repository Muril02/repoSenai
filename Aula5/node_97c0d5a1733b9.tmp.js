const numeros = require("readline")

const num = numeros.createInterface({
    input: process.stdin,
    output: process.stdout,
})

num.question("Digite o primeiro número: ", (num1) =>{
    num.question("Digite o segundo número: "), (num2) =>{
        let soma = Number(num1) + Number(num2)
        console.log(`A soma dos números é: ${soma}`)
        num.close()
        
    }
})