function $(id){
	return document.getElementById(id);
}

// banner轮播图
	//图片的下标
	var nums = 0;
	var btnss = $("MoveDots").children;
	//鼠标划入显示效果
	$("slideshow").onmouseover = function(){
		$("seamless").style.display = "block";

		clearInterval(myTimer);
				
		//右键鼠标点击事件
		$("seamlessRight").onclick = function(){
			rightClick();
		}

		//左键鼠标点击事件
		$("seamlessLeft").onclick = function(){
			nums--;
			//console.log(nums);
			if(nums < 0){
				nums = $("slideshow1").children.length-1;
				$("slideshow1").style.left = -($("slideshow1").children.length-1) * 770 +"px";
			}
			bufferMove($("slideshow1"),{left:-nums*770});

			//底部小圆圈
			for(var j=0;j<btnss.length;j++){
				btnss[j].className = "";
			}
			btnss[nums].className = "MoveDots1";			
		}

		//让底部小圆圈和左右按钮对应		
		for(var i=0;i<btnss.length;i++){
			btnss[i].index = i;
			btnss[i].onmouseover = function(){
				nums = this.index;
				bufferMove($("slideshow1"),{left:-nums*770});
				for(var j=0;j<btnss.length;j++){
					btnss[j].className = "";
				}
				btnss[this.index].className = "MoveDots1";
			}
		}
	}

	//鼠标划出消失效果
	$("slideshow").onmouseout = function(){
		$("seamless").style.display = "none";
		clearInterval(myTimer);
		myTimer = setInterval( function(){
			rightClick();
		},3000);
	}

	//定时器
	var myTimer = null;
	//定时器
	clearInterval(myTimer);
	myTimer = setInterval( function(){
		rightClick();
	},3000);

	function rightClick(){
		nums++;
		//console.log(nums);
		if(nums > $("slideshow1").children.length-1){
			nums = 1;
			$("slideshow1").style.left = "0px";
		}
		bufferMove($("slideshow1"),{left:-nums*770});

		//底部小圆圈
		for(var j=0; j<btnss.length; j++){
			btnss[j].className = "";
		}
		if(nums >= 5){
			btnss[0].className = "MoveDots1";
		}else{
			btnss[nums].className = "MoveDots1";
		}		
	}








