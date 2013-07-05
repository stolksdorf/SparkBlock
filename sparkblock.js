function sparkblock(data, useSeperator){
	var symbols   = ['\u2581','\u2582','\u2583','\u2584','\u2585','\u2586','\u2587','\u2588'];
	if(!(data instanceof Array)){throw 'Sparkblock : Data given is not an array'; }
	if(data.length === 0){ return symbols[0]; }
	if(data.length === 1){ return symbols[symbols.length - 1]; }
	var seperator = '',
		result    = [],
		min       = data[0],
		max       = data[0];
	if(useSeperator === true){seperator = '\u200A';}
	for(var i = 1; i < data.length; i++){
		if(data[i] > max){ max = data[i]; }
		if(data[i] < min){ min = data[i]; }
	}
	for(var i = 0; i < data.length; i++){
		result.push(symbols[Math.round((data[i]-min)*((symbols.length-1)/(max-min)))]);
	}
	return result.join(seperator);
}