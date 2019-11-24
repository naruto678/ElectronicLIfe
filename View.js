function charFromElement(element){
	if(element==null)
		return ' ';
		return element.orginalChar;
}
var directions={
	'n':new Vector(0,1),
	's':new Vector(0,-1),
	'e':new Vector(1,0),
	'w':new Vector(-1,0),
	'ne':new Vector(1,1),
	'nw': new Vector(-1,1),
	'se': new Vector(1,-1),
	'sw':new Vector(-1,-1)
}

function View(world,vector){
	this.world=world;
	this.vector=vector;

}
View.prototype.look=function(dir){
		if(directions.hasOwnProperty(dir)){		
				let target=this.vector.plus(directions[dir]);
				if(this.world.grid.isInside(target))
					return charFromElement(this.world.grid.get(target));
		}
		return '#';
		
	
}
View.prototype.findAll=function(char){
	let found=[];
	for(dir in directions){
		if(this.look(dir)==char)
			found.push(char);
	}
	return found;
}

View.prototype.randomElement=function(array){
	return array[Math.floor(Math.random()*array.length)];
}

View.prototype.find=function(char){
	let found=this.findAll(char);
	if(found.length==0) return null;
	return this.randomElement(found);
}
