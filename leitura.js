const frm_pesquisar = document.getElementById("frm_pesquisar");

const sel_id = document.getElementById("sel_id");
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
        return false;
    } else {
        notificarOk(result.message);
        // Aqui vai preencher os campos somente com o termo pesquisado
    }
});

async function carregarCampos(pesquisa) {
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
        console.log(result.rows);
    }
}

carregarCampos();
txt_pesquisar.focus();