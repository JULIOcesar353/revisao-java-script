let input = require('prompt-sync')();

let frase = input('Digite uma frase: ');
let frase2 = '';
let contador = -1;

// console.log(frase.length);

while (contador < frase.length) {
    contador++;
    if (frase[contador] == 'a' ||
        frase[contador] == 'e' ||
        frase[contador] == 'i' ||
        frase[contador] == 'o' ||
        frase[contador] == 'u' ||
        frase[contador] == ' ' ||
        frase[contador] == 'ã' ||
        frase[contador] == 'ó'
    ) {
        continue;
    }
    frase2 = frase2 + frase.charAt(contador);

    // console.log(frase[contador]);    
}
console.log(frase2);