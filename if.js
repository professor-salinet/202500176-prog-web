/**
 * a linha abaixo declara a variável somente leitura "readline" (que significa "leitura de linha, ou linha de leitura", traduzida do inglês), 
 * cujo valor atribuído (=) é o que será digitado pelo usuário no terminal
 * "require" significa uma requisição, que, neste caso se refere a interação com o usuário via terminal
 * ".createInterface" significa a invocação do método "createInterface" que criará uma "interface" de comunicação com o usuário pelo terminal
 * o conteúdo dentro dos parênteses ({}) - parâmetros, do método "createInterface" significa que os elementos/parâmetros "input" e "output" estão sendo configurados para receberem os respectivos valores 'Qual a sua idade? ' (input/entrada) e "idade" (output/saída), quando a variável for utilizada com o método ".question"
 */
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * a variável "readline" está sendo acionada e invoca o método ".question" (perguntar para o usuário), pelo qual estão sendo enviados dois parâmetros: 'Qual a sua idade? ' e "idade", que é uma declaração simplificada de variável, a qual é utilizada dentro do próprio bloco de códigos {} dela mesmo
 * o algoritmo "if"
 */
readline.question('Qual a sua idade? ', idade => {
  if (parseInt(idade) >= 18) {
    console.log('Acesso liberado!');
  } else {
    console.log('Acesso negado.');
  }
  readline.close();
});