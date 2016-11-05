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
				for (var i = 0; i < timeline.items.length; i++){
					if (timeline.items[i].start > leftCard.start && timeline.items[i].start < rightCard.start){
					leftCard = null;
					rightCard = null;
					neutralCard = null;
					leftEventText.innerHTML = "No Selection";
					rightEventText.innerHTML = "No Selection";
					leftEventDate.innerHTML = "No Selection";
					rightEventDate.innerHTML = "No Selection";
					Status.innerHTML = "Bad Selection";
					return false;
				}
}
			
				leftEventText.innerHTML = leftCard.content;
				rightEventText.innerHTML = rightCard.content;
				var formattedDate = monthNames[leftCard.start.getMonth()] + ' ' + leftCard.start.getDate() + ", " + leftCard.start.getFullYear();  
				leftEventDate.innerHTML = formattedDate;
				var formattedDate = monthNames[rightCard.start.getMonth()] + ' ' + rightCard.start.getDate() + ", " + rightCard.start.getFullYear();  
				rightEventDate.innerHTML = formattedDate;
			}
		}