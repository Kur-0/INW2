const leia = require("prompt-sync")()

//só os impares
//total dos numeros

let numero;
let total = 0

numero = parseInt(leia("Digite um numero inteiro positivo: "))

for (let i = 1; i <= numero; i++) {
    if ((i % 2) != 0) {
        total += i
        console.log(i)

    }
   
}

console.log("A Soma dos valores é: " + total)