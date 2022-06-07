const model = require('../model/UserModel');

/**
 * @param {number} [id=0]
 * @return {<{message: string,result: Promise<Array<object>>,status: number}>} 
 */
const index = async () => {
    let values = await model.getAllUsers();
    return {
        message: 'OK',
        result: values,
        status: 200
    };
};
const metrics = async (idUser) => {
    let values = await model.getMetricsUser(idUser);
    return {
        message: 'OK',
        result: values,
        status: 200
    };
};
const all_metrics = async () => {
    let values = await model.getMetrics();
    return {
        message: 'OK',
        result: values,
        status: 200
    };
};
/**
 * @param {string} email
 * @param {string} password
 * @return {<{message: string,result?: Promise<Array<object>>,status: number}>} 
 */

const login = async (email, senha) => {

    let emailCorreto = email !== undefined && email.trim().length > 0;
    let senhaCorreto = senha !== undefined && senha.trim().length > 0;

    let tudoCorreto = emailCorreto && senhaCorreto;

    if (tudoCorreto) {
        let values = await model.Login(email, senha);
        return {
            message: 'OK',
            result: values,
            status: 200
        };
    } else {
        return { message: 'Verify your params', status: 404 };
    }
};

/**
 * @param {string} nome
 * @param {string} idade
 * @param {string} email
 * @param {number} senha
 * @return {<{message: string,result?: Promise<Array<object>>,status: number}>} 
 */
const set = async (nome, idade, email, senha) => {
    let nomeCorreto = nome !== undefined && nome.trim().length > 0;
    let idadeCorreto = idade !== undefined && idade > 0;
    let emailCorreto = email !== undefined && email.trim().length > 0;
    let senhaCorreto = senha !== undefined && senha.trim().length > 0;

    let TudoCorreto = nomeCorreto &&
        idadeCorreto &&
        emailCorreto &&
        senhaCorreto;

    if (TudoCorreto) {
        let values = await model.InserirUsuario(nome, idade, email, senha);
        return {
            message: 'OK',
            result: values,
            status: 200
        };
    } else {
        return { message: 'Verify your params', status: 400 };
    }
};

module.exports = {
    index,
    set,
    login,
    metrics,
    all_metrics,
};