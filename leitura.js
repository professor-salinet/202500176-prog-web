const frm_pesquisar = document.getElementById("frm_pesquisar");

const txt_id = document.getElementById("txt_id");
const txt_nome = document.getElementById("txt_nome");
const txt_login = document.getElementById("txt_login");
const txt_pesquisar = document.getElementById("txt_pesquisar");

const btn_pesquisar = document.getElementById("btn_pesquisar");
const btn_limpar = document.getElementById("btn_limpar");

const btn_primeiro = document.getElementById("btn_primeiro");
const btn_anterior = document.getElementById("btn_anterior");
const btn_proximo = document.getElementById("btn_proximo");
const btn_ultimo = document.getElementById("btn_ultimo");

btn_limpar.addEventListener('click', () => {
    txt_pesquisar.value = "";
    txt_pesquisar.focus();
});

frm_pesquisar.addEventListener('submit', async (e) => {
    e.preventDefault();
    const pesquisar = txt_pesquisar.value.trim();

    if (pesquisar.length == 0) {
        notificarNok("É necessário digitar algo para pesquisar!");
        txt_pesquisar.focus();
        return false;
    }

    const response = await fetch('/pesquisar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pesquisar })
    });

    const result = await response.json();

    if (result.error) {
        notificarNok(result.error);
        txt_id.value = "";
        txt_nome.value = "";
        txt_login.value = "";
        return false;
    } else {
        notificarOk(result.message);
        txt_id.value = result.id;
        txt_nome.value = result.nome;
        txt_login.value = result.login;
    }
});

async function carregarCampos() {
    const pesquisar = txt_pesquisar.value.trim();

    const response = await fetch('/atualizacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pesquisar })
    });

    const result = await response.json();

    if (result.error) {
        notificarNok(result.error);
    } else {
        notificarOk(result.message);
        txt_id.value = result.rows[0].id;
        txt_nome.value = result.rows[0].nome;
        txt_login.value = result.rows[0].login;
        // console.log(result.rows);
    }
}

carregarCampos();
txt_pesquisar.focus();