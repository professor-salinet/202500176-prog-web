## Exemplo de FULL JOIN: 
select
    `c`.`customer_id`,
    `c`.`first_name`,
    `c`.`last_name`,
    `r`.`rental_date`
from
    `sakila`.`customer` as `c`
left join
    `sakila`.`rental` as `r` 
    on `c`.`customer_id` = `r`.`customer_id`
union all
select
    `c`.`customer_id`,
    `c`.`first_name`,
    `c`.`last_name`,
    `r`.`rental_date`
from
    `sakila`.`customer` as `c`
right join
    `sakila`.`rental` as `r` 
    on `c`.`customer_id` = `r`.`customer_id`
where
    `c`.`customer_id` is null;