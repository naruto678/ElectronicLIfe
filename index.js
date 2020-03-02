let BouncingCritter=require('./Utils.js').BouncingCritter;
let Wall=require('./Utils').Wall;
let LifeLikeWorld=require('./LifeLikeWorld.js').LifeLikeWorld;

const plan=require('./plan.js').plan;


let World = require('./World.js').World;

let legend = {
	'#': Wall,
	"o": BouncingCritter
};



let world = new World(plan, legend);
for(let i=0;i<5;i++){
	world.turn();
	console.log(world.toString());
}
console.log(Object.keys(world));

let newWorld=new LifeLikeWorld(plan,legend);
