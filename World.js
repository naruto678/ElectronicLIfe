let Grid=require('./Grid.js').Grid;
let Vector=require('./Grid.js').Vector;

function charFromElement(element){
	if(element==null)
		return " ";
	return element.originalChar;
}
function elementFromChar(legend,char){
	if(char==' ')
		return null;
	let element=Object.create(null);
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


World.prototype.forEach=function(f,context){
	for(let x=0;x<this.grid.width;x++){
		for(let y=0;y<this.grid.height;y++)
		{
			let value=this.space[x+this.width*y];
			if(value!=null)
				f.call(context,value,new Vector(x,y));
		}
	}
}



exports.World=World;
exports.elementFromChar=elementFromChar;
exports.charFromElement=charFromElement;
