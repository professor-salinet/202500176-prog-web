const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Qual a sua idade? ', idade => {
  if (parseInt(idade) >= 18) {
    console.log('Acesso liberado!');
  } else {
    console.log('Acesso negado.');
  }
  readline.close();
});