function drawTree(h) {

	for (var i = 1 ; i <= h; i++) {
		var star = '*';
		var space = '';
		for (var j = h; j > i; j--) {
			space +=' ';	
		}
		for (var j = 1; j < i; j++) {
			star += '**'
		}
		document.write(space, '<br/>', star);
		console.log(space, star);
	}
}

drawTree(23);