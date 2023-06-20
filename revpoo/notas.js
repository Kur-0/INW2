const leia = require("prompt-sync")()

let matriculas = ['|Mat01|', '|Mat02|', '|Mat03|', '|Mat04|']
let alunos = ['Marcos \t|', 'Pedro \t|', 'Maria \t|', 'Paulo \t|']
let notas = [0,0,0,0,]
let status = ""

console.log("| MAT | ALUNOS | NOTAS |")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i]+notas[i])
}
console.log("Definição de notas")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i]+'\t'+alunos[i])
    notas[i] = leia("Digite sua nota: ")
    if(notas[i] < 5){
        status = "Reprovado :("
        console.log(status)
    }
    else if(notas[i] >= 5){
        status = "Aprovado :)"
        console.log(status)
    }
}
console.log("| MAT | ALUNOS \t | NOTAS | STATUS |")
for(let i=0; i<matriculas.length; i++){
    console.log(matriculas[i] + '\t' + alunos[i] + notas[i] + '\t' + status)
}
// console.log("ALTERAÇÃO DE DADOS")
// let codigo = leia("Digite o codigo do produto que deseja troca o nome : ")
// for(let i=0; i<codigos.length; i++){
//     if(codigo == codigos[i]){
//         console.log("Nome atual do produto "+produtos[i])
//         produtos[i] = leia("Digite o novo nome : ")
//     }
// }



