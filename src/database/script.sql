CREATE DATABASE AquelaDaLactose;
USE AquelaDaLactose;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (150),
    email VARCHAR (150),
    dtNasc DATE,
    genero CHAR (1) CHECK (genero = 'F' or genero = 'M'), -- F para Feminino e M para Masculino
    senha VARCHAR (45)
);

SELECT * FROM Usuario;

CREATE TABLE Forum (
	idForum INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
	qtdPostagens INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);

SELECT * FROM Forum;