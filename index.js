
const plan=require('./plan.js').plan;


let World = require('./World.js').World;

let legend = {
	'#': 'wall',
	'o': 'bouncing-critter'
};



let world = new World(plan, legend);
console.log(world.toString());
