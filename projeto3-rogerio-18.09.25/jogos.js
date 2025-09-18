const prompt = require("prompt-sync")()

let nomes = []
let generos = []
let notas = []

nomes.push("God of war")
generos.push("Ação")
notas.push(9)

nomes.push("Cyberpunk")
generos.push("Aventura")
notas.push(9)

for(let i = 0; i < nomes.length; i++){
    console.log(`nome: ${nomes[i]},genero: ${generos[i]},nota: ${notas[i]}`)
}
