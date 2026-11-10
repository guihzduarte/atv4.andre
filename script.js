const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento body
    body.classList.toggle('dark-mode');

    // Atualiza o texto e o ícone do botão conforme o tema ativo
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Modo Claro';
    } else {
        toggleButton.textContent = '🌙 Modo Escuro';
    }
});

function registrarInteresse(modeloCarro) {
    alert(`Interesse registrado para: ${modeloCarro}! Um consultor entrará em contato.`);
}
