const entrada = require ("readline-sync");

let peso = 20;
let listapecas = 13;
let nomepeca = "Turbina";

if (peso >= 100){
    console.log("Peso da peça cadastrado . ");
} else {
    console.log("Peso invalido .");
}

if (listapecas > 10){
    console.log("Capacidade de armazenamento insuficiente .");
} else {
    console.log("Cadastro de lista de peças feito .");
}

if (nomepeca.length <3){
    console.log("Caracteres insuficientes .");
} else {
    console.log("Nome da peça registrado");
}

console.log("Fim do programa");