const send = document.getElementById('send');
const mensagem = document.getElementById('mensagem');
const chat = document.getElementById('chat');
const horarios = document.querySelectorAll('#horario');

const voce = 'Você';
const usuario = 'Cecilia';

send.addEventListener('click', enviarMensagem);

function enviarMensagem(event) {
  event.preventDefault();

  const conteudoChat = chat.value.trim();
  if (conteudoChat === '') {
    return;
  }

  const novoHorario = document.createElement('p');
  const dados = new Date();
  const hora = dados.getHours();
  const minutos = dados.getMinutes();
  novoHorario.textContent = `${hora}:${minutos} - ${voce}`;

  const novoParagrafo = document.createElement('p');
  novoParagrafo.textContent = conteudoChat;

  mensagem.appendChild(novoHorario);
  mensagem.appendChild(novoParagrafo);
  chat.value = '';
}
