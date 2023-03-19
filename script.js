//VARIAVEIS
const send = document.getElementById('send');
const mensagem = document.getElementById('mensagem');
const chat = document.getElementById('chat');
const disponível = document.getElementById('disponivel');
const voce = 'Você';
const usuario = 'Cecilia';

//EVENTOS
send.addEventListener('click', enviarMensagem);
disponível.addEventListener('click', mudarstatus);

//FUNCÕES
function enviarMensagem(event) {
  event.preventDefault();

  const conteudoChat = chat.value.trim();
  if (conteudoChat === '') {
    return;
  }

  const novoParagrafo = document.createElement('div');
  novoParagrafo.textContent = conteudoChat;

  const novoHorario = document.createElement('p');
  const dados = new Date();
  const hora = dados.getHours();
  let minutos = dados.getMinutes();
  if (minutos < 10) {
    minutos = `0${minutos}`;
  }
  novoHorario.textContent = `${hora}:${minutos} - ${voce}`;

  mensagem.appendChild(novoHorario);
  mensagem.appendChild(novoParagrafo);
  chat.value = '';

  mensagem.style.padding = '5px';
}

