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

CREATE TABLE Forum (
	idForum INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
	qtdPostagens INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);

SELECT * FROM Forum;

----------------------------------------------------------------------------------

-- Selects Métricas

-- QUANTIDADE DE CADASTROS
select count(idUsuario) 'Quantidade de Usuários Cadastrados' from usuario;

-- MÉDIA DE IDADES
select truncate(avg(idade), 0) 'Média das Idades' from usuario;

-- QUANTIDADE DE POSTAGENS NO FÓRUM
select count(idForum) 'Quantidade de postagens no Fórum' from forum;