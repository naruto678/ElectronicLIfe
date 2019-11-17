let BouncingCritter=require('./Utils.js').BouncingCritter;
let Wall=require('./Utils').Wall;

const plan=require('./plan.js').plan;


let World = require('./World.js').World;

let legend = {
	'#': Wall,
	"o": BouncingCritter
};



let world = new World(plan, legend);
console.log(world.toString());
