// Códigos de teclas - aqui vão todos os que forem necessários
var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
var ESPACO = 32;

function Teclado(elemento) {
   this.elemento = elemento;

   // Array de teclas pressionadas
   this.pressionadas = [];

   // Array de teclas disparadas
   this.disparadas = [];

   // Funções de disparo registradas
   this.funcoesDisparo = [];

   var teclado = this;

   elemento.addEventListener('keydown', function(evento) {
      var tecla = evento.keyCode;  // Tornando mais legível ;)
      
       document.getElementById("teclei").innerHTML = '<strong>'+evento.keyCode+': </strong>'+evento.keyIdentifier;
      
      teclado.pressionadas[tecla] = true;

      // Disparar somente se for o primeiro keydown da tecla
      if (teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]) {

          teclado.disparadas[tecla] = true;
          teclado.funcoesDisparo[tecla] () ;
      }
   });

   elemento.addEventListener('keyup', function(evento) {
      teclado.pressionadas[evento.keyCode] = false;
      teclado.disparadas[evento.keyCode] = false;
   });
    
    elemento.addEventListener('touchstart',function(evento){
      document.getElementById("teclei").innerHTML = 'toquei a tela'; 
    });
    
    elemento.addEventListener('touchend',function(evento){
      alert('Já não estou tocando mais!!'); 
    });
}
Teclado.prototype = {
   pressionada: function(tecla) {
      return this.pressionadas[tecla];
   },
   disparou: function(tecla, callback) {
      this.funcoesDisparo[tecla] = callback;
   }
}
