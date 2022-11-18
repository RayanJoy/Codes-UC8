const entrada = require('readline-sync');

let totalAlunos = entrada.question("Digite o número total de alunos ");

for (let aluno = 0; aluno <= parseInt(totalAlunos); aluno++) {
    if (aluno == 0) {
        console.log("Zero " + aluno);
    }  
    if 
    (aluno > 0 && aluno % 2 == 0) {
        console.log("Par " + aluno);        
    }   
    if (aluno % 2 != 0) {
    console.log("Impar " + aluno);
    }
}