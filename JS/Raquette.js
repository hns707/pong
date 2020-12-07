class Raquette{
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
        this.posx=parseInt($element.css("left"));
        this.posy=parseInt($element.css("top"));
        this.speedy=0;
        //this.sensy=1;
    }

    bouge(){
		
		// Touches
        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) { return}
            if (event.key === 'a'){
                raquetteGauche.speedy=-2;
            }else if (event.key === 'q'){
                raquetteGauche.speedy=2;
            }
            if (event.key === 'p'){
                raquetteDroite.speedy=-2;
            }else if (event.key === 'm'){
                raquetteDroite.speedy=2;
            }
            event.preventDefault();
        }, true);

        window.addEventListener("keyup", function (event) {
            if (event.defaultPrevented) { return}
            if (event.key === 'a' || event.key === 'q'){
                raquetteGauche.speedy=0;
            }
                
            if (event.key === 'p' || event.key === 'm'){
                raquetteDroite.speedy=0;
			}
        }, true);
		
        raquetteGauche.posy = raquetteGauche.posy + raquetteGauche.speedy;
		
		
		// Bords du terrain
        if (raquetteGauche.posy > terrain.hauteur - raquetteGauche.hauteur){
            raquetteGauche.posy = terrain.hauteur - raquetteGauche.hauteur;
        }
        else if (raquetteGauche.posy < 0){
            raquetteGauche.posy = 0;
        }

        raquetteDroite.posy = raquetteDroite.posy + raquetteDroite.speedy;
        if (raquetteDroite.posy > terrain.hauteur - raquetteDroite.hauteur){
            raquetteDroite.posy = terrain.hauteur - raquetteDroite.hauteur;
        }
        else if (raquetteDroite.posy < 0){
            raquetteDroite.posy = 0;
        }
		
		raquetteGauche.majGCSS();
		raquetteDroite.majDCSS();
		raquetteGauche.rebondG();
		raquetteDroite.rebondD();
		
    }



    majGCSS(){
        // Actualisation du CSS
        $("#rgauche").css("left",this.posx);
        $("#rgauche").css("top",this.posy);
    }

    majDCSS(){
        // Actualisation du CSS
        $("#rdroite").css("left",this.posx);
        $("#rdroite").css("top",this.posy);
    }

    rebondG(){

        if(this.posx < balle.posx && balle.posx < this.posx + this.largeur){
            if(this.posy <= balle.posy && balle.posy <= this.posy + this.hauteur){
                console.log("bonk G");
                this.$element.addClass("rtouche");
                setTimeout(function(){raquetteGauche.$element.removeClass("rtouche")},100);
                balle.posx += balle.diametre / 2;
                balle.sensx = 1;
				if(balle.speedx < 5){balle.speedx += 1};
				if(balle.speedx < 5){balle.speedy += 0.5};
            }
        }
    }

    rebondD(){

        if(this.posx - balle.diametre < balle.posx && balle.posx < this.posx + this.largeur){
            if(this.posy <= balle.posy && balle.posy <= this.posy + this.hauteur){
                console.log("bonk D");
                this.$element.addClass("rtouche");
                setTimeout(function(){raquetteDroite.$element.removeClass("rtouche")},100);
                balle.posx -= balle.diametre / 2;
                balle.sensx = -1;
				if(balle.speedx < 5){balle.speedx += 1};
				if(balle.speedx < 5){balle.speedy += 0.5};
            }
        }
    }

}
