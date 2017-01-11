var canvas
var ctx
var xgl
var ygl

function Tegn(){
	var touchzone=document.getElementById("mycanvas");
	
	touchzone.addEventListener("touchmove", opdaterCanvas, false);
	touchzone.addEventListener("touchend", end, false);
	ctx=touchzone.getContext("2d");
	mycanvas.width=mycanvas.width;
	ctx.fillStyle="yellow";
	ctx.fillRect(0,0,mycanvas.width, mycanvas.height);
}
	
function end(e){
	e.preventDefault();
}

function opdaterCanvas(){

var x=event.touches[0].pageX;
var y=event.touches[0].pageY;

//ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();
	
}
