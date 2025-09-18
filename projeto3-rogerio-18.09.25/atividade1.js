const prompt = require("prompt-sync")()

let quartos = []
let nomes = []
let email = []

let qtd = parseInt(prompt("Quantos quartos serão alugados?"))

for(let i = 0; i < qtd; i++){
    let quarto = Number(prompt("qual o número do quarto que você deseja?: "))
    while (ocupado(quarto)) {
        console.log("O quarto já está ocupado.");
        quarto = Number(prompt("Escolha outro número de quarto: "));
    }  
    quartos.push(quarto)
    nomes.push(prompt("Insira seu nome: "))
    email.push(prompt("Insira seu email: "))
    console.log(`nome: ${nomes[i]}\nquarto: ${quartos[i]}\nemail: ${email[i]}`)
}

function ocupado(quarto) {
    for(let i = 0; i < qtd; i++){
        if (quartos[i] === quarto) {
            return true
        }
    }
    return false
}
