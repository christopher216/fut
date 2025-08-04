// Função para verificar a resposta e exibir a mensagem correspondente
function verificarResposta() {
  var resposta = document.getElementById('resposta').value;
  var mensagem = document.getElementById('mensagem');

  // Verifique se a resposta está correta
  if (resposta.toLowerCase() === 'Vasco'.toLowerCase()) {
    mensagem.innerHTML = 'Você acertou!';

    // Aguarde 5 segundos (5000 milissegundos)
    setTimeout(function () {
      window.location.href = 'time.html'; //
    }, 5000);
  } else {
    mensagem.innerHTML = 'Você errou, tenta de novo.';
  }
}