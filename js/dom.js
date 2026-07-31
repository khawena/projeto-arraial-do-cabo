const botaoMenu = document.querySelector('.botao_menu');

const cabecalhoMenu = document.querySelector('.cabecalho_menu');

botaoMenu.addEventListener('click', function () {
    cabecalhoMenu.classList.toggle('aberto');

});