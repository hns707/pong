class Joueur{
    constructor($element){
        this.$element=$element
        // TODO this.touchehaut = 'x';
		// TODO this.touchebas = 'x';
		this.score = 0;
    }
	
	addScore(pts){
		
		this.score += pts;
		this.$element.text(this.score);
		
	}
}