//点击出现电话区域
$("#btnSpan").click(function(){
	$("#WorldDirectories").toggle();
});

var sWorldDirectories1 = document.getElementById('WorldDirectories1');
var lisChildred = sWorldDirectories1.children;




//点击li，附内容给sapn
$("#WorldDirectories1").children().bind("click",function(){
	setTimeout(function(){
		$("#WorldDirectories").css({display:"none"});
	},200);
	
	$("#btnSpan").text($(this).text());
})