## Exemplo de FULL JOIN: 

## SELECIONAR O BANCO DE DADOS `sakila`, 
## NÃO NECESSÁRIO, POIS JÁ ESTÁ SENDO INVOCADO 
## ANTES DOS NOMES DAS TABELAS
## use sakila;

## SELECIONAR
select

    ## SELECIONANDO A COLUNA `customer_id` 
    ## DA TABELA `customer`
    `c`.`customer_id`,

    ## SELECIONANDO A COLUNA `first_name` 
    ## DA TABELA `customer`
    `c`.`first_name`,

    ## SELECIONANDO A COLUNA `last_name` 
    ## DA TABELA `customer`
    `c`.`last_name`,

    ## SELECIONANDO A COLUNA `rental_date` 
    ## DA TABELA `rental`
    `r`.`rental_date`

## DE (REMETENTE)
from

    ## "APELIDANDO" A TABELA `customer` 
    ## PARA REFERÊNCIA `c`, AO INVÉS DE TER QUE DIGITAR 
    ## `sakila`.`customer`, APENAS DIGITAR `c`
    `sakila`.`customer` as `c`

## JUNTAR NA CONSULTA E RESERVAR DO LADO ESQUERDO
left join

    ## "APELIDANDO" A TABELA `rental` 
    ## PARA REFERÊNCIA `r`, AO INVÉS DE TER QUE DIGITAR 
    ## `sakila`.`rental`, APENAS DIGITAR `r`
    ## DEFININDO A CLÁUSULA "ON" (IGUAL A UM "WHERE"), 
    ## PARA SELECIONAR APENAS AS COLUNAS `customer_id` 
    ## DAS TABELAS `r` E `c` QUE TIVEREM REFERÊNCIA
    `sakila`.`rental` as `r` 
    on `c`.`customer_id` = `r`.`customer_id`

## AQUI OCORRE O FULL JOIN, 
## MAS NO MYSQL NÃO TEM ESSE COMANDO NATIVO, 
## POR ISSO É NECESSÁRIO UTILIZAR DESTA FORMA
union all

## OUTRO SELECIONAR
select

    ## SELECIONANDO A COLUNA `customer_id` 
    ## DA TABELA `customer`
    `c`.`customer_id`,

    ## SELECIONANDO A COLUNA `first_name` 
    ## DA TABELA `customer`
    `c`.`first_name`,

    ## SELECIONANDO A COLUNA `last_name` 
    ## DA TABELA `customer`
    `c`.`last_name`,

    ## SELECIONANDO A COLUNA `rental_date` 
    ## DA TABELA `rental`
    `r`.`rental_date`

## DE (REMETENTE)
from

    ## "APELIDANDO" A TABELA `customer` 
    ## PARA REFERÊNCIA `c`, AO INVÉS DE TER QUE DIGITAR 
    ## `sakila`.`customer`, APENAS DIGITAR `c`
    `sakila`.`customer` as `c`

## JUNTAR NA CONSULTA E RESERVAR DO LADO DIREITO
right join

    ## "APELIDANDO" A TABELA `rental` 
    ## PARA REFERÊNCIA `r`, AO INVÉS DE TER QUE DIGITAR 
    ## `sakila`.`rental`, APENAS DIGITAR `r`
    ## DEFININDO A CLÁUSULA "ON" (IGUAL A UM "WHERE"), 
    ## PARA SELECIONAR APENAS AS COLUNAS `customer_id` 
    ## DAS TABELAS `r` E `c` QUE TIVEREM REFERÊNCIA
    `sakila`.`rental` as `r` 
    on `c`.`customer_id` = `r`.`customer_id`

## CLÁUSULA "ONDE"
where

    ## SELECIONANDO APENAS A COLUNA `customer_id` 
    ## QUE TIVER REGISTROS NULOS
    `c`.`customer_id` is null;

## Copiar todo o texto desse comentário e colar no 
## mysql workbench (SQL +), depois clicar no raio 
## para executar