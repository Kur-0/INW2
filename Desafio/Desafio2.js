/*

solicitar nome e ano nasc
em cima do ano calcule idade e 

se idade < 3 escreva, não atendemos bebes

se idade > 3 && idade < 13 escreva [NOME] - faixa infantil

se idade > 13 && < 17  escreva [NOME] - faixa adolescente

se idade > 17 && < 65  escreva [NOME] - faixa adulta

se idade > 65 escreva, não atendemos idosos
*/

const leia = require("prompt-sync")()

let nome = leia("Digite seu nome: ");
let anoNascimento = parseFloat(leia("Digite seu ano de nascimento: "));
let idade = 2023 - anoNascimento


if(idade < 3){
    console.log("Não atendemos bebes.")
}
else if(idade >= 3 && idade <= 13){
    console.log(nome + " - FAIXA INFANTIL - ")
}
else if(idade > 13 && idade <= 17){
    console.log(nome + " - FAIXA ADOLESCENTE - ")
}
else if(idade > 17 && idade <= 65){
    console.log(nome + " - FAIXA ADULTA - ")
}
else if(idade > 65){
    console.log("Não atendemos idosos.")
}
