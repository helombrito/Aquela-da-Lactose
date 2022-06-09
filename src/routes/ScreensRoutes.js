const route = require('express').Router();
//? DEFINE ROUTES OF SCREEN

route.get('/', (req, res) => {
    res.render("index");
});
route.get('/cadastro', (req, res) => {
    res.render("cadastro");
});
route.get('/contato', (req, res) => {
    res.render("contato");
});
route.get('/dicas', (req, res) => {
    res.render("dicas");
});
route.get('/esqueci_senha', (req, res) => {
    res.render("esqueci_senha");
});
route.get('/login', (req, res) => {
    res.render("login");
});
route.get('/perfil_administrador', (req, res) => {
    res.render("perfil_administrador");
});
route.get('/perfil_usuario', (req, res) => {
    res.render("perfil_usuario");
});
route.get('/receitas', (req, res) => {
    res.render("receitas");
});
route.get('/tudo-sobre-lactose', (req, res) => {
    res.render("tudo-sobre-lactose");
});
route.get('/conteudo', (req, res) => {
    res.render("conteudo");
});

module.exports = route;