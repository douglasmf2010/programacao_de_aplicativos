const prompt = require("prompt-sync")()

    let jogos = ["Hollow Knight", "Hollow Knight-SilkSong","Minecraft", "Roblox", "Dark Souls", "Xadrez", "GTA V", "Cuphead", "Undertale", "Celeste"]

while(true){

    console.log("Bem-vindo ao menu de opções,escolha uma das opções a seguir:\n\n1-Cadastrar um jogo\n2-Excluir um jogo\n3-Ver a lista de jogos\n4-Editar um jogo\n5-Sair")
    let opção = parseInt(prompt("insira sua resposta: "))

    if(opção === 1){

        let jogocadastrar = prompt("Insira o jogo que deseja cadastrar: ")
        let existe = false

        for (let i = 0; i < jogos.length; i++){
            if(jogos[i] == jogocadastrar){
                existe = true
                break
            }
        }

        if(existe == true){
            console.log("Jogo já existe no cadastro")
        }else{
            jogos.push(jogocadastrar)
        }
        console.log(jogos)

    }else if(opção === 2){ 

        let jogoexcluir = prompt("Insira o jogo que você deseja excluir: ")
        for (let i = 0; i < jogos.length; i++){
            if(jogos[i] == jogoexcluir){
                jogos.splice(i,1)
            }
        }
        console.log(jogos)

    }else if(opção === 3){

        console.log("A lista de jogos atual é essa: ")
        console.log(jogos)

    }else if(opção === 4){

        console.log(jogos)

        let jogoeditar = prompt("Qual jogo você deseja editar: ")
        for (let i = 0; i < jogos.length; i++){
            if(jogos[i] == jogoeditar){
                let novojogo = prompt("insira oque você deseja editar: ")
                jogos[i] = novojogo
            }
        }
        console.log(jogos)

    }else if(opção === 5){
        break
    }else{
        console.log("Essa opção não existe")
    }
}