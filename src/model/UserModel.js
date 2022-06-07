const { getConnection } = require('../database/Connection');
const getAllUsers = () => {
    try {
        return new Promise((resolve, reject) => {
            let stmt = `
                select _idUser as id, nameUser as name, emailUser as email, ageUser as age from tbuser
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
const getMetricsUser = (idUser) => {
    try {
        return new Promise((resolve, reject) => {
            let stmt = `select
            (select count(_idUser) from tbuser join tbcomment on _idUser = fkUser where _idUser = ? limit 1) qtdComments,
            (select count(_idUser) from tbuser join tbclip on _idUser = fkUser where _idUser = ? limit 1) qtdClip,
            (select count(_idUser) from tbuser join tbclipfavorite on _idUser = fkUser where _idUser = ? limit 1) qtdFavorite;
            `;
            let conn = getConnection();
            conn.execute(stmt, [idUser, idUser, idUser], (err, result) => {
                if (err) reject(err.message);
                resolve(result);
                return result;
            });
        });
    } catch (error) {
        throw error;
    }
};
const Metricas = () => {
    try {
        return new Promise((resolve, reject) => {
            let stmt = `select 
            (select count(_idUser) from tbuser) qtdUsers,
            (select truncate(avg(ageUser), 0)  from tbuser) avgAge;
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
    getAllUsers,
    InserirUsuario,
    Login,
    getMetricsUser,
    Metricas
};