let input = require('prompt-sync')();

let nome = input('Informe seu nome: ');
let idade = input('Informe sua idade: ');

let validaIdade = isNaN(idade);

if (validaIdade) {
    console.log(`${nome} insira um valor numérico na idade!`);    
}