CREATE DATABASE AquelaDaLactose;
USE AquelaDaLactose;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (150),
    idade INT,
    email VARCHAR (150),
    senha VARBINARY (150)
);

SELECT * FROM Usuario;

CREATE TABLE Postagem (
	idPostagem INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    titulo VARCHAR(150),
    mensagem VARCHAR(1000),
    FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);

SELECT * FROM Postagem;

insert into usuario (nome, idade, email, senha) values ('Guilherme Delfino', 18, 'delfino@email.com', 'delfino1');
insert into postagem (fkusuario, titulo, mensagem) values (1, 'Sou novo aqui!', 'Oi, eu sou novo aqui!');

select * from postagem join usuario on fkusuario = idusuario;

select usuario.nome, postagem.titulo, postagem.mensagem from postagem join usuario on fkusuario = idusuario;

----------------------------------------------------------------------------------

-- Selects Métricas

select
(select count(idUsuario) from usuario)as"qtd_usuarios", (select truncate(avg(idade), 0) from usuario)as"media_idades", (select count(idPostagem) from postagem)as"qtd_postagens";

