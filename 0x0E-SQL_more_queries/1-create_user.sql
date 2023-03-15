-- Creates user
-- create user
CREATE USER IF NOT EXISTS 'user_0d_1'@'localhost' IDENTIFIED BY 'user_0d_1_pwd';
-- grant privs
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost';
-- flush
FLUSH PRIVILEGES;
