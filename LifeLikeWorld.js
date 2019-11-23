let Grid=require('./Grid.js').Grid;
let Vector=require('./Grid.js').Vector;
let BouncingCritter=require('./Utils.js').BouncingCritter;
let Wall=require('./Utils.js').Wall;
let View=require('./View.js').View;
let directions=require('./View.js').directions;
let World=require('./World.js').World;

let actionTypes=Object.create(null);


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



