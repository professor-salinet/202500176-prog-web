## EXEMPLO DE LEFT JOIN (para encontrar países sem cidades)

## SELECIONAR
(select

    ## SELECIONANDO APENAS OS CAMPOS ABAIXO
    `cy`.`country`,
    `ct`.`city`

## DE (REMETENTE)
from

    ## SELECIONANDO E APELIDANDO A TABELA `country`
    `sakila`.`country` as `cy`

## JUNTANDO A PRÓXIMA CONSULTA À ESQUERDA
left join

    ## SELECIONANDO E APELIDANDO A TABELA `city`
    `sakila`.`city` as `ct`

    ## FILTRANDO PELA COLUNA/CAMPO `country_id`
    on `cy`.`country_id` = `ct`.`country_id`

## CLÁUSULA "ONDE"
where

    ## FILTRANDO A COLUNA `city_id`
    `ct`.`city_id` is null)

## AQUI ACONTECE A "MÁGICA"
## A JUNÇÃO DAS TABELAS SELECIONADAS,
## MENOS OS CAMPOS NULOS
union

## RIGHT JOIN para encontrar cidades sem países (isso não deve ocorrer no Sakila)

## SELECIONAR
(select

    ## SELECIONANDO APENAS OS CAMPOS ABAIXO
    `cy`.`country`,
    `ct`.`city`

## DE (REMETENTE)
from

    ##
    `sakila`.`country` as `cy`

## JUNTANDO A PRÓXIMA CONSULTA À DIREITA
right join

    ## SELECIONANDO E APELIDANDO A TABELA `city`
    `sakila`.`city` as `ct`

    ## SELECIONANDO E FILTRANDO PELA COLUNA/CAMPO `country_id`
    on `cy`.`country_id` = `ct`.`country_id`

## CLÁUSULA "ONDE"
where

    ## FILTRANDO A COLUNA `country_id` NÃO NULA
    `cy`.`country_id` is null)

## LIMITANDO A EXIBIÇÃO DE APENAS 10 REGISTROS
limit 10;

## Copiar todo o texto desse comentário e colar no mysql workbench (SQL +), depois clicar no raio para executar