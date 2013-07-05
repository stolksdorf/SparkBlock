var symbols = [];

symbols[0]='\u2581';
symbols[1]='\u2582';
symbols[2]='\u2583';
symbols[3]='\u2584';
symbols[4]='\u2585';
symbols[5]='\u2586';
symbols[6]='\u2587';
symbols[7]='\u2588';





$(document).ready(function(){
	var temp = [];

	_.times(20, function(){
		temp.push(_.random(25,200));
	});

	$('.container').html(sparkblock([0,4,5], true));

/*
	$('.container').html(_.reduce(symbols, function(result,symbol){
		return result + symbol;
	}, ""));

*/

});


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

function sparkblock(e,t){var n=['\u2581','\u2582','\u2583','\u2584','\u2585','\u2586','\u2587','\u2588'];if(!(e instanceof Array)){throw"Sparkblock : Data given is not an array"}if(e.length===0){return n[0]}if(e.length===1){return n[n.length-1]}var r="",i=[],s=e[0],o=e[0];if(t===true){r="\u200A"}for(var u=1;u<e.length;u++){if(e[u]>o){o=e[u]}if(e[u]<s){s=e[u]}}for(var u=0;u<e.length;u++){i.push(n[Math.round((e[u]-s)*((n.length-1)/(o-s)))])}return i.join(r)}