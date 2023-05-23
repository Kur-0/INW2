
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

let valor = 0

// SUB-CLASSE ESTUDANTIL

class Estudantil extends Conta{
    constructor(numero, cpf, saldo, ativa, limiteEstudantil){
        super(numero, cpf, saldo, ativa)
        this.limiteEstudantil = limiteEstudantil
    }
    
    usarEstudantil(valor){
            if (valor < 0) {
                console.log("Impossivel realizar, valor negativo...")
            }
            else if (valor == 0) {
                console.log("Impossivel realizar, valor nulo inserido...")
            }
            else if(valor <= (this.saldo + this.limiteEstudantil)){
                console.log("Impossivel realizar, sem valor no limite e saldo...")
            }
            else{
                this.limiteEstudantil = this.limiteEstudantil - valor
                credito(valor)
            }
    }

}

// SUB-CLASSE POUPANÇA

class Poupanca extends Conta{
    constructor(numero, cpf, saldo, ativa,diaAniversarioPoupanca){
    super(numero, cpf, saldo, ativa,)
    this.diaAniversarioPoupanca = diaAniversarioPoupanca
    }
    correcao(dia){
       

        if(opp == this.diaAniversarioPoupanca){
            credito(this.saldo * 0.05)
        }
    }
}

// programa principal
const leia = require("prompt-sync")()
let opcao = ""

// montando o menu
do{
    console.log("")
    console.log("1 - CONTA POUPANÇA")
    console.log("2 - CONTA CORRENTE")
    console.log("3 - CONTA ESPECIAL")
    console.log("4 - CONTA ESTUDANTIL")
    console.log("5 - SAIR")
    opcao = leia("Digite o numero que corresponde a operação que deseja realizar: ")
    if(opcao == "1"){
        console.log("CONTA POUPANÇA")
        let numero = leia("Digite o número da conta: ")
        let cpf = leia("Digite o cpf: ")
        let opp=""
        opp = leia("Digite o dia de hoje: ")
        let diaAniversarioPoupanca = leia("Digite o dia de criação da conta: ")
        let cp1 = new Poupanca(numero,cpf,0,false,diaAniversarioPoupanca)
        cp1.ativar()
        let op=""
        for (let x = 1; x<=10; x++){
            console.log("Movimento: "+ x)
            op = leia("Digite D para débito ou C para crédito: ")
            if(op=="D"){
                cp1.debito(valor)
            }
            else if(op=="C"){
                cp1.credito(valor)
            }
            console.log("Saldo atual da conta: "+cp1.saldo)
        }
        
    }
    else if(opcao == "2"){
        console.log("Testando conta corrente")
    }
    else if(opcao == "3"){
        console.log("Testando conta especial")
    }
    else if(opcao == "4"){
        console.log("CONTA ESTUDANTIL")
        let numero = leia("Digite o numero da conta: ")
        let cpf = leia("Digite o cpf: ")
        //0, false, 5000
        let cee1 = new Estudantil(numero,cpf,0,false,5000)
        cee1.ativar()
        let op=""
        for (let x = 1; x<=10; x++){
            console.log("Movimento: "+ x)
            op = leia("Digite D para débito ou C para crédito: ")
            if(op=="D"){
                cee1.debito(valor)
            }
            else if(op=="C"){
                cee1.credito(valor)
            }
            console.log("Saldo atual da conta: "+cee1.saldo)
        }
    }
    else if(opcao == "5"){
        console.log("Saindo do programa...")
    }
    else{
        console.log("Digitação invalida, tente novamente")
    }
}while (opcao != "5")
    console.log("Fim do programa, volte sempre!")






/*let numero = parseInt(leia("Digite o numero da conta: "))
let cpf = leia("Digite o cpf da conta: ")
let c1 = new Conta(numero, cpf, 0, false)
let op=""


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
*/