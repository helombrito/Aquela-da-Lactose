const { getConnection } = require('../database/Connection');

const PegarMetricas = () => {
    try {
        return new Promise((resolve, reject) => {
            let stmt = `select
            (select count(idUsuario) from usuario)as"qtd_usuarios", (select truncate(avg(idade), 0) from usuario)as"media_idades", (select count(idPostagem) from postagem)as"qtd_postagens";
            `;
            let conn = getConnection();
            conn.execute(stmt, null, (err, result) => {
                if (err) reject(err.message);
                resolve(result);
                return result;
            });
        });
    } catch (error) {
        throw error;
    }
};

/**
 * @description insert a user on database
 * @param {string} nome
 * @param {int} idade
 * @param {string} email
 * @param {string} senha
 */
const InserirUsuario = (nome, idade, email, senha) => {
    try {
        return new Promise((resolve, reject) => {
            let conn = getConnection();
            let stmt = `
                insert into Usuario (nome, idade, email, senha) values (?,?,?,?);
            `;
            let params = [nome, idade, email, senha];

            conn.execute(stmt, params, (err, result) => {
                if (err) reject(err.message);
                resolve(result);
                return result;
            });
        });
    } catch (error) {
        throw error;
    }
};


/**
 * @param {string} email
 * @param {string} senha
 */
const Login = (email, senha) => {
    try {
        return new Promise((resolve, reject) => {
            let conn = getConnection();
            let stmt = `
                select * from Usuario where email = ? and senha = ?;
            `;

            let params = [email, senha];
            conn.execute(stmt, params, (err, result) => {
                if (err) reject(err.message);
                resolve(result);
                return result;
            });
        });
    } catch (error) {
        throw error;
    }

};
module.exports = {
    InserirUsuario,
    Login,
    PegarMetricas,
};