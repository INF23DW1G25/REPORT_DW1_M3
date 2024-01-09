CREATE SCHEMA todo_list;

USE todo_list;

CREATE TABLE Category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
) ENGINE=InnoDB;

CREATE TABLE Task (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT NOT NULL,
    conclusion_date DATE,
    status ENUM('pending', 'completed') DEFAULT 'pending',
    user_id INT,
    category_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE CASCADE
) ENGINE=InnoDB;


INSERT INTO User (name, email) VALUES
    ('João Silva', 'joao.silva@email.com'),
    ('Maria Santos', 'maria.santos@email.com'),
    ('Pedro Almeida', 'pedro.almeida@email.com'),
    ('Ana Rodrigues', 'ana.rodrigues@email.com'),
    ('José Oliveira', 'jose.oliveira@email.com'),
    ('Margarida Sousa', 'margarida.sousa@email.com'),
    ('Manuel Martins', 'manuel.martins@email.com'),
    ('Sofia Silva', 'sofia.silva@email.com'),
    ('Carlos Pereira', 'carlos.pereira@email.com'),
    ('Isabel Costa', 'isabel.costa@email.com'),
    ('António Santos', 'antonio.santos@email.com'),
    ('Luísa Ferreira', 'luisa.ferreira@email.com'),
    ('Rui Mendes', 'rui.mendes@email.com'),
    ('Catarina Alves', 'catarina.alves@email.com'),
    ('Paulo Rocha', 'paulo.rocha@email.com'),
    ('Fátima Fernandes', 'fatima.fernandes@email.com'),
    ('Joaquim Ribeiro', 'joaquim.ribeiro@email.com'),
    ('Inês Gomes', 'ines.gomes@email.com'),
    ('Hugo Carvalho', 'hugo.carvalho@email.com'),
    ('Teresa Teixeira', 'teresa.teixeira@email.com'),
    ('Miguel Matos', 'miguel.matos@email.com'),
    ('Helena Marques', 'helena.marques@email.com'),
    ('Daniel Santos', 'daniel.santos@email.com'),
    ('Beatriz Lima', 'beatriz.lima@email.com'),
    ('Nuno Costa', 'nuno.costa@email.com'),
    ('Lúcia Pereira', 'lucia.pereira@email.com'),
    ('Eduardo Almeida', 'eduardo.almeida@email.com'),
    ('Sara Silva', 'sara.silva@email.com'),
    ('Jorge Rodrigues', 'jorge.rodrigues@email.com'),
    ('Rosa Martins', 'rosa.martins@email.com');

INSERT INTO Category (name) VALUES
    ('Trabalho'),
    ('Estudo'),
    ('Lazer');

INSERT INTO Task (description, conclusion_date, status, user_id, category_id) VALUES
    ('Preparar apresentação', '2023-12-15', 'pending', 4, 1),
    ('Resolver exercícios de matemática', '2023-11-25', 'completed', 5, 2),
    ('Passeio de bicicleta', NULL, 'pending', 6, 3),
    ('Atualizar relatório de vendas', '2023-12-20', 'pending', 7, 1),
    ('Ler livro para o clube de leitura', '2023-11-28', 'completed', 8, 2),
    ('Praticar yoga', NULL, 'pending', 9, 3),
    ('Revisar código-fonte', '2023-12-10', 'completed', 10, 1),
    ('Estudar história para o exame', '2023-11-29', 'pending', 11, 2),
    ('Caminhada na praia', NULL, 'pending', 12, 3),
    ('Preparar proposta de projeto', '2023-12-18', 'pending', 13, 1),
    ('Fazer resumo de artigo científico', '2023-11-27', 'completed', 14, 2),
    ('Aula de dança', NULL, 'pending', 15, 3),
    ('Analisar relatório financeiro', '2023-12-12', 'completed', 16, 1),
    ('Estudar química para o exame', '2023-11-26', 'pending', 17, 2),
    ('Caminhada no parque', NULL, 'pending', 18, 3),
    ('Reunião de equipe', '2023-12-22', 'pending', 19, 1),
    ('Resolver problemas de física', '2023-11-24', 'completed', 20, 2),
    ('Praticar meditação', NULL, 'pending', 21, 3),
    ('Atualizar planilhas de vendas', '2023-12-17', 'completed', 22, 1),
    ('Ler artigos científicos', '2023-11-23', 'pending', 23, 2),
    ('Caminhada no campo', NULL, 'pending', 24, 3),
    ('Elaborar relatório de marketing', '2023-12-14', 'pending', 25, 1),
    ('Estudar literatura para o exame', '2023-11-22', 'completed', 26, 2),
    ('Treino de corrida', NULL, 'pending', 27, 3),
    ('Preparar apresentação de vendas', '2023-12-16', 'completed', 28, 1),
    ('Fazer exercícios de biologia', '2023-11-21', 'pending', 29, 2),
    ('Aula de pintura', NULL, 'pending', 30, 3);


GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678' WITH GRANT OPTION;
ALTER USER 'root'@'%' IDENTIFIED WITH 'mysql_native_password' BY '12345678';
FLUSH PRIVILEGES;

  
