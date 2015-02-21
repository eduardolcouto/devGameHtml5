var PARA_DIREITA = 0;
var PARA_ESQUERDA = 1;
function Ovni(context,imagem){
    this.context = context;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
    
    this.direcao = -1;
}

Ovni.prototype = {
    atualizar: function(){
        this.y += this.velocidade;
  
    },
    desenhar: function(){
        
        var ctx = this.context;
        
        ctx.drawImage(this.imagem,this.x, this.y,this.imagem.width,this.imagem.height);
    },
}