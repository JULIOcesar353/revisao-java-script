let entrada = require('prompt-sync')();

let tabuada = entrada('Informe um número para ver sua tabuada: ');

for (let contador = 1; contador <= 10; contador++){
    console.log(`${tabuada} x ${contador} = ${parseInt(tabuada * contador)}`);    
}