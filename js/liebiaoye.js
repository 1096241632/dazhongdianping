

//出现与消失 
var bottomFixed1 = document.getElementById('bottomFixed1'); 
var bottomFixed2 = document.getElementById('bottomFixed2'); 
$("#bottomFixed2").bind("click",function(){
	bufferMove(bottomFixed1,{left:0},function(){},15);
	bufferMove(bottomFixed2,{left:-200},function(){},15);
});


$("#bottomFixed1-1").bind("click",function(){
	bufferMove(bottomFixed1,{left:-1500},function(){},15);
	bufferMove(bottomFixed2,{left:0},function(){},15);
});













