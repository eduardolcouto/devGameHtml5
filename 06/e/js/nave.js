var PARA_ACIMA = 0;
var PARA_ABAIXO = 1;
var PARA_DIREITA = 2;
var PARA_ESQUERDA = 3;


function Nave(context,teclado,imagem){
    this.context = context;
    this.teclado = teclado;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
    this.direcao = 1;
    this.energia = 3;
    
    this.disparou = [];
}

Nave.prototype = {
    
    atualizar: function(){
        
        if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0){
            this.x -= this.velocidade;
            this.direcao = PARA_ACIMA;
        }
        
        if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - this.imagem.width){
            this.x += this.velocidade;
            this.direcao = PARA_ACIMA;
        }
        
        if(this.teclado.pressionada(SETA_ACIMA) && this.y >  0){
            this.y -= this.velocidade;
            this.direcao = PARA_ACIMA;
        }
        
        if(this.teclado.pressionada(SETA_ABAIXO) && this.y < this.context.canvas.height - this.imagem.height){
            this.y += this.velocidade;
            this.direcao = PARA_ABAIXO;
        }
        
        if( !this.teclado.pressionada(SETA_ESQUERDA) && 
            !this.teclado.pressionada(SETA_DIREITA) &&
            !this.teclado.pressionada(SETA_ACIMA) &&
            !this.teclado.pressionada(SETA_ABAIXO)
          ){
            this.direcao = PARA_ACIMA;
        }
        
        
    },
    
    desenhar: function(){
        this.context.drawImage(this.imagem,this.x,this.y,this.imagem.width,this.imagem.height);
    },
    
    atirar: function(){
        var t = new Tiro(this.context, this);
        
        t.velocidade = -10;
        
        this.animacao.novoSprite(t);
        this.colisor.novoSprite(t);
    },
    
    retangulosColisao: function(){
        var rets = [
            {
                x: this.x+2,
                y: this.y+19,
                largura: 9,
                altura: 13
            },
            {
                x: this.x+13,
                y: this.y+3,
                largura: 10,
                altura: 33
            },
            {
                x: this.x+25,
                y: this.y+19,
                largura: 9,
                altura: 13
            },
            
        ];
        
        /*var ctx = this.context;
        for (var i in rets){
            ctx.save();
            ctx.strokeStyle = 'yellow';
            ctx.strokeRect(rets[i].x,rets[i].y,rets[i].largura,rets[i].altura);
            ctx.restore();
        }*/
        return rets;
    },
    
    colidiuCom: function(outro){
        
        if(outro instanceof Ovni){
            this.energia--;
            this.animacao.excluirSprite(outro);
            this.colisor.excluirSprite(outro);
            if(this.energia == 0){
                this.animacao.excluirSprite(this);
                this.colisor.excluirSprite(this);
                
                this.animacao.desligar();
                alert("Game Over!!");
            }
            
        }
    },
    
    

}