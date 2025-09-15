## APELIDANDO COLUNAS/CAMPOS
select
	`c`.`name` as `nome` 
from
	`sakila`.`category` as `c`
where
	`c`.`name` like 'a%';