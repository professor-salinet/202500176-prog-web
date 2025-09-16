## Exemplo de INNER JOIN:

## SELECIONAR O BANCO DE DADOS `sakila`, 
## NÃO NECESSÁRIO, 
## POIS JÁ ESTÁ SENDO INVOCADO ANTES DOS NOMES 
## DAS TABELAS
## use sakila;

## SELECIONAR
select
    ## "APELIDANDO" A COLUNA `title` 
    ## PARA MOSTRAR `titulo_filme` 
    ## NO NOME DA COLUNA
    `f`.`title` as `titulo_filme`,
   
    ## "APELIDANDO" AS COLUNAS `first_name` 
    ## E `last_name` 
    ## PARA MOSTRAR `nome_completo_ator` 
    ## NO NOME DA COLUNA
    ## CONCATENANDO O NOME E SOBRENOME 
    ## PARA APARECER OS DOIS JUNTOS NA COLUNA 
    ## `nome_completo_ator`
    concat(`a`.`first_name`, ' ', 
    `a`.`last_name`) as `nome_completo_ator`

## DE (REMETENTE)
from

    ## "APELIDANDO" A TABELA `film` 
    ## PARA REFERÊNCIA `f`, 
    ## AO INVÉS DE TER QUE DIGITAR 
    ## `sakila`.`film`, APENAS DIGITAR `f`
    `sakila`.`film` as `f`

## TRAZER PARA DENTRO DA CONSULTA
inner join

    ## "APELIDANDO" A TABELA `film_actor` 
    ## PARA REFERÊNCIA `fa`, 
    ## AO INVÉS DE TER QUE DIGITAR 
    ## `sakila`.`film_actor`, 
    ## APENAS DIGITAR `fa`
    ## DEFININDO A CLÁUSULA "ON" 
    ## (IGUAL A UM "WHERE"), 
    ## PARA SELECIONAR APENAS AS COLUNAS 
    ## `film_id` DAS TABELAS `f` E `fa` 
    ## QUE TIVEREM REFERÊNCIA
    `sakila`.`film_actor` 
    as `fa` on `f`.`film_id` = `fa`.`film_id`

## TRAZER PARA DENTRO DA CONSULTA
inner join

    ## "APELIDANDO" A TABELA `actor` 
    ## PARA REFERÊNCIA `a`, 
    ## AO INVÉS DE TER QUE DIGITAR 
    ## `sakila`.`actor`, APENAS DIGITAR `fa`
    ## DEFININDO A CLÁUSULA "ON" 
    ## (IGUAL A UM "WHERE"), 
    ## PARA SELECIONAR APENAS AS COLUNAS 
    ## `actor_id` DAS TABELAS 
    ## `f` E `a` QUE TIVEREM REFERÊNCIA
    `sakila`.`actor` as `a` 
    on `fa`.`actor_id` = `a`.`actor_id`

## FILTRAR
order by

    ## ORDENAR POR TÍTULO DO FILME E PELO 
    ## NOME COMPLETO DO ATOR
    `f`.`title`, `a`.`first_name`;

## Copiar todo o texto desse comentário e colar no mysql workbench (SQL +), depois clicar no raio para executar