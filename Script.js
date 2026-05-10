// Selecionando formulário
const formulario = document.getElementById('formulario');

// Evento de envio do formulário
formulario.addEventListener('submit', function(event) {

    // Impede recarregar a página
    event.preventDefault();

    // Pegando valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Expressão para validar email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validação dos campos
    if (nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos!');
        return;
    }

    // Validação do email
    if (!emailValido.test(email)) {
        alert('Digite um e-mail válido!');
        return;
    }

    // Mensagem de sucesso
    document.getElementById('retorno').innerText =
    'Mensagem enviada com sucesso!';

    // Limpando formulário
    formulario.reset();
});

// Botão de troca de tema
const temaBtn = document.getElementById('temaBtn');

// Evento do botão
temaBtn.addEventListener('click', () => {

    // Adiciona ou remove classe dark
    document.body.classList.toggle('dark');

    // Verifica tema atual
    if (document.body.classList.contains('dark')) {
        temaBtn.innerText = '☀️';
    } else {
        temaBtn.innerText = '🌙';
    }
});