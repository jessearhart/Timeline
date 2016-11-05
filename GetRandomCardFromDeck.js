function GetRandomCardFromDeck(deck){
	var RandomCard = null;
	inPlayCardIndex = parseInt(Math.random()*(deck.length));
	RandomCard = deck[inPlayCardIndex]; 
	return RandomCard;
}