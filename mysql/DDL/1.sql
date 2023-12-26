-- SHOW DATABASES;
-- SELECT DATABASE();
-- CREATE DATABASE [IF NOT EXISTS] YOUR_DATA [DEFAULT CHARSET utf8mb4] [COLALATE 排序规则]
-- DROP DATABASE [IF NOT EXISTS] YOUR_DATA
-- USE
-- SHOW tables;
-- SHOW CREATE table your_table_name;

CREATE DATABASE IF NOT EXISTS lyj_emp default charset utf8mb4;
USE lyj_emp;
CREATE TABLE st(
    id int not null comment'id',
    name varchar(32) not null comment'姓名',
    age int default 18 comment'年龄',
    gender varchar(1) comment'性别'
)comment'基本信息表';