//fazer uma função que corresonde ao salaio
// e retorna uma informaçãoa o usuário
//se o valor digitado for menor ou igual  a 1500, retorna o texto 0
//se o valor digitado for maior 1500 e menor que 2500, calcular 15% e retornar
//se o valor digitado for maior 2500, calcular 25% e retornar

function calcularFds (valor){
    return (valor);
}

const Imposto = (valor) =>{ 
    if(valor <= 1500){
        return "ISENTO " + valor
    }
    else if(valor > 1500 && valor < 2500){
        return "Você deve 15% de imposto, seu salario será: "+ (valor -=(valor * 0.15 ))
    }
    else if(valor >= 2500){
        return "Você deve 25% de imposto, seu salario será: "+ (valor -=(valor * 0.25 ))
    }
    else{
        return 'valor inválido'
    }
}

console.log(Imposto(750))
console.log(Imposto(1500))
console.log(Imposto(1750))
console.log(Imposto(2500))
console.log(Imposto(5700))
