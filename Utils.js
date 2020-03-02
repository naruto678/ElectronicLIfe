let directionNames='n e s w ne nw se sw'.split(' ');
function BouncingCritter(){
		this.direction=randomElement(directionNames);
		
}
BouncingCritter.prototype.act=function(view){

	
	
	if(view.look(this.direction)!=' ')
		this.direction=view.find(' ') || 's';
	return {'type':'move','direction':this.direction};
}


function randomElement(array){
	return array[Math.floor(Math.random()*array.length)];
}
function Wall(){

}
function Plant{
	this.energy=3+Math.random()*4;
}
Plant.prototype.act=function(view){
	if(energy>=15)
		let space=view.find(' ');
	if(space) return {move: 'reproduce', direction:space};
	if(energy <20) return {move:'grow'};

}






exports.BouncingCritter=BouncingCritter;
exports.Wall=Wall;
exports.directionNames=directionNames;