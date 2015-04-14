function Tiro(context, nave){
    this.context = context;
    this.nave = nave;
    
    this.altura = 20;
    this.largura = 4;
        
    this.velocidade = 10;
    
    this.x = nave.x + 18;
    this.y = nave.y - this.altura;
    
    this.cor = 'red';
}

Tiro.prototype = {
    atualizar: function(){
        
        this.y += this.velocidade;
        
        if (this.y < - this.altura){
            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);
        }

    },
    desenhar: function(){
        ctx = this.context;
        
        ctx.save();
        
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        
        ctx.restore();
    },
    retangulosColisao: function(){
        return [{
            x: this.x,
            y: this.y,
            largura: this.largura,
            altura: this.altura
        }]
    },
    colidiuCom: function(outro){},

}