let entrada = require('prompt-sync')();
let number = 0;

while(number <= 10){
    number = entrada('Informe um número >10: ');
    console.log(number);    
}
console.log('Você saiu do while! ' + number);