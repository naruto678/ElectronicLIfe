function Vector(x,y){
	this.x=x;
	this.y=y;
}

function Grid(width,height){
  this.space=new Array(width*height);
  this.width=width;
  this.height=height;
}
Grid.prototype.get=function(vector){
  return this.space[vector.x+this.width*vector.y];
}
Grid.prototype.set=function(vector, value){
	this.space[vector.x+this.width*vector.y]=value;
}
Grid.prototype.toString=function(){
	return `${this.width} and ${this.height}`;
}
Grid.prototype.forEach=function(f,context){
	for(let x=0;x<this.grid.width;x++){
		for(let y=0;y<this.grid.height;y++)
		{
			let value=this.space[x+this.width*y];
			if(value!=null)
				f.call(context,value,new Vector(x,y));
		}
	}
}
exports.Grid=Grid;
exports.Vector=Vector;
