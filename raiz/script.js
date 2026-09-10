const botao = document.getElementById('btn-teste');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function () {
  mensagem.textContent = 'JavaScript correto';
});