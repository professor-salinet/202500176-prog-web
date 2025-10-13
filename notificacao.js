const div_notificacoes_ok = document.createElement('div');
div_notificacoes_ok.id = "div_notificacoes_ok";
div_notificacoes_ok.classList.add("toast")
div_notificacoes_ok.role = "alert"
div_notificacoes_ok.ariaLive = "assertive";
div_notificacoes_ok.ariaAtomic = "true";
div_notificacoes_ok.dataset.bsDelay = "5000";

const div_toast_header = document.createElement('div');
div_toast_header.classList.add("toast-header");

const strong_me_auto = document.createElement('strong');
strong_me_auto.classList.add("me-auto")
strong_me_auto.innerText = "Notificação Importante";

const small_agora = document.createElement('small');
small_agora.innerText = "agora";

/*<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Fechar"></button>
        </div>

        <div class="toast-body">
            Esta é a sua notificação flutuante fixa em Bootstrap 5.3!
        </div>
    </div>

<div class="alert alert-success" id="div_notificacoes_ok" style="display: none;"></div>
<div class="alert alert-danger" id="div_notificacoes_nok" style="display: none;"></div>*/


function notificarOk(msg) {
    div_notificacoes_nok.style.display = "none";
    div_notificacoes_ok.innerText = msg;
    div_notificacoes_ok.style.display = "block";
}

function notificarNok(msg) {
    div_notificacoes_ok.style.display = "none";
    div_notificacoes_nok.innerText = msg;
    div_notificacoes_nok.style.display = "block";
}
