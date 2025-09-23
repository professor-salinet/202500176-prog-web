const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular () {
    readline.question("Digite o primeiro número, depois tecle Enter: ", numeroum => {
        readline.question("Digite o segundo número, depois tecle Enter: ", numerodois => {
            readline.question("Digite apenas uma opção abaixo e tecle Enter: \n\r [ 1 ] - Somar \n\r [ 2 ] - Subtrair \n\r [ 3 ] - Dividir \n\r [ 4 ] - Multiplicar \n\r > ", numerotres => {
                switch (parseInt(numerotres)) {
                    case 1:
                        console.log("A soma é: ", parseInt(numeroum) + parseInt(numerodois));
                        break;
                    case 2:
                        console.log("A subtração é: ", parseInt(numeroum) - parseInt(numerodois));
                        break;
                    case 3:
                        console.log("A divisão é: ", parseInt(numeroum) / parseInt(numerodois));
                        break;
                    case 4:
                        console.log("A multiplicação é: ", parseInt(numeroum) * parseInt(numerodois));
                        break;
                    default:
                        console.log("Opção inválida! Tente novamente.");
                        break;
                }
                // readline.close();
                perguntarNovamente();
            });
        });
    });
}

function perguntarNovamente() {
    readline.question("Deseja realizar outro cálculo? \n\r [ s ] - sim \n\r [ n ] - não \n\r > ", resposta => {
        if (resposta.toLowerCase() === "s") {
            calcular();
        } else {
            console.log("Obrigado por utilizar a calculadora. Até a próxima...");
            readline.close();
        }
    });
}

calcular();