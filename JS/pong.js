
//Définir les variables du script
/*
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));*/

//Script déplacement de la balle
setInterval(function(){

    balle.maj(); 
	
}, 10);

class Terrain{
    constructor($element){
        this.$element=$element
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
}

class Balle{
    constructor($element){
        this.$element=$element
        this.largeur=$element.width();
        this.hauteur=$element.height();
        this.posx=parseInt($("#balle").css("top"));
        this.posy=parseInt($("#balle").css("left"));
        this.speedx=4;
        this.speedy=2
        this.sensx=1;
        this.sensy=1;
        this.diametre=20;

    }
    maj(){
        // Vitesse de déplacement
        this.posx = this.posx + this.speedx * this.sensx;
        this.posy = this.posy + this.speedy * this.sensy;
        // Actualisation du CSS
        $("#balle").css("left",this.posx); 
        $("#balle").css("top",this.posy);
        
        // Collisions
        if(this.posx > terrain.largeur - this.diametre){
            this.posx = terrain.largeur - this.diametre;
            this.sensx = -1;
            terrain.$element.addClass("vert");
            setTimeout(
                function(){
                    terrain.$element.removeClass("vert")
                },100
            );
            
        }
    
        else if(this.posx < 0 ){
            this.posx = 0;
            this.sensx = 1;
            terrain.$element.addClass("vert");
            setTimeout(
                function(){
                    terrain.$element.removeClass("vert")
                },100
            );
        }
    
        else if(this.posy > terrain.hauteur - this.diametre){
            this.posy = terrain.hauteur - this.diametre;
            this.sensy = -1;
            terrain.$element.addClass("vert");
            setTimeout(
                function(){
                    terrain.$element.removeClass("vert")
                },100
            );
        }
    
        else if(this.posy < 0){
            this.posy = 0;
            this.sensy = 1;
            terrain.$element.addClass("vert");
            setTimeout(
                function(){
                    terrain.$element.removeClass("vert")
                },100
            );
        }

        
    }
}

//Création d'un terrian + balle
let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));

// Position et sens de départ de la balle aléatoire
balle.posx = Math.random() * terrain.largeur;
balle.posy = Math.random() * terrain.hauteur;
balle.sensx = balle.sensx * (Math.random() < 0.5) ? -1 : 1;
balle.sensy = balle.sensy * (Math.random() < 0.5) ? -1 : 1;
console.log(terrain);

