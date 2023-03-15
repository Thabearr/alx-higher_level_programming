-- States table
-- create db
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
-- create table
CREATE TABLE IF NOT EXISTS hbtn_0d_usa.states (
    id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(256) NOT NULL
) ENGINE=INNODB;
