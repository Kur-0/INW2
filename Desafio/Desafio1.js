const leia = require("prompt-sync")()

//LEIA O NOME dO USUARIO
//LER O SALARIO DO USUÁRIO
//SE O SALÁRIO FOR MENOR 2500 A PESSOA É ISENTA
//PAGA IMPOSTO DE 15% - MOSTRA IMPOSTO E SALARIO LIQUIDO
//SE O SALÁRIO FOR ACIMA DE 5000 PAGA IMPOSTO DE 25%
//MOSTRA SALARIO LIQUIDO E IMPOSTO A PAGAR

let nome = leia("Digite seu nome: ");
let salario = parseFloat(leia("Digite seu salário: "));
let salarioImposto = (salario - salario * (15 / 100));
let salarioFinal =+  salario - salarioImposto


if(salario <= 2500){
    console.log("Seu salario é: "+salario, "e está isento de impostos.")

}
else if(salario > 2500 || salario <= 5000){
    salario = salario - (salario * (15 / 100))  
    console.log("Seu salario é: "+salario)
    console.log("Deste salario serao retirados R$"+salarioFinal, "de imposto.")
}
else if(salario > 5000){
    salario = salario - (salario * (15/100))
    console.log("Seu salario é: "+salario)
    console.log("Deste salario serao retirados R$"+salarioFinal, "de imposto.")
}
