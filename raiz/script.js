// Estado da partida: "inicio", "jogando", "respondido" ou "fim"
var estado = "inicio";

// Telas
var telaInicio = document.getElementById("tela-inicio");
var telaJogo = document.getElementById("tela-jogo");
var telaFim = document.getElementById("tela-fim");

// Elementos da partida
var contador = document.getElementById("contador");
var textoPergunta = document.getElementById("pergunta");
var areaAlternativas = document.getElementById("alternativas");
var retorno = document.getElementById("retorno");
var placar = document.getElementById("placar");
var fimTitulo = document.getElementById("fim-titulo");
var fimPontos = document.getElementById("fim-pontos");
var fimAcertos = document.getElementById("fim-acertos");
var fimMensagem = document.getElementById("fim-mensagem");

// Botões
var botaoComecar = document.getElementById("btn-comecar");
var botaoProxima = document.getElementById("btn-proxima");
var botaoReiniciar = document.getElementById("btn-reiniciar");

// As 10 perguntas sorteadas para a partida atual
var perguntas = [];
// Posição da pergunta atual, de 0 a 9
var indice = 0;
// Pontos e acertos da partida atual
var pontos = 0;
var acertos = 0;


// Esconde todas as telas e mostra só a que foi pedida
function mostrarTela(nome) {
  telaInicio.hidden = true;
  telaJogo.hidden = true;
  telaFim.hidden = true;

  if (nome === "inicio") {
    telaInicio.hidden = false;
  }
  if (nome === "jogo") {
    telaJogo.hidden = false;
  }
  if (nome === "fim") {
    telaFim.hidden = false;
  }
}


// Sorteia uma quantidade de itens de uma lista, sem repetir
function sortear(lista, quantidade) {
  var copia = lista.slice();
  var escolhidos = [];

  for (var i = 0; i < quantidade; i++) {
    var posicao = Math.floor(Math.random() * copia.length);
    escolhidos.push(copia[posicao]);
    copia.splice(posicao, 1);
  }

  return escolhidos;
}

// Define quantos pontos cada pergunta da lista vale
function marcarValor(lista, valor) {
  for (var i = 0; i < lista.length; i++) {
    lista[i].valor = valor;
  }
}


// Monta a lista de 10 perguntas da partida
function montarPartida() {
  var sorteadasFaceis = sortear(faceis, 3);
  var sorteadasMedias = sortear(medias, 4);
  var sorteadasDificeis = sortear(dificeis, 3);

  marcarValor(sorteadasFaceis, 10);
  marcarValor(sorteadasMedias, 20);
  marcarValor(sorteadasDificeis, 30);

  perguntas = [];
  perguntas = perguntas.concat(sorteadasFaceis);
  perguntas = perguntas.concat(sorteadasMedias);
  perguntas = perguntas.concat(sorteadasDificeis);

  indice = 0;
  pontos = 0;
  acertos = 0;
}


// Coloca a pergunta atual na tela
function mostrarPergunta() {
  estado = "jogando";

  var atual = perguntas[indice];

  contador.textContent = "Pergunta " + (indice + 1) + " de " + perguntas.length;
  placar.textContent = "Pontos: " + pontos;
  textoPergunta.textContent = atual.enunciado;
  retorno.textContent = "";
  areaAlternativas.innerHTML = "";
  botaoProxima.hidden = true;

  // Embaralha as alternativas sorteando todas elas
  var opcoes = sortear(atual.alternativas, atual.alternativas.length);

  for (var i = 0; i < opcoes.length; i++) {
    var botao = document.createElement("button");
    botao.textContent = opcoes[i];
    botao.addEventListener("click", responder);
    areaAlternativas.appendChild(botao);
  }
}


// Chamada quando o jogador clica em uma alternativa
function responder(evento) {
  if (estado !== "jogando") {
    return;
  }
  estado = "respondido";

  var atual = perguntas[indice];
  var escolha = evento.target.textContent;

  if (escolha === atual.correta) {
    pontos = pontos + atual.valor;
    acertos = acertos + 1;
    placar.textContent = "Pontos: " + pontos;
    retorno.textContent = "Acertou! +" + atual.valor + " pontos.";
  } else {
    retorno.textContent = "Errou. A resposta certa é " + atual.correta + ".";
  }

  for (var i = 0; i < areaAlternativas.children.length; i++) {
    areaAlternativas.children[i].disabled = true;
  }

  if (indice === perguntas.length - 1) {
    botaoProxima.textContent = "Ver resultado";
  } else {
    botaoProxima.textContent = "Próxima";
  }
  botaoProxima.hidden = false;
}


// Avança para a próxima pergunta ou termina a partida
function proxima() {
  if (estado !== "respondido") {
    return;
  }

  if (indice === perguntas.length - 1) {
    terminarPartida();
    return;
  }

  indice = indice + 1;
  mostrarPergunta();
}


function comecarPartida() {
  montarPartida();
  mostrarTela("jogo");
  mostrarPergunta();
}


function terminarPartida() {
  estado = "fim";

  fimPontos.textContent = pontos + " pontos";
  fimAcertos.textContent = acertos + " acertos de " + perguntas.length;

  if (acertos === perguntas.length) {
    fimTitulo.textContent = "Perfeito!";
    fimMensagem.textContent = "Você acertou todas as perguntas.";
  } else if (acertos >= 7) {
    fimTitulo.textContent = "Muito bem!";
    fimMensagem.textContent = "Faltou pouco para a pontuação máxima.";
  } else if (acertos >= 4) {
    fimTitulo.textContent = "Nada mal";
    fimMensagem.textContent = "Dá para melhorar na próxima partida.";
  } else {
    fimTitulo.textContent = "Fim de jogo";
    fimMensagem.textContent = "Tente de novo, as perguntas mudam a cada partida.";
  }

  mostrarTela("fim");
}


// Eventos
botaoComecar.addEventListener("click", comecarPartida);
botaoProxima.addEventListener("click", proxima);
botaoReiniciar.addEventListener("click", comecarPartida);

// Arranque
mostrarTela("inicio");