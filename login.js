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
    // return false;
    const login = txt_login.value.trim();
    const senha = txt_senha.value.trim();

    if (login.length == 0) {
        div_notificacoes.innerText = "É necessário digitar um login para continuar!";
        alert("É necessário digitar um login para continuar!");
        txt_login.focus();
        return false;
    }

    if (senha.length == 0) {
        div_notificacoes.innerText = "É necessário digitar uma senha para continuar!";
        alert("É necessário digitar uma senha para continuar!");
        txt_senha.focus();
        return false;
    }

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, senha })
    });

    const result = await response.json();

    if (result.error) {
        div_notificacoes.innerText = result.error;
        alert(result.error);
        return false;
    } else {
        div_notificacoes.innerText = result.message;
        alert(result.message);
        localStorage.setItem('usuario_logado', result.id);
        window.setTimeout(() => {
            window.open('./principal.html', '_self');
        }, 5000);
    }
});