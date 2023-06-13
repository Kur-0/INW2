const leia = require("prompt-sync")()

let numero = parseInt(leia("Digite um numero entre 5 e 9: "))

console.log(numero)
do {
    numero *= 3
    console.log(numero)
} while (numero < 100)

