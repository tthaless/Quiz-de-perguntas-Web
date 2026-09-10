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
  console.log("Estado agora: " + estado);
}

function terminarPartida() {
  estado = "fim";
  mostrarTela("fim");
  console.log("Estado agora: " + estado);
}

// Eventos
botaoComecar.addEventListener("click", comecarPartida);
botaoTerminar.addEventListener("click", terminarPartida);
botaoReiniciar.addEventListener("click", comecarPartida);

// Arranque 
mostrarTela("inicio");