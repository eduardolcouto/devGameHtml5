function Tiro(context, nave){
    this.context = context;
    this.nave = nave;
    
    this.altura = 20;
    this.largura = 4;
        
    this.velocidade = 0;
    
    if (this.nave.direcao == PARA_ACIMA){
        this.x = nave.x + (nave.imagem.width / 2)  - this.largura / 2;
        this.y = nave.y - this.altura;
    }
    
    if (this.nave.direcao == PARA_ABAIXO){
        this.x = nave.x + (nave.imagem.width / 2)  - this.largura / 2;
        this.y = nave.y + this.nave.imagem.height;
    }
    
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