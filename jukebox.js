var parseNote = function(noteStr) {
	var i =0;
	var tmpArr = [];
	var indNote = noteStr.split('*');
	if (!indNote[1]) {
		indNote[1] = 1;
	}
	while (indNote[i]) {
		tmpArr.push(indNote[i]);
		i +=1;
	}
//console.log(tmpArr);
	return(tmpArr);
};

var parseSong = function(songStr) {
	var noteArr = songStr.split(" ");
	var tmp2Arr = [];

	for (var i=0; i <noteArr.length; i += 1) {
		var noteObj = new Object;
		var tmp1Arr = [];		

		tmp1Arr = parseNote(noteArr[i]);
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
