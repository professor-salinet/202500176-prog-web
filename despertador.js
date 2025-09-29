const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function despertador() {
    console.log("Bem vindo ao despertador!");
    readline.question("Digite a hora (de 0 a 23), depois tecle Enter: ", hora => {
        readline.question("Digite o minuto (de 0 a 59), depois tecle Enter: ", minuto => {
            programarDespertador(parseInt(hora), parseInt(minuto));
        });
    });
}

var data = new Date();
var horaAtual = data.getHours();
var minutoAtual = data.getMinutes();
var segundoAtual = data.getSeconds();
var intervalo;
function programarDespertador(hora, minuto) {
    try {
        intervalo = setInterval(() => {
            data = new Date();
            horaAtual = data.getHours();
            minutoAtual = data.getMinutes();
            segundoAtual = data.getSeconds();
            console.clear();
            console.log("Agora são: " + horaAtual + ":" + minutoAtual + ":" + segundoAtual);
            console.log("O despertador está programado para notificar às: " + hora + ":" + minuto);
            if (parseInt(horaAtual) >= hora) {
                if (parseInt(minutoAtual) >= minuto) {
                    console.log("O despertador está ativo.");
                    perguntarNovamente();
                }
            }
        },1000);
    } catch (error) {
        console.error("Algo de errado não está certo, veja o erro: ", error);
    }
}

function perguntarNovamente() {
    clearInterval(intervalo);
    readline.question("Deseja programar um novo despertador? \n\r [ s ] - sim \n\r [ n ] - não \n\r > ", resposta => {
        if (resposta.toLowerCase() === "s") {
            despertador();
        } else {
            console.log("Obrigado por utilizar o despertador. Até a próxima...");
            readline.close();
        }
    });
}

despertador();