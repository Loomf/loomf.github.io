var linesOfCode = 0;
var autoCode = 0;
var delay = 0;
var codeGenerators = 0;

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

//TODO: replace with setInterval
function autoGen() {
	addLines(autoCode);
	setTimeout("autoGen()",delay);
}

function calculateAuto() {
	if( codeGenerators > 0 ) {
		delay = 60000;
	}

	//TODO: Have valid values for number of seconds, increment autoCode when not one -- nonlinear progression
	if( (delay/codeGenerators)%1000 == 0 ) {
		autoCode = 1;
		delay = delay/codeGenerators;
	} else {
		autoCode = codeGenerators;
	}
}

function buyGenerator() {
	if( buyItem(20) ) {
		if( codeGenerators == 0 ) {
			autoGen();
		}
		codeGenerators++;
		calculateAuto();
		document.getElementById("linesOfCode").innerHTML=linesOfCode + " ( +"+autoCode+"/"+readableTime(delay)+")";
		document.getElementById("codeGens").innerHTML=codeGenerators;
	}
}

function buyItem(itemCost) {
	if( itemCost <= linesOfCode ) {
		linesOfCode -= itemCost;
		document.getElementById("linesOfCode").innerHTML=linesOfCode + " ( +"+autoCode+"/"+readableTime(delay)+")";
		return true;
	} else {
		return false;
	}
}
