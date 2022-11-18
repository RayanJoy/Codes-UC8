
let listaPecas = 3;
let peso = 150;
let nomepeca = "pistão forjado";//string

//correção 1
if (peso >= 100){
     console.log ("Cadastro de peso sucedido ");

     if (listaPecas >= 10 ){
        console.log ("Capacidade insuficiente ");
     }

        if ( nomepeca.length < 3 ){
            console.log ("Caracteres Insuficientes ");
        }
    } else {
   console.log ("Peso inferior ao permitido");
    }

//correçao 2

if (peso >= 100){
    console.log("Cadastro sucedido");
} else {
    console.log("Peso invalido");
}
if (listaPecas >=10){
    console.log("Capacidade de cadastro insuficiente");
}

if (nomepeca.length <3 ){
    console.log("Caracteres insuficientes");
}