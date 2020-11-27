
//Définir les variables du script
/*
let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));*/

//Script déplacement de la balle
setInterval(function(){
	
    balle.bouge();
	
	
	raquetteGauche.bouge();
	raquetteDroite.bouge();
	
}, 10);


//Création d'un terrain + balle + raquettes
let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));
let raquetteGauche=new Raquette($("#rgauche"));
let raquetteDroite=new Raquette($("#rdroite"));
let jgauche=new Joueur($("#jgauche"));
let jdroite=new Joueur($("#jdroite"));



// Position X fixe
raquetteGauche.posx = 20;
raquetteDroite.posx = terrain.largeur - 20 - raquetteDroite.largeur;

// Sens de départ de la balle aléatoire
balle.sensx = balle.sensx * (Math.random() < 0.5) ? -1 : 1;
balle.sensy = balle.sensy * (Math.random() < 0.5) ? -1 : 1;




