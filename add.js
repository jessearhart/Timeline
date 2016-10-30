   /**
         * Add a new event
         */
        function add() {
            // remove this?  var range = timeline.getVisibleChartRange();
            
			if ((inPlayCard.start.getTime() < rightCard.start.getTime()) && (inPlayCard.start.getTime() > leftCard.start.getTime())){
				timeline.addItem({
					'start': inPlayCard.start,
					'content': inPlayCard.content,
					'group': inPlayCard.group
				});
				var count = data.getNumberOfRows();
				timeline.setSelection([{
					'row': count-1
				}]);
				
				var formattedDate = monthNames[inPlayCard.start.getMonth()] + ' ' + inPlayCard.start.getDate() + ", " + inPlayCard.start.getFullYear();  
				Status.innerHTML = formattedDate;
				deck.splice(inPlayCardIndex,1); // remove the card from the deck so we don't try to play it again
				//inPlayCard = GetRandomCardFromDeck(deck);
				//DisplayBlankCard();
				//DisplayCard(inPlayCard);
			} else {
				Status.innerHTML="Wrong! The card is being re-shuffled into the deck.";
				inPlayCard = GetRandomCardFromDeck(deck);
				DisplayBlankCard();
				//DisplayCard(inPlayCard);
				
			}

			//ClearSelections();
        }
		