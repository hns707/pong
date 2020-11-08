//Définir les variables du script

let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));

//Script déplacement de la balle
setInterval(function(){
	// Vitesse de déplacement
    gauche = gauche + 1;
    haut = haut + 0.5;
	// Actualisation du CSS
    $("#balle").css("left",gauche); 
    $("#balle").css("top",haut);

}, 10);