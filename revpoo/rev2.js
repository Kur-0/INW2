const leia = require("prompt-sync")()

let numero = 0
let maiorNumero = 0
let total = 0
let i = -1

do{ 
    total += numero
    if(numero > maiorNumero){
    maiorNumero = numero
}
    numero = parseInt(leia("Digite um numero: "))
    i++
}while(numero > 0)
console.log("Total: " + total)
console.log("Este é o maior numero: " + maiorNumero)
console.log("Esta é a quantidade de números digitados: " + i)
