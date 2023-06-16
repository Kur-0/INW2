function primo(){

    let numero;


      numero = document.getElementById("num").value;


    if (numero > 0) {

        if ((numero / 1) == numero) {
            alert("Seu número é primo!")
        }
        else {
            alert("Este não é um número primo")
        }


    }
    else {
        alert("Numero Inválido")
    }

}