function GetRandomCardFromDeck(deck){
	var RandomCard = null;
	inPlayCardIndex = parseInt(Math.random()*(deck.length));
	RandomCard = deck[inPlayCardIndex]; 
	timeline.setSelection([]);
	leftCard = null;
	rightCard = null;
	Status.innerHTML = "";
	Status.style.backgroundColor = "FFFFFF";
	return RandomCard;

}