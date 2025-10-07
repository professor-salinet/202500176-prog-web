const txt_login = document.getElementById("txt_login");
const txt_senha = document.getElementById("txt_senha");
const btn_entrar = document.getElementById("btn_entrar");
const btn_limpar = document.getElementById("btn_limpar");
const div_notificacoes = document.getElementById("div_notificacoes");
const frm_login = document.getElementById("frm_login");
const rdg_manter_conectado = document.getElementById("rdg_manter_conectado");
const rdg_salvar_senha = document.getElementById("rdg_salvar_senha");

btn_limpar.addEventListener('click', () => {
    txt_login.value = "";
    txt_senha.value = "";
    rdg_manter_conectado.checked = false;
    rdg_salvar_senha.checked = false;
    div_notificacoes.innerText = "Campos limpos com sucesso.";
    return false;
});

frm_login.addEventListener('submit', async (e) => {
    e.preventDefault();
    return false;
});