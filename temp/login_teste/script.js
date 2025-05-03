document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('form-login');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            // Pega os valores (exemplo)
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            console.log('Tentativa de login:');
            console.log('Usuário:', username);
            // Não logue a senha em produção!
            // console.log('Senha:', password);

            // Aqui você adicionaria a lógica para enviar os dados
            // para o seu backend (usando fetch, axios, etc.)
            // e tratar a resposta (login bem-sucedido ou falha).
            alert('Formulário pronto para envio (ver console). Implemente a lógica de backend.');

        });
    }
});