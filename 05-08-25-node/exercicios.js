let idade = 18;
let idadeMinima = 18;
if (idade >= idadeMinima) {
    console.log("ok, pode entrar.");
}
if (idade < idadeMinima) {
    console.log("não foi possível prosseguir, porque você não tem idade suficiente para acessar este site.");
}

let senhaDigitada = "mudar123";
let senhaEntrada = "mudar123";
if (senhaDigitada == senhaEntrada) {
    console.log("ok, senha confere, pode entrar.");
}
if (senhaDigitada != senhaEntrada) {
    console.log("não foi possível prosseguir, porque a senha não confere para acessar este site.");
}

let pesoDigitado = 120;
let pesoMinimo = 120;
if (pesoDigitado >= pesoMinimo) {
    console.log("ok, está apto a realizar a cirurgia bariátrica.");
}
if (pesoDigitado < pesoMinimo) {
    console.log("não foi possível prosseguir, porque o peso não atingiu o mínimo, para continuar com a cirurgia bariátrica.");
}
