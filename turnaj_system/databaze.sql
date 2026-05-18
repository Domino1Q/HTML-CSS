CREATE DATABASE turnaj_system;

USE turnaj_system;

CREATE TABLE teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE matches (
    id INT AUTO_INCREMENT PRIMARY KEY,

    team1_id INT,
    team2_id INT,

    score1 INT DEFAULT 0,
    score2 INT DEFAULT 0,

    round_name VARCHAR(50),

    FOREIGN KEY (team1_id) REFERENCES teams(id),
    FOREIGN KEY (team2_id) REFERENCES teams(id)
);