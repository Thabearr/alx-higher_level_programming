-- ID can't be null
-- create table
CREATE TABLE IF NOT EXISTS id_not_null (
    id INT DEFAULT 1,
    name VARCHAR(256)
) ENGINE=INNODB;
