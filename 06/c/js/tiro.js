function Tiro(context, nave){
    this.context = context;
    this.nave = nave;
    
    this.altura = 20;
    this.largura = 4;
    
    this.x = nave.x + (nave.imagem.width / 2)  - this.largura / 2;
    this.y = nave.y - this.altura;
    this.velocidade = nave.velocidade + 5;
    this.cor = 'red';
}

Tiro.prototype = {
    atualizar: function(){
        this.y -= this.velocidade;
    },
    desenhar: function(){
        ctx = this.context;
        
        ctx.save();
        
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
        
        ctx.restore();
    },
}