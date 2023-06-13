// ARRAYS OU VETORES
const leia = require("prompt-sync")()

let equipes = ['SANTOS', 'PALMEIRAS', 'SÃO PAULO', 'FLAMENGO']
let pontos = [0, 0, 0, 0]

console.log("TIME\tPONTOS")
for (let i = 0; i < equipes.length; i++) {
    console.log(equipes[i])
    pontos[i] = parseInt(leia("Digite quantos pontos: "))
    
}
console.log("TABELA")
console.log("TIME\tPONTOS")
for (let i = 0; i < equipes.length; i++) {
    console.log(equipes[i] + '\t' + pontos[i])
}