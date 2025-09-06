/**
 * Continuando a implementação do exemplo 11,
 * faça com que o programa só aceite uma senha
 * errada três vezes, após a terceira tentativa 
 * errada  o sistema deve apresentar a mensagem
 * informando que o usuário está bloqueado.
 * Quando a senha for digitada corretamente, a mensagem 
 * "Bem vindo ao sistema de login" deve ser apresentada.
 */

let entrada = require('prompt-sync')();

let erros = 1;

const senha = 'bolsonaroMito';
let senhaDigitada = '';

senhaDigitada = entrada('Senha de acesso: ');

if (senhaDigitada == '') {
    console.log('Preencha o campo!');
    return;
}
else {
    if (senhaDigitada === senha) {
        console.log('Bem vindo ao sistema de login!');
        return;
    } else {
        while (senhaDigitada != senha) {
            if (erros == 3) {
                console.log('Limite de senha atingido');
                return;
            } else {
                senhaDigitada = entrada('Senha de acesso: ');
                erros = erros + 1;
            }

        }

    }

}