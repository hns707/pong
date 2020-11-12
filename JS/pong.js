
//Définir les variables du script
/*
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));*/

//Script déplacement de la balle
setInterval(function(){
	
	balle.collision();
    balle.bouge(); 
	
	
	raquetteGauche.bouge(), raquetteGauche.majGCSS(), raquetteGauche.rebondG();
	raquetteDroite.bouge(), raquetteDroite.majDCSS(), raquetteDroite.rebondD();
	
}, 10);

class Terrain{
    constructor($element){
        this.$element=$element
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
}

class Raquette{
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
        this.posx=parseInt($element.css("left"));
        this.posy=parseInt($element.css("top"));
        this.speedy=4;
        this.sensy=1;
	}
	
	bouge(){
		//Collisions terrain
		 if (this.posy > terrain.hauteur - this.hauteur){
			this.sensy = -1;
		 }
		 else if (this.posy < 0){
			 this.sensy = 1;
		 }
		 this.posy = this.posy + this.speedy * this.sensy;
		 
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
				}
		 }
	}
	 
 }

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



//Création d'un terrian + balle + raquettes
let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));
let raquetteGauche=new Raquette($("#rgauche"));
let raquetteDroite=new Raquette($("#rdroite"));

// Position X fixe
raquetteGauche.posx = 20;
raquetteDroite.posx = terrain.largeur - 20 - raquetteDroite.largeur;

console.log(raquetteGauche.hauteur);

// Position et sens de départ de la balle aléatoire
balle.posx = Math.random() * terrain.largeur;
balle.posy = Math.random() * terrain.hauteur;
balle.sensx = balle.sensx * (Math.random() < 0.5) ? -1 : 1;
balle.sensy = balle.sensy * (Math.random() < 0.5) ? -1 : 1;
console.log(terrain);



