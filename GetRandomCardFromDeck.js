function GetRandomCardFromDeck(deck){
	var RandomCard = null;
	inPlayCardIndex = parseInt(Math.random()*(deck.length-1));
	RandomCard = deck[inPlayCardIndex]; 
	return RandomCard;
}