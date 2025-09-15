select
    `f`.`title` as `titulo_filme`,
   
    concat(`a`.`first_name`, ' ', 
    `a`.`last_name`) as `nome_completo_ator`

from

    `sakila`.`film` as `f`

inner join

    `sakila`.`film_actor` as `fa` 
    on `f`.`film_id` = `fa`.`film_id`

inner join

    `sakila`.`actor` as `a` 
    on `fa`.`actor_id` = `a`.`actor_id`

order by

    `f`.`title`, `a`.`first_name`;