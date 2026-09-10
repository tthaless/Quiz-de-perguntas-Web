//  Estado da partida  ("inicio", "jogando", "fim")
var estado = "inicio";

// Elementos das telas 
var telaInicio = document.getElementById("tela-inicio");
var telaJogo = document.getElementById("tela-jogo");
var telaFim = document.getElementById("tela-fim");

// Botões 
var botaoComecar = document.getElementById("btn-comecar");
var botaoTerminar = document.getElementById("btn-terminar");
var botaoReiniciar = document.getElementById("btn-reiniciar");
var textoPergunta = document.getElementById("pergunta");
var areaAlternativas = document.getElementById("alternativas");
var retorno = document.getElementById("retorno");

// Esconde todas as telas e mostra só a que foi pedida.
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

// Ações do jogo 
  function comecarPartida() {
  estado = "jogando";
  mostrarTela("jogo");
  mostrarPergunta();
}


function terminarPartida() {
  estado = "fim";
  mostrarTela("fim");
  console.log("Estado agora: " + estado);
}

// Pergunta Corrente
var pergunta = {
  enunciado: "Qual é o maior planeta do Sistema Solar?",
  alternativas: ["Júpiter", "Saturno", "Terra", "Netuno"],
  correta: "Júpiter"
};

// Monta a pergunta e os botões na tela
function mostrarPergunta() {
  textoPergunta.textContent = pergunta.enunciado;
  retorno.textContent = "";
  areaAlternativas.innerHTML = "";

  for (var i = 0; i < pergunta.alternativas.length; i++) {
    var botao = document.createElement("button");
    botao.textContent = pergunta.alternativas[i];
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

  var escolha = evento.target.textContent;

  if (escolha === pergunta.correta) {
    retorno.textContent = "Acertou!";
  } else {
    retorno.textContent = "Errou. A resposta certa é " + pergunta.correta + ".";
  }

  // Trava os botões para não responder de novo
  for (var i = 0; i < areaAlternativas.children.length; i++) {
    areaAlternativas.children[i].disabled = true;
  }
}

// Eventos
botaoComecar.addEventListener("click", comecarPartida);
botaoTerminar.addEventListener("click", terminarPartida);
botaoReiniciar.addEventListener("click", comecarPartida);

// Arranque 
mostrarTela("inicio");