const plan=
["############################",
"#             #  #     o   ##",
"#                           #",
"#             #####         #",
"##      # #      ##         #",
"#        ## # #     #       #",
"# #          ##    #        #",
"# ##       ##               #",
"# #    #     o              #",
"# o     #     o ##        # #",
"#             #             #",
"############################"];
let World = require('./World.js').World;

let legend = {
	'#': 'wall',
	'o': 'bouncing-critter'
};



let world = new World(plan, legend);
console.log(world);
