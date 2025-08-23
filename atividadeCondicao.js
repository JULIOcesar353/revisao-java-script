/*
    Crie um programa de um estabelicimento que receba dados como
    o nome, a idade e se a pessoa é amigo do dono.
    Retorno uma mensagem de acordo com as validações abaixo:
    - Se a pessoa ter mais de 18 não acessam o local.
    - Amigos do dono podem acessar o local independente da idade.
    - Caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganhará
    uma bebida.
*/

let entrada = require('prompt-sync')();

let nome = entrada('Insira seu nome: ');
let idade = entrada('Informe sua idade: ');
let amigo = entrada('Você é amigo do dono? (Sim/Nao): ');


if (nome === '' || idade === '' || amigo === '') {
    console.log('É necessário prencher todos os campos!');
} else {
    if ((idade >= 18) && (amigo == 'Sim')) {
        console.log(`${nome}. Acesso liberado. Você ganhou uma bebida!!`);

    }
    else if ((idade < 18) && (amigo == 'Sim')) {
        console.log(`${nome}. Acesso liberado por ser amigo do dono!`);
    }
    else if (idade >= 18) {
        console.log(`${nome}. Acesso liberado por maioridade!`);
    }
    else if ((idade < 18) && (amigo == 'Nao')) {
        console.log(`${nome}. Você não tem acesso ao local!!`);
    }
}