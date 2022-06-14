//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade  = 18;
if (idade >=18){
    console.log("Voce é maior de idade")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let deMaior = 18
let eHumano = "Humano"

if ((deMaior >= 18) && (eHumano === "Humano")){
    console.log("Devido sua idade você tem permissão para entrar")
}
else{
    console.log("Você não atende aos requesitos para entrar")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversário = "janeiro";
let mes = "dezembro";

if((aniversário === "janeiro") || (mes === "dezembro")){
    console.log("Seu aniversário é em janeiro ou dezembro")
}
else{
    console.log("Você não faz nem em janeiro e dezembro")
}


