var linesOfCode = 0;
var autoCode = 0;
var delay = 0;
var generatingCode = false;

function addLines(numLines) {
	linesOfCode += numLines;	
	document.getElementById("linesOfCode").innerHTML=linesOfCode + " ( +"+autoCode+"/"+readableTime(delay)+")";
}

function readableTime(time) {
		if( time == 0 ) {
			return "second";
		} else if ( time >= 86400000 ) {
			return time/86400000 + " days";
		} else if ( time >= 3600000 ) {
			return time/3600000 + " hours";
		} else if ( time >= 60000 ) {
			return time/60000 + " minutes";
		} else {
			return time/1000 + " seconds";
		}
}

function initializeAuto() {
	if( delay != 0 && !generatingCode ) {
		generatingCode = true;
		autoGen();
	}
}

function autoGen() {
	addLines(autoCode);
	setTimeout("autoGen()",delay);
}

function buyGenerator() {
	delay = 30000;
	autoCode = 1;
	buyItem(20);
	initializeAuto();
}

function buyItem(itemCost) {
	if( itemCost < linesOfCode ) {
		linesOfCode -= itemCost;
	}
	document.getElementById("linesOfCode").innerHTML=linesOfCode + " ( +"+autoCode+"/"+readableTime(delay)+")";
}
