
let legend = {
	'#': Wall,
	"o": BouncingCritter
};

let domSet=false;
let world = new World(plan, legend);

document.getElementById('payload').addEventListener('click',function(){
	world.turn();
	let height=world.grid.height;
	
	let divElement=document.getElementById('bigGuy');
	if(!domSet){
		for(let i=0;i<height;i++)
			{
				let temp=document.createElement('pre');
				temp.setAttribute('id',i);
				divElement.append(temp);
			}
	}
	let output=world.toString();
	divElement.childNodes.forEach(function(node){
		node.innerText=output.shift();
	});
	domSet=true;


});
