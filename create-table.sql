create table `senac`.`tbl_login`(
	`id` int auto_increment not null,
    `nome` varchar(255) not null,
    `login` varchar(255) not null,
    `senha` varchar(255) not null,
    primary key (`id`)
);