CREATE DATABASE IF NOT EXISTS growth;
USE growth;

create table admin(
    id INT AUTO_INCREMENT PRIMARY KEY,
    maskid int(100) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

create table usuarios(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cnpj VARCHAR(18) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);


CREATE TABLE projetos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    valor_minimo DECIMAL(10,2) NOT NULL,
    impacto_estimado VARCHAR(255) 
    );


CREATE TABLE investimentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    projeto_id INT NOT NULL,
    valor_investido DECIMAL(10,2) NOT NULL,
    data DATETIME DEFAULT CURRENT_TIMESTAMP,
    impacto_gerado TEXT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (projeto_id) REFERENCES projetos(id)
);


CREATE TABLE tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    investimento_id INT,
    quantidade DECIMAL(10,2) NOT NULL,
    data_ganho DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (investimento_id) REFERENCES investimentos(id)
);


CREATE TABLE marketplace (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_item VARCHAR(100) NOT NULL,
    descricao TEXT,
    tokens_necessarios DECIMAL(10,2) NOT NULL,
    disponibilidade BOOLEAN DEFAULT TRUE
);


CREATE TABLE resgates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    item_id INT NOT NULL,
    data DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (item_id) REFERENCES marketplace(id)
);


CREATE TABLE notificacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    tipo VARCHAR(50), 
    mensagem TEXT,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

