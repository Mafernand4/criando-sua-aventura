document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-proximo');
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const passoAtivo = document.querySelector('.passo.ativo');
            passoAtivo.classList.remove('ativo');
            const proximoPasso = document.getElementById(`passo-${botao.getAttribute('data-proximo')}`);
            proximoPasso.classList.add('ativo');
        });
    });
});
