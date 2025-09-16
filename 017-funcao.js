let input = require('prompt-sync')();

function helloUser(pNome) {
    console.log(`Olá, Sr(a) ${pNome}. Seja bem-vindo!`);
}

function loginUser(pUser, pSenha) {
    if (pUser === 'mito' && pSenha === '2026') {
        return true;
    } else {
        return false;
    }
}

let usuario = input('Usuário: ');
let senha = input('Senha: ');

if (loginUser(usuario, senha)) {
    let nome = input('Seu nome: ');
    helloUser(nome);
} else {
    console.log('Usuário ou senha errados!');
}