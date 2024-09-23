CREATE DATABASE meuSiteDB;

USE meuSiteDB;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conteudo TEXT,
    data_envio DATETIME,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);