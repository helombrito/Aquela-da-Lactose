const route = require('express').Router();
const controller = require('../controller/CommentController');


route.get('/get', async (request, response) => {
    let datas = await controller.PegarPostagens();

    response
        .json(datas)
        .status(datas.status);

});

route.post('/post', async (request, response) => {
    let mensagem = request.body.mensagem;
    let fkusuario = request.body.fkusuario;
    let titulo = request.body.titulo;
    console.log(request.body)

    let datas = await controller.InserirComentario(titulo, fkusuario, mensagem);
    response
        .json(datas)
        .status(datas.status);
});

module.exports = route;
