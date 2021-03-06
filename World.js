let Grid=require('./Grid.js').Grid;
let Vector=require('./Grid.js').Vector;
let BouncingCritter=require('./Utils.js').BouncingCritter;
let Wall=require('./Utils.js').Wall;
let View=require('./View.js').View;
let directions=require('./View.js').directions;


function charFromElement(element){
	if(element==null)
		return " ";
	return element.originalChar;
}
function elementFromChar(legend,char){

	if(char==' ')
		return null;
	let element=new legend[char]();
	element.originalChar=char;
	return element;
}

function World(map,legend){
	/*
	The world object takes a plan and the legend . The legend tells what each character is suppposed to be 
	*/
		let grid=new Grid(map[0].length,map.length);

		
		this.map=map;
		this.legend=legend;
		this.grid=grid;
	

		map.forEach(function(line,y){
			for(var x=0;x<line.length;x++)
				
				grid.set(new Vector(x,y),elementFromChar(legend,line[x]));
		})
}

World.prototype.toString=function(){
	let output='';
	for(let x=0;x<this.grid.width;x++){
		for(let y=0;y<this.grid.height;y++){
			output+=charFromElement(this.grid.get(new Vector(x,y)));
		}
		output+='\n';
	}
	return output;
}

World.prototype.letAct=function(critter,vector){

	let act=critter.act(new View(this,vector));

	if(act &&  act.type=='move')
	{
		let dest=this.checkDestination(act,vector);
		if(dest!=null && this.grid.get(dest)==null){
			this.grid.set(vector,null);
			this.grid.set(dest,critter);
		}
	}

}

World.prototype.checkDestination=function(action,vector){
		if(directions.hasOwnProperty(action.direction)){
			let dest=vector.plus(directions[action.direction]);
				
			if(this.grid.isInside(dest))return dest;
		}
}



World.prototype.turn=function(){
	let acted=[];
	this.grid.forEach(function(critter,vector){
		if(critter.act && acted.indexOf(critter)==-1){
			acted.push(critter);
			this.letAct(critter,vector);
		}
	},this);
	
}

exports.World=World;
exports.elementFromChar=elementFromChar;
exports.charFromElement=charFromElement;
