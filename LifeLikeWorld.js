let Grid=require('./Grid.js').Grid;
let Vector=require('./Grid.js').Vector;
let BouncingCritter=require('./Utils.js').BouncingCritter;
let Wall=require('./Utils.js').Wall;
let View=require('./View.js').View;
let directions=require('./View.js').directions;
let World=require('./World.js').World;
let elementFromChar=require('./World.js').elementFromChar;
let charFromElement=require('./World.js').charFromElement;
let actionTypes=Object.create(null);
actionTypes.grow=function(element){
		element.energy+=0.5;
	return true;
}
actionTypes.move=function(critter, action,vector){
	/*
	Every action must return a boolean stating that whether the action was completed perfectly or not.
	*/

		if(!(this instanceof LifeLikeWorld))
			throw("This method should only be called in the context of LifeLikeWorld");

		let dest=this.checkDestination(action,vector);
		if(dest==null || critter.energy<=1 || this.grid.get(dest)!=null) return false;
		critter.energy-=1;
		this.grid.set(dest,critter);
		this.grid.set(vector,null);
	return true;
	
}

actionTypes.eat=function(critter,action,vector){
	/*checkDestination simply checks whether 
	the destination exists or not . It does not check if the square is empty

	*/

	let dest=this.checkDestination(action,vector);
	let atDest=dest !=null && this.grid.get(dest);
	if(atDest !=null && atDest.energy){
		critter.energy+=atDest.energy;
		this.grid.set(atDest,null);
		return true;
	}

}
actionTypes.prototype.reproduce=function(critter, action ,vector){
	/*
	We first create a baby then query the energy level of the baby. 
	The critter must have twice the energy level of the baby to reproduce . 
	We would also need a valid and an empty destination to give birth to the fucking baby.
	
	*/
		let baby=elementFromChar(this.legend,critter.originalChar);
		let dest=this.checkDestination(action,vector);
		
		if(dest==null || this.grid.get(dest)!=null || critter.energy<=2*baby.energy)
			return false;
		critter.energy-=2*baby.energy;
		this.grid.set(dest,baby);
	return true;

	

	
}


function LifeLikeWorld(map,legend){
	World.call(this,map,legend);
	
}
LifeLikeWorld.prototype=Object.create(World.prototype);
LifeLikeWorld.prototype.letAct=function(critter,vector){
	let action=critter.act(new View(this,vector));
	let handled=action && 
							action.type in actionTypes &&
							action[action.type].call(this,critter,vector);
	
	if(!handled){
		critter.energy=-0.2;
		if(critter.energy<=0)
			this.grid.set(vector,null);
	}
}
exports.LifeLikeWorld=LifeLikeWorld;



