const { getConnection } = require('../database/Connection');
const PegarPostagens = () => {
    try {
        return new Promise((resolve, reject) => {
            let stmt = `
            select usuario.nome, postagem.titulo, postagem.mensagem from postagem join usuario on fkusuario = idusuario;
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
 * @description insert a comment on database
 * @param {string} titulo
 * @param {number} fkusuario
 * @param {string} mensagem
 */
const InserirComentario = (titulo, fkusuario, mensagem) => {
    try {
        return new Promise((resolve, reject) => {
            let conn = getConnection();
            let stmt = `
            insert into postagem (fkusuario, titulo, mensagem) values (?, ?, ?);
            `;
            let params = [fkusuario, titulo, mensagem];
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
    PegarPostagens,
    InserirComentario,
};