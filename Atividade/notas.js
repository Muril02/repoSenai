
const resultado = document.getElementById("resultado")
const resultadoFinal = document.getElementById("resultadoFinal")
const titulo = document.getElementById("titulo")

const calcularNota = () =>{
    const nome = document.getElementById("nome").value
    const nota1 = parseFloat(document.getElementById("nota1").value)
    const nota2 = parseFloat(document.getElementById("nota2").value)
    const nota3 = parseFloat(document.getElementById("nota3").value)
    const trabalhos = parseFloat(document.getElementById("trabalhos").value)
    
    let conta = nota1 + nota2 + nota3 + trabalhos / 4

        resultado.innerHTML = 
        `As notas do aluno ${nome}<br>
        Primeira nota: ${nota1}<br>
        Segunda nota: ${nota2}<br>
        Terceira nota: ${nota3}<br>
        Quantidade de trabalhos: ${trabalhos}`

        if(conta <=5){
            resultadoFinal.innerHTML = `A nota final foi de ${conta}, portando, REPROVADO `
        }else{
            resultadoFinal.innerHTML = `A nota final foi de ${parseInt(conta)}, portando, APROVADO`
        }

}