let input = require('prompt-sync')();

let n1 = input('Informe o 1º número: ');
let n2 = input('Informe o 2° número: ');

let soma = parseFloat(n1) + parseFloat(n2);
let subtracao = parseFloat(n1) - parseFloat(n2);
let produto = parseFloat(n1) * parseFloat(n2);
let razao = parseFloat(n1) / parseFloat(n2);

console.log('======== Resultados ========');
console.log('');

console.log('Soma: ' + soma.toFixed(2));
input();
console.log('Diferença: ' + subtracao.toFixed(2));
input();
console.log('Produto: ' + produto.toFixed(2));
input();
console.log('Razão: ' + razao.toFixed(2));
input();
