
class Conta {
    constructor(numero, cpf, saldo, ativa) {
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativa = ativa
    }
    ativar() {
        this.ativa = true;

    }
    credito(valor) {
        if (this.ativa){
            if (valor < 0) {
                console.log("Impossivel realizar, valor negativo...")
            }
            else if (valor == 0) {
                console.log("Impossivel realizar, valor nulo inserido...")
            }
            else {
                this.saldo += valor
            }
        }
            
        else{
            console.log("Conta inativa...")
        } 
    }
        


debito(valor){
    if (this.ativa) {
        if (valor < 0) {
            console.log("Impossivel realizar, valor negativo...")
        }
        else if (valor == 0) {
            console.log("Impossivel realizar, valor nulo inserido...")
        }
        else if (this.saldo < valor) {
            console.log("Impossivel realizar, saldo indisponivel...")
        }
        else {
            this.saldo -= valor
        }

    }
    else {
        console.log("Conta inativa...")
    }

}
}

// programa principal
const leia = require("prompt-sync")()
let numero = parseInt(leia("Digite o numero da conta: "))
let cpf = leia("Digite o cpf da conta: ")
let c1 = new Conta(numero, cpf, 0, false)
let op=""
let valor = 0
c1.ativar()
for (let x = 1; x<=10; x++){
    console.log("Movimento: "+ x)
    console.log("Saldo atual da conta: "+c1.saldo)
    op = leia("Digite D para débito ou C para crédito: ")
    if(op=="D"){
        valor = parseInt(leia("Digite o valor para debito: "))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor = parseInt(leia("Digite o valor para credito: "))
        c1.credito(valor)
    }
    console.log("Saldo atual da conta: "+c1.saldo)
}

console.log("Saldo final da conta: "+c1.saldo)


