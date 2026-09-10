# Teste Seu Conhecimento

![Status](https://img.shields.io/badge/status-concluído-green)
![Licença](https://img.shields.io/badge/licença-MIT-blue)


## 📌 Descrição

**Teste Seu Conhecimento** é um jogo de perguntas e respostas sobre conhecimentos gerais, executado diretamente no navegador. A cada partida, dez perguntas são sorteadas de um banco maior, distribuídas entre três níveis de dificuldade. O jogador precisa chegar ao fim das perguntas sem perder todas as vidas, somando o máximo de pontos possível.

🔗 **Jogue aqui:** https://tthaless.github.io/Quiz-de-perguntas-Web/


## 🎮 Funcionalidades

- **Sorteio de perguntas:** cada partida seleciona 3 perguntas fáceis, 4 médias e 3 difíceis de um banco de 30, então duas partidas nunca são iguais.
- **Alternativas embaralhadas:** a ordem das opções é sorteada a cada pergunta, impedindo que o jogador decore posições.
- **Sistema de vidas:** o jogador começa com 5 vidas e perde uma a cada erro.
- **Pontuação por dificuldade:** perguntas fáceis valem 10 pontos, médias 20 e difíceis 30, totalizando 200 pontos em uma partida perfeita.
- **Retorno imediato:** ao responder, a alternativa correta é destacada em verde e a escolha errada em vermelho, junto de uma mensagem explicando o resultado.
- **Telas de vitória e derrota:** o resultado final muda de cor e de imagem conforme o desempenho.
- **Reinício:** ao final da partida, o jogador pode começar de novo com um novo sorteio de perguntas.
- **Layout responsivo:** funciona em computador e celular.


## 📜 Regras do Jogo

1. Cada partida tem 10 perguntas de conhecimentos gerais.
2. O jogador começa com 5 vidas.
3. Cada resposta errada custa uma vida.
4. Cada acerto soma pontos conforme a dificuldade da pergunta.
5. **Vitória:** chegar ao fim das dez perguntas com pelo menos uma vida.
6. **Derrota:** perder as cinco vidas antes de terminar as perguntas.


## 💻 Tecnologias Utilizadas

| Tecnologia | Nome / Versão | Descrição |
| :--- | :--- | :--- |
| **Estrutura** | HTML5 | Marcação das três telas do jogo: início, partida e resultado. |
| **Estilo** | CSS3 | Layout, cores, responsividade e destaque visual das respostas. |
| **Lógica** | JavaScript (ES5) | Manipulação do DOM, tratamento de eventos, sorteio das perguntas e controle do estado da partida. |
| **Publicação** | GitHub Pages | Hospedagem da versão online do jogo. |
| **Editor de Código** | Visual Studio Code | Ferramenta usada para escrever o projeto. |

Nenhuma biblioteca ou framework externo foi utilizado.


## 📂 Estrutura de Pastas

```
/
├── 📂 img/
│   ├── derrota.png       # Imagem exibida na tela de derrota.
│   └── vitoria.webp      # Imagem exibida na tela de vitória.
│
├── 📄 index.html         # Estrutura das telas de início, partida e resultado.
├── 📄 style.css          # Estilos, cores e responsividade.
├── 📄 perguntas.js       # Banco de perguntas separado por dificuldade.
├── 📄 script.js          # Lógica do jogo e controle de estado.
├── 📄 LICENSE            # Licença MIT.
└── 📄 README.md
```


## ⚙️ Como Executar o Projeto

### Pré-requisitos
Apenas um navegador web atualizado. O projeto não usa dependências, servidor ou etapa de build.

### Passos

**Opção 1 - Online**

Acesse o link do GitHub Pages informado acima.

**Opção 2 - Localmente**

1. Clone o repositório
```
git clone https://github.com/SEU-USUARIO/Quiz-de-perguntas-Web.git
cd Quiz-de-perguntas-Web
```

2. Abra o arquivo `index.html` no navegador.


## 📄 Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.



## 📋 Informações da Atividade

```json
{
  "nome": "Teste Seu Conhecimento",
  "descricao": "Jogo de perguntas e respostas de conhecimentos gerais. Cada partida sorteia 10 perguntas de dificuldades diferentes. O jogador tem 5 vidas e ganha pontos conforme a dificuldade de cada acerto.",
  "autor": "Thales Rodrigues Resende",
  "turma": "10A"
}
```
