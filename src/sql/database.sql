CREATE DATABASE news_portal;

USE news_portal;

CREATE TABLE news(
    id_news INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE news;

INSERT INTO news(title,news) values ('my title','content of the news');

SELECT * FROM news;

DELETE FROM news where id_news = 8;
DELETE FROM news where title="oko";

/*
service mysqld status
service mysqld stop
service mysqld start

https://www.a2hosting.com/kb/developer-corner/mysql/managing-mysql-databases-and-users-from-the-command-line
*/