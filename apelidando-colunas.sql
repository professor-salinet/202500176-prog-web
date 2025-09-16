## APELIDANDO COLUNAS/CAMPOS
select
	`s`.`manager_staff_id` as `codigo_gerente` 
from
	`sakila`.`store` as `s`
where
	`s`.`manager_staff_id` > 0;