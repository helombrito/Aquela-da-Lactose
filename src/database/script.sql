CREATE DATABASE AquelaDaLactose;
USE AquelaDaLactose;

CREATE TABLE Usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (150),
    idade INT,
    email VARCHAR (150),
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