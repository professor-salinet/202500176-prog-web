select * from `sakila`.`actor`,
`sakila`.`customer`
where `sakila`.`actor`.`first_name` like 'a%'
or `sakila`.`customer`.`first_name` like 'b%';