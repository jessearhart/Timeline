		function AddSelection(){
			var sel = timeline.getSelection();
            if (sel.length) {
                if (sel[0].row != undefined) {
                    var row = sel[0].row;
                }
            }

			neutralCard = new Card(data.getValue(row, 0), data.getValue(row, 2));
			if(leftCard == null){
				leftCard = neutralCard;
				Status.innerHTML = "left card added";
			}
			else if(leftCard.start.getTime() < neutralCard.start.getTime()){
				rightCard = neutralCard;
				Status.innerHTML = "right card added";
				Status.innerHTML = "Ready!";
			}
			else {
				rightCard = leftCard;
				leftCard = neutralCard;
				Status.innerHTML = "Ready!";
			}

			if(rightCard != null && leftCard != null){
				leftEventText.innerHTML = leftCard.content;
				rightEventText.innerHTML = rightCard.content;
				var formattedDate = monthNames[leftCard.start.getMonth()] + ' ' + leftCard.start.getDate() + ", " + leftCard.start.getFullYear();  
				leftEventDate.innerHTML = formattedDate;
				var formattedDate = monthNames[rightCard.start.getMonth()] + ' ' + rightCard.start.getDate() + ", " + rightCard.start.getFullYear();  
				rightEventDate.innerHTML = formattedDate;
			}
		}