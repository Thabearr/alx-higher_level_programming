-- States table
-- create a database
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
-- create the table now
CREATE TABLE IF NOT EXISTS hbtn_0d_usa.cities (
    id INT UNIQUE AUTO_INCREMENT NOT NULL PRIMARY KEY,
    state_id INT NOT NULL,
    name VARCHAR(256) NOT NULL,
    FOREIGN KEY (state_id) REFERENCES hbtn_0d_usa.states(id)
) ENGINE=INNODB;
