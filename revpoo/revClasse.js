const leia = require("prompt-sync")()

class Pessoa{
    constructor(cpf, nome, anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }

    mostrarIdade(){
        console.log(2023-this.anoNascimento)
    }
}
class Aluno extends Pessoa{
    constructor(cpf, nome, anoNascimento, matricula, nota){
    super(cpf, nome, anoNascimento);
    this.matricula = matricula;
    this.nota = nota
    }
}
//programa principal

let p1 = new Aluno("111.222.333-44", "Marcos", 2008, "MAT01", 0)
let p2 = new Aluno("222.111.333-44", "Maria", 2007, "MAT02", 0)
let p3 = new Aluno("333.444.555-66", "Pedro", 2009, "MAT03", 0)
let p4 = new Aluno("333.666.444-55", "Paulo", 2006, "MAT04", 0)

console.log("MAT\tALUNO\tNOTA")
console.log("--------------------------------------")
console.log(p1.matricula + '\t' + p1.nome + '\t' + p1.nota)
console.log(p2.matricula + '\t' + p2.nome + '\t' + p2.nota)
console.log(p3.matricula + '\t' + p3.nome + '\t' + p3.nota)
console.log(p4.matricula + '\t' + p4.nome + '\t' + p4.nota)
console.log("--------------------------------------")
console.log("Digitação de notas:")
console.log(p1.nome)
p1.nota = parseInt(leia("Digite a nota do aluno: "))
console.log(p2.nome)
p2.nota = parseInt(leia("Digite a nota do aluno: "))
console.log(p3.nome)
p3.nota = parseInt(leia("Digite a nota do aluno: "))
console.log(p4.nome)
p4.nota = parseInt(leia("Digite a nota do aluno: "))




console.log("MAT\tALUNO\tNOTA")
console.log("--------------------------------------")
console.log(p1.matricula + '\t' + p1.nome + '\t' + p1.nota)
console.log(p2.matricula + '\t' + p2.nome + '\t' + p2.nota)
console.log(p3.matricula + '\t' + p3.nome + '\t' + p3.nota)
console.log(p4.matricula + '\t' + p4.nome + '\t' + p4.nota)
console.log("--------------------------------------")