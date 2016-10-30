   /**
         * Add a new event
         */
        function add() {
            var range = timeline.getVisibleChartRange();
            
			var newCard = new Card(new Date(document.getElementById("dateContent").value + " 12:00:00"), document.getElementById("txtContent").value);
		
			if ((newCard.start.getTime() < rightCard.start.getTime()) && (newCard.start.getTime() > leftCard.start.getTime())){
				timeline.addItem({
					'start': newCard.start,
					'content': newCard.content
				});
				var count = data.getNumberOfRows();
				timeline.setSelection([{
					'row': count-1
				}]);
				Status.innerHTML="Good!";
			} else {
				Status.innerHTML="Wrong";
			}

			ClearSelections();
        }
		