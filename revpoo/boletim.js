const leia = require("prompt-sync")()

let alunos = []
let nota = []
let status = ""

console.log('BOLETIM: ')
for (let i = 0; i < 4; i++) {
    alunos[i] = leia("Digite seu nome: ")
    nota[i] = parseInt(leia("Digite sua nota: "))
    if(nota < 5){
        status = "Reprovado :("
    }
    else if(nota >= 5){
        console.log("Aprovado :)")
    }
    
}

console.log("BOLETIM FINAL")
for (let i = 0; i < 4; i++) {
    console.log(alunos[i] + '\t' + nota[i])
    
}

