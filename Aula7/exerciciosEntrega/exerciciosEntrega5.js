let result = document.getElementById("acao")

const converter = ()=>{
    let real = parseInt(window.prompt("Quanto quer converter?"))
    let dolar = 5.81
    const conta = real / dolar
    result.innerHTML = `<p>O valor convertido foi de ${conta.toFixed(2)} dólares</p>`
}