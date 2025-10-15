console.log(typeof pg_login);

if (!localStorage.getItem('usuario_logado')) {
    if (typeof pg_login == "undefined") {
        notificarNok("Acesso restrito! Necessário realizar o login! Redirecionando...");
        window.setTimeout(() => {
            window.open('./login.html', '_self');
        }, 5000);
    }
} else {
    if (typeof pg_login !== "undefined") {
        notificarOk("Usuário logado com sucesso! Redirecionando...");
        window.setTimeout(() => {
            window.open('./principal.html', '_self');
        }, 5000);
    }
}