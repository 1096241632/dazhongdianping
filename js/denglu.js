
/*function $(id){
	return document.getElementById(id);
}*/
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










// 当点击img时，切换登陆页面
$("#disembark2-1").bind("click",function(){
	$("#disembark2-0").css({display:"none"});
	$("#qiehuan").css({display:"block"});
});

// console.log($("#qiehuan1-1"))
$("#qiehuan1-1").click(function(){
	// console.log(1)
	$("#disembark2-0").css({display:"block"});
	$("#qiehuan").css({display:"none"});
});






// 点击切换下划线
$("#qiehuan1-3").children().eq(0).bind("click",function(){
	$(".underline").css({left:"23px",width:"131px"});
	$("#qiehuan1").css({display:"block"});
	$("#qiehuan2").css({display:"none"});
});

$("#qiehuan1-3").children().eq(1).bind("click",function(){
	$(".underline").css({width:"114px",left:"153px"});
	$("#qiehuan1").css({display:"none"});
	$("#qiehuan2").css({display:"block"});
});








