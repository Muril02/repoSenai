let temperatura = parseFloat(prompt("Digite a temperatura"))

if(temperatura >= 30){
    console.log("Está muito quente");
    prompt(temperatura)
}else if(temperatura >= 20){
    console.log("Está agradável");
}else if(temperatura >= 10){
    console.log("Está frio");
}else if(temperatura < 10){
    console.log("Está muito frio");
}

