//criando vetor
let nomes = []

//inserir nome no vetor
nomes.push("Douglas")

//mostrar um nome no vetor
console.log(nomes[0])

//criando vetor ja preenchido

let jogos = ["Hollow knight","GTA","Free Fire","The last of us","Fall guys","Dark souls","Among us","Elden ring","Minecraft","Roblox","Hollow knight-Silk Song"]

let meujogo = "call of duty"

let existe = false

for (let i = 0; i < jogos.length; i++){
    if(jogos[i] == meujogo){
        existe = true
        break
    }
}

if(existe == true){
    console.log("Jogo já existe no vetor")
}else{
    jogos.push(meujogo)
}

console.log(jogos)

//remover item de uma posição especifica
jogos.splice(4,1)

console.log(jogos)