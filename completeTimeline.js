function completeTimeline(){

	for (var i=0; i < deck.length; i++){
		timeline.addItem({
					'start': deck[i].start,
					'content': deck[i].content,
					'group': deck[i].group
				});
		
	}
	
}