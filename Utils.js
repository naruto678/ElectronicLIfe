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
