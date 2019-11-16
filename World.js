const utils=require('./Grid.js');
let Grid=utils.Grid;
let Vector=utils.Vector;

exports.charFromElement=function(element){
	if(element==null)
		return " ";
	return element.originalChar;
}
exports.elementFromChar=function(legend,char){
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
	
		this.map=map;
		this.legend=legend;
		this.grid=new Grid(map[0].length,map.length);
		console.log(this.grid);

		// map.forEach(function(line,y){
		// 	for(let x=0;x<line.length;i++)
		// 		this.grid.set(new Vector(x,y),elementFromChar(legend,line[x]));
		// })
}

World.prototype.toString=function(){
	let output=' ';
	for(let x=0;x<this.grid.width;x++){
		for(let y=0;y<this.grid.height;y++){
			output+=charFromElement(this.grid.get(new Vector(1,1)));
		}
		output+='/n';
	}
	return output;
}



exports.World=World;