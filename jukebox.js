var parseNote = function(noteStr) {
	var noteArr = noteStr.split('*');
	if (noteArr[1]===undefined) {
		noteArr[1] = 1;
	}
//	console.log(noteArr);
	return(noteArr);
};

var parseSong = function(songStr) {
	var songArr = songStr.split(" ");
	var tmp2Arr = [];

	for (var i=0; i <songArr.length; i += 1) {
		var noteObj = new Object;
		var tmp1Arr = [];		

		tmp1Arr = parseNote(songArr[i]);
		noteObj["pitch"] = tmp1Arr[0];
		noteObj["beats"] = tmp1Arr[1];	
		tmp2Arr.push(noteObj);
	}
console.log(tmp2Arr);
	return tmp2Arr;
};

//playSong(parseSong("C#*5 A*1 D*2"), 400, alert("finished!"));
//playSong( [{pitch: 'A', beats: 1}, {pitch: 'C#', beats: 2}, {pitch: 'D', beats: 4}], 400, myAlert);


var getSong = function() {
	var songStr = prompt("Please enter a song string");
	if (songStr=="" || songStr==null) {
		return;
	}
	playSong(parseSong(songStr), 400, getSong );
};

getSong();
