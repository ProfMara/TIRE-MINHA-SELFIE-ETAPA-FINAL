var SpeechRecognition = window.webkitSpeechRecognition;
  
var escuta = new SpeechRecognition();

//guarda a referência a caixa de texto em uma variável
var caixaTexto = document.getElementById("caixaTexto"); 

function start(){
    caixaTexto.innerHTML = ""; 
    escuta.start();
} 
 
escuta.onresult = (e)=>{
    var conteudo = e.results[0][0].transcript;
    caixaTexto.innerHTML = conteudo;

}




function falar(){

    var texto = "Tirando sua selfie em 5 segundos";
    var pronuncia = new SpeechSynthesisUtterance(texto);    

    var sintese = window.speechSynthesis;
    sintese.speak(pronuncia);

    
}
 