const frm_login = document.getElementById("frm_login");

const txt_nome = document.getElementById("txt_nome");
const txt_login = document.getElementById("txt_login");
const txt_senha = document.getElementById("txt_senha");

const btn_cadastrar = document.getElementById("btn_cadastrar");
const btn_limpar = document.getElementById("btn_limpar");

btn_limpar.addEventListener('click', () => {
    const nome = txt_nome.value.trim();
    const login = txt_login.value.trim();
    const senha = txt_senha.value.trim();

    if (nome.length > 0 || login.length > 0 || senha.length > 0) {
        txt_nome.value = "";
        txt_login.value = "";
        txt_senha.value = "";
        notificarOk("Campos limpos com sucesso.");
    }
});

frm_login.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nome = txt_nome.value.trim();
    const login = txt_login.value.trim();
    const senha = txt_senha.value.trim();

    if (nome.length == 0) {
        notificarNok("É necessário digitar um nome para continuar!");
        txt_nome.focus();
        return false;
    }

    if (login.length == 0) {
        notificarNok("É necessário digitar um login para continuar!");
        txt_login.focus();
        return false;
    }

    if (senha.length == 0) {
        notificarNok("É necessário digitar uma senha para continuar!");
        txt_senha.focus();
        return false;
    }

    const response = await fetch('/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, login, senha })
    });

    const result = await response.json();

    if (result.error) {
        notificarNok(result.error);
        alert(result.error);
        return false;
    } else {
        notificarOk(result.message);
        window.setTimeout(() => {
            window.open('./login.html', '_self');
        }, 5000);
    }
});

txt_nome.focus();