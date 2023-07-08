window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;  //verifica se o navegador suporta a API de Reconhecimento de Fala padrão (SpeechRecognition) 

const recognition = new SpeechRecognition(); //cria uma nova instância do objeto SpeechRecognition:
recognition.lang = 'pt-BR'; //define o idioma do reconhecimento
recognition.start(); //a função start() é chamada para iniciar o reconhecimento de fala

recognition.addEventListener('result', onSpeak); //adiciona um ouvinte de evento para o evento 'result'

//Quando o evento 'result' é acionado, a função onSpeak 
function onSpeak(event) {
    const transcript = event.results[0][0].transcript;
    document.querySelector('span').innerHTML = transcript
    console.log(transcript)
}