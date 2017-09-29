function waitForEl(i){
	// Defining search driteria
	if (i < 100){
		if($('#seat-initial td[header=2]:visible').get().length == 0){
			setTimeout(waitForEl, 10000, i+1);
			console.log('waiting ' + i);
		}else{
			console.log('loaded');
			var section = $('#seat-initial td[header=2] span').contents().get()[0].nodeValue;
			var row = $('#seat-initial td[header=3] span').contents().get()[0].nodeValue;
			var seat = $('#seat-initial td[header=4] span').contents().get()[0].nodeValue;
			// Defining search criteria. row A-D, 5 seats from center. Change it if you want somethign else
			if (['A','B','C','D'].includes(row) &&
					(section == '104' && parseInt(seat) <=6 || section == '102' && parseInt(seat) >=6)
					){
				alert('Found!');
			}else{
				console.log('bad seat, reloading ' + section + row + seat);
				$('#prev-1').click();
				$('#next-0').click();
				setTimeout(waitForEl, 10000, i+1);
			}
		}
	}
}
waitForEl(0); 
