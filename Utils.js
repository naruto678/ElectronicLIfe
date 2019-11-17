let directionNames='n e s w ne nw se sw'.split(' ');
function BouncingCritter(){
		this.direction=randomElement(directionNames);
		console.log(`A new critter is being declared`);
}
BouncingCritter.prototype.act=function(view){
	if(view.look(this.direction)!=' ')
		this.direction=view.find(' ') || 's';
	return {'type':'move','direction':this.direction};
}
BouncingCritter.prototype.toString=function(){
	return `C`;
}

function randomElement(array){
	return array[Math.floor(Math.random()*array.length)];
}
function Wall(){
	console.log('A new wall is being declared');
}

exports.BouncingCritter=BouncingCritter;
exports.Wall=Wall;
exports.directionNames=directionNames;