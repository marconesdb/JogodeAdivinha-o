// script.js

// Variáveis do jogo
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let jogoEncerrado = false;

// Selecionando os elementos
const inputPalpite = document.getElementById('guess');
const botaoEnvio = document.getElementById('submit-guess');
const mensagemResultado = document.getElementById('result-message');
const tentativasTexto = document.getElementById('attempts-left');
const botaoReiniciar = document.getElementById('restart-game');

// Função para verificar o palpite
function verificarPalpite() {
    const palpite = Number(inputPalpite.value);
    
    if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
        mensagemResultado.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }

    tentativasRestantes--;

    if (palpite === numeroAleatorio) {
        mensagemResultado.textContent = 'Parabéns! Você acertou o número!';
        mensagemResultado.style.color = 'green';
        encerrarJogo();
    } else if (palpite < numeroAleatorio) {
        mensagemResultado.textContent = 'O número é maior!';
        mensagemResultado.style.color = '#ff9800';
    } else {
        mensagemResultado.textContent = 'O número é menor!';
        mensagemResultado.style.color = '#ff9800';
    }

    tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (tentativasRestantes === 0) {
        mensagemResultado.textContent = `Fim de jogo! O número era ${numeroAleatorio}.`;
        mensagemResultado.style.color = 'red';
        encerrarJogo();
    }
}

// Função para encerrar o jogo
function encerrarJogo() {
    jogoEncerrado = true;
    inputPalpite.disabled = true;
    botaoEnvio.disabled = true;
    botaoReiniciar.style.display = 'block';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = 10;
    jogoEncerrado = false;

    inputPalpite.disabled = false;
    botaoEnvio.disabled = false;
    inputPalpite.value = '';
    mensagemResultado.textContent = '';
    tentativasTexto.textContent = '';
    botaoReiniciar.style.display = 'none';
}

// Evento de envio de palpite
botaoEnvio.addEventListener('click', verificarPalpite);

// Evento de reiniciar o jogo
botaoReiniciar.addEventListener('click', reiniciarJogo);
