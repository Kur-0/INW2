function calcularNota(){

let numero =parseFloat(document.getElementById("fds").value);

if(numero > 6){
    alert("Parabens, voce passou!!")
}
else if(numero == 6){
    alert("Voce passou, mas precisa estudar mais")
}
else if(numero < 6){
    alert("Você está de rec :/")
}
else{
    alert("Digitação inválida")
}

}
