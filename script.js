//VARIAVEIS
const send = document.getElementById('send');
const mensagem = document.getElementById('mensagem');
const chat = document.getElementById('chat');
const horarios = document.querySelectorAll('#horario');
const disponível = document.getElementById('disponivel');
const voce = 'Você';
const usuario = 'Cecilia';

//EVENTOS

send.addEventListener('click', enviarMensagem);
disponível.addEventListener('click',mudarstatus)

//FUNCÕES
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

function mudarstatus() {
    if (disponível.classList.contains('disponivel')) {
      disponível.classList.remove('disponivel');
      disponível.textContent = 'Ausente';
      disponível.style.color = 'yellow';
    } else {
      disponível.classList.add('disponivel');
      disponível.textContent = 'Disponível';
      disponível.style.color = '#00B37E';
    }
  }
  
  
