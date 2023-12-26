USE lyj_emp;
show CREATE TABLE st;
INSERT INTO st values(1, "刘备", 25, '男');
INSERT INTO st(id,name,age,gender) values(1, "刘备", 25, '男');
SELECT * FROM st;