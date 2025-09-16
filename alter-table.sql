alter table `senac`.`tbl_login` 
add column `obs` varchar(255) null 
after `senha`;

select * from `senac`.`tbl_login`;