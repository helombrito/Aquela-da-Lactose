const route = require('express').Router();
const controller = require('../controller/UserController');


route.get('/get/metricas/:id', async (requisicao, resposta) => {
    let datas = await controller.metrics(requisicao.params.id);
    resposta
        .json(datas)
        .status(datas.status);
});
route.get('/get/metricas/', async (requisicao, resposta) => {
    let datas = await controller.all_metrics();
    resposta
        .json(datas)
        .status(datas.status);
});
route.post('/login', async (requisicao, resposta) => {
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;

    let datas = await controller.login(email, senha);
    resposta
        .json(datas)
        .status(datas.status);
});

route.post('/cadastrar', async (requisicao, resposta) => {
    let nome = requisicao.body.nome;
    let idade = requisicao.body.idade
    let email = requisicao.body.email;
    let senha = requisicao.body.senha;

    let datas = await controller.set(nome, idade, email, senha);
    resposta
        .json(datas)
        .status(datas.status);
});

module.exports = route;