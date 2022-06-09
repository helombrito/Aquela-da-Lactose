const model = require('../model/CommentModel');

/**
 * @param {number} [id=0]
 * @return {<{message: string,result: Promise<Array<object>>,status: number}>} 
 */
const PegarPostagens = async (id = 0) => {
    if (id > 0) {

    }
    let values = await model.PegarPostagens();
    return {
        message: 'OK',
        result: values,
        status: 200
    };
};
const InserirComentario = async (titulo, fkusuario, mensagem) => {
    let MensagemCorreta = mensagem !== undefined && mensagem.trim().length > 0;
    let fkUsuarioCorreto = fkusuario !== undefined && fkusuario > 0;
    let TituloCorreto = titulo !== undefined && titulo.trim().length > 0;

    let TudoCorreto = MensagemCorreta && fkUsuarioCorreto && TituloCorreto;

    if (TudoCorreto) {
        let values = await model.InserirComentario(titulo, fkusuario, mensagem);
        return {
            message: 'OK',
            result: values,
            status: 200
        };
    } else {
        return { message: 'Verify your params', status: 404 };
    }
};


module.exports = {
    PegarPostagens,
    InserirComentario
};