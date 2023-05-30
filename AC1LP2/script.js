class Produtos {
    constructor(id, descricao, ativo, estoque, preco, validade, categoria){
    this.id = id;
    this.descricao = descricao;
    this.ativo = ativo;
    this.preco = preco;
    this. validade = validade;
    this.categoria = categoria
    
    }

    ativar() {
        this.ativo = true;
    }


    incluirEstoque(valor){
        if(this.ativa){
            if (valor < 10) {
                console.log("impossivel realizar, falta de estoque")
            }
            else if (valor == 0) {
                console.log("impossivel realizar, estoque zerado")
            }

            else {
                this.estoque = this.estoque + valor
            }

        }
        else {
            console.log("conta inativa...")
        }      
        }

        retirarEstoque(valor) {
            if (this.ativo) {
                if (valor > 10) {
                    console.log("impossivel realizar, falta de estoque")
                }
                else if (valor == 0) {
                    console.log("impossivel realizar, estoque zerado")
                }
                else if (this.estoque < valor) {
                    console.log("impossivel realizar, estoque insuficiente ")
                }
                else {
                    this.estoque -= valor
                }
    
            }
            else {
                console.log("conta inativa...")
    
            }
    
        }


    }




// PROGRAMA PRINCIPAL -->

const leia = require("prompt-sync")()
let id = parseInt(leia("Digite o id do produto: "))
let descricao = (leia("Digite a descrição do produto: "))
let preco = parseInt(leia("Digite o preco do produto: "))
let validade = (leia("Digite a validade do produto: "))
let categoria = (leia("Digite a categoria do produto: "))
let opcao = ""


// MONTANDO O MENU -->

    console.log("BEM VINDO A DROGA RAIA!\n")
    console.log("A SUA FARMÁCIA")
    opcao = leia("DESEJA FAZER COMPRAS? S/N: ")


    if(opcao = S){
        console.log("CADASTRO INICIAL DO PRODUTO\n")
        let descricao = leia("Digite a descricao do produto:")
        let preco = leia("Digite o preco do produto: ")
        console.log("\nPRODUTO CADASTRADO!!")
        let produto = new Produtos(id, descricao, false, 10, preco, validade, categoria)
        produto.ativar()
        for (let i = 0; i < 5; i++) {

            
        }

    }
    else{
        console.log("VOLTE SEMPRE!!")
    }


