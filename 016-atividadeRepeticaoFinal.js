let input = require('prompt-sync')();

let tabuadaI = input('Informe a tabuada Inicial: ');
let tabuadaF = input('Informe a tabuada Final: ');

let contadorGeral = tabuadaI;

while (contadorGeral <= tabuadaF) {
    console.log(`TABUADA DO ${tabuadaI}`);
    console.log('');

    for (let cont = 1; cont <= 10; cont++) {
        console.log(`${tabuadaI} x ${cont} = ${parseInt(tabuadaI * cont)}`);
    }
    tabuadaI++;
    contadorGeral++;
    console.log('');
}