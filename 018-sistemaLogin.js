let input = require('prompt-sync')();

let usuarios = [
    { usuario: 'admin', senha: '1234', nome: 'Administrador' },
    { usuario: 'jul9078', senha: 'abcd', nome: 'Júlio César' },
    { usuario: 'biaL90', senha: '76p&', nome: 'Ana Beatriz' },
]

function helloUser(pNome) {
    console.log(`Olá, Sr(a) ${pNome}. Seja bem-vindo!`);
}

function loginUser(pUser, pSenha) {
    let logado = false;
    let i = 0;
    for (i; i < usuarios.length; i++) {
        if (pUser === usuarios[i].usuario && pSenha === usuarios[i].senha) {
            logado = true;
            break;
        }
    }
    if (logado) {
        return { sucesso: true, txtRetorno: usuarios[i].nome };
    } else {
        return { sucesso: false, txtRetorno: 'Usuário ou senha errados!' }
    }
}

const usuario = input('Usuário: ');
const senha = input('Senha: ');

const retorno = loginUser(usuario, senha);

if (retorno.sucesso) {
    let nome = retorno.txtRetorno;
    helloUser(nome);
} else {
    console.log(retorno.txtRetorno);
}