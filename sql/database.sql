-- Criando o banco de dados
CREATE DATABASE biblioteca;

-- Criando tabelas
CREATE TABLE autor (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    nacionalidade TEXT
);

CREATE TABLE livro (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    ano_lancamento INT,
    sinopse TEXT,
    autor_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES 
        autor(id) ON DELETE CASCADE
);

-- Adicionando dados de teste
INSERT INTO autor (nome, nacionalidade) VALUES 
    ('Machado de Assis', 'Brasileiro'), 
    ('George Orwell', 'Inglês');

INSERT INTO livro (titulo, ano_lancamento, sinopse, autor_id) VALUES 
    ('Dom Casmurro', 1899, 'Um romance...', 1), 
    ('1984', 1949, 'Uma distopia...', 2);

