let result = document.getElementById("acao")

const streaming = () =>{
    let opcoes = window.prompt(`Qual plano quer assinar? \n [1]Plano Slim: R$15 \n [2]Plano Padrão: R$30 \n [3]Plano Plus: R$50 \n [4]Plano Supereme: R$100`)
    if(opcoes == 1){
        alert("Você assinou o plano mais pobre: O slim!!")
    }else if(opcoes == 2){
        alert("Você assinou o plano de pessoa normais: O padrão!!")
    }else if(opcoes == 3){
        alert("Seu pai te da uma mesada de R$300 reais no mínimo para assinar: O plano plus!!")
    }else if(opcoes == 4){
        alert("Ganhou na mega sena ou é não tem aonde gastar para assinar esse plano: O supreme!!")
    }
}