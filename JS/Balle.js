class Balle{
    constructor($element){
        this.$element=$element
        this.largeur=$element.width();
        this.hauteur=$element.height();
        this.posy=parseInt($("#balle").css("top"));
        this.posx=parseInt($("#balle").css("left"));
        this.speedx=4;
        this.speedy=2
        this.sensx=1;
        this.sensy=1;
        this.diametre=15;

    }


    bouge(){
        // Vitesse de déplacement
        this.posx = this.posx + this.speedx * this.sensx;
        this.posy = this.posy + this.speedy * this.sensy;
        // Actualisation du CSS
        $("#balle").css("left",this.posx);
        $("#balle").css("top",this.posy);
		balle.collision();
    }
    collision(){
        // Collisions avec le terrain
        if(this.posx > terrain.largeur - this.diametre){
            this.posx = terrain.largeur - this.diametre;
            this.sensx = -1;
            terrain.$element.addClass("rouge");
            setTimeout(function(){terrain.$element.removeClass("rouge")},1000 );
        }

        else if(this.posx < 0 ){
            this.posx = 0;
            this.sensx = 1;
            terrain.$element.addClass("rouge");
            setTimeout(function(){terrain.$element.removeClass("rouge")},1000);
        }

        else if(this.posy > terrain.hauteur - this.diametre){
            this.posy = terrain.hauteur - this.diametre;
            this.sensy = -1;
            terrain.$element.addClass("vert");
            setTimeout(function(){terrain.$element.removeClass("vert")},100);
        }

        else if(this.posy < 0){
            this.posy = 0;
            this.sensy = 1;
            terrain.$element.addClass("vert");
            setTimeout(function(){terrain.$element.removeClass("vert")},100);
        }


    }
}