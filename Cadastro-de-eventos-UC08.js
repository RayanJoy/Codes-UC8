//Sistema Eventos
const DataEvento = require('readline-sync');
const Idade = require('readline-sync');
const Nome = require('readline-sync');
const Participantes = require('readline-sync');

let Nome = Nome.question("Informe seu nome: ");

let DataEvento = DataEvento.question("Informe a data do evento? ");

var date = new Date(DataEvento.split('/').reverse().join('/'));
var dataAtual = new Date();

if (date > dataAtual) {
    console.log("Data valida. ");
} else {
    console.log("Data invalida. ")
}
    let idade = Idade.question("Informe a sua idade? ");

         if (idade >= 18) {
        console.log("Maior de idade. ") 
        } else {
            console.log("Participante deve ser maior de idade. ")
        }

        let participantes = Participantes.question("Informe a quantidade de participantes: ");
            if (participantes < 100) {
                console.log("Cadastro efetivado. ")    
            } else {
                console.log("O cadastro não será permitido por ter excedido o limite. ")
            }        
        
            

console.log("Fim do programa. ")