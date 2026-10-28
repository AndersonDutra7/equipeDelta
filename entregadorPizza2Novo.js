const rl = require('readline-sync');

let combustivel = 100;
let entregasRealizadas = 0;
let totalEntregas = 5;

const nome = rl.question("\nDigite o nome do entregador?: ")

//MOSTRA OS STATUS DO JOGADOR
function mostrarStatus(){
    console.log("=================")
    console.log("     ENTREGADOR DE PIZZA")
    console.log("=================")
    console.log(`Combustível: ${combustivel} litros`)
    console.log(`Entregas: ${entregasRealizadas}/${totalEntregas}`)
    console.log("=================")    
}

//FUNÇÃO PARA CALCULAR QUANDO O JOGADOR CLICA EM ENTREGAR PIZZA
function entregarPizza(){
    const consumo = Math.floor(Math.random() * 21) + 10;

    combustivel -= consumo;

    entregasRealizadas++

    console.log(`\nPizza entregue com sucesso!`)
    console.log(`\nA entrega consumiu ${consumo} litros de combustivel`)
}
//FUNÇÃO PARA CALCULAR QUANDO O JOGADOR CLICA EM ABASTECER MOTO
function abastecerMoto(){
    const combustivelAntes = combustivel;

    combustivel = Math.min(combustivel + 20, 100)

    const combustivelAdicionado = combustivel - combustivelAntes

    totalEntregas++

    console.log("\nMoto Abastecida")
    console.log(`Foram adicionados ${combustivelAdicionado} litros de combustivel`)
    console.log(`Sua nova meta é de ${totalEntregas} entregas.`)


}
//FUNÇÃO PARA VERIFICAR OS STATUS DO JOGADOR ENQUANTO JOGA
function verificarFimDoJogo(){
    if (combustivel <= 0){
            console.log("A gasolina acabou antes de completar todas as entregas")
            console.log(`Entregas realizadas: ${entregasRealizadas}/${totalEntregas}`)

    

        
        return true;
    }

    if (entregasRealizadas >= totalEntregas){
        console.log(`\nPARABÉNS ${nome}`)
        console.log("Você realizou todas as entregas com sucesso")
        console.log(`Entregas realizadas: ${entregasRealizadas}`)
        console.log(`Combustivel restante: ${combustivel} litros`)

        
        return true;
    }

    

    return false;

}
//FUNÇÃO PARA EXIBIR O MENU NA TELA DO JOGADOR
function menuPrincipal(){

    if (verificarFimDoJogo()){
        return
    }

    

    mostrarStatus()

    console.log("1. REALIZAR ENTREGA")
    console.log("2. ABASTECER")
    console.log("3. SAIR")

    const opcao = rl.question("Digite a opção desejada: ")


    switch(opcao){
        case "1": entregarPizza(); break;

        case "2": abastecerMoto(); break;

        case "3": console.log("Você saiu do jogo!"); return;//SAI DO JOGO QUANDOJOGADOR CLICA EM SAIR

        default: console.log("\nOpção Inválida! Escolha 1, 2 ou 3.");
    }

    if (verificarFimDoJogo()){
        return;
    }


    menuPrincipal()
}

console.log("================")
console.log("ENTREGADOR DE PIZZA")
console.log("Complete suas entregas para finalizar o jogo")
console.log("Administre seu combustivel para não acabar")

menuPrincipal()