




window.onscroll = function(){
	//滚动条都打一定距离listfixed出现
	//获取滚动条的高度
	var xT = document.documentElement.scrollTop || document.body.sctollTop;

	var oListFixed = document.getElementsByClassName('listFixed')[0];

	if(xT >= 700){
		oListFixed.style.display = "block";
		$("listFixed1-1").style.background = "#c84213";
		
	}else{
		oListFixed.style.display = "none";
		$("listFixed1-1").style.background = "#7b7171";
	}
	/*$("listFixed1-1").onmousemove = function(){
		$("listFixed1-1").style.background = "#c84213";
	}
	
		if(this.xT>=700){
			$("listFixed1-1").style.background = "#c84213";
		}else{
			$("listFixed1-1").onmouseout = function(){
				$("listFixed1-1").style.background = "#7b7171";
			}
		}*/
		
	




	//滚动条到一定距离背景色变化
	if(xT >= 1180){
		$("listFixed1-2").style.background = "#c84213";
		$("listFixed1-1").style.background = "#7b7171";
	}else{
		$("listFixed1-2").style.background = "#7b7171";
	}
	/*$("listFixed1-2").onmousemove = function(){
		$("listFixed1-2").style.background = "#c84213";
	}
	$("listFixed1-2").onmouseout = function(){
		$("listFixed1-2").style.background = "#7b7171";
	}
*/

	if(xT >= 1706){
		$("listFixed1-2").style.background = "#7b7171";
		$("listFixed1-1").style.background = "#7b7171";
		$("listFixed1-3").style.background = "#c84213";
	}else{
		$("listFixed1-3").style.background = "#7b7171";
	}
	/*$("listFixed1-3").onmousemove = function(){
		$("listFixed1-3").style.background = "#c84213";
	}
	$("listFixed1-3").onmouseout = function(){
		$("listFixed1-3").style.background = "#7b7171";
	}*/



	if(xT >= 1986){
		$("listFixed1-2").style.background = "#7b7171";
		$("listFixed1-1").style.background = "#7b7171";
		$("listFixed1-3").style.background = "#7b7171";
		$("listFixed1-4").style.background = "#c84213";
	}else{
		$("listFixed1-4").style.background = "#7b7171";
	}
	/*$("listFixed1-4").onmousemove = function(){
		$("listFixed1-4").style.background = "#c84213";
	}
	$("listFixed1-4").onmouseout = function(){
		$("listFixed1-4").style.background = "#7b7171";
	}*/



	if(xT >= 2294){
		$("listFixed1-2").style.background = "#7b7171";
		$("listFixed1-1").style.background = "#7b7171";
		$("listFixed1-3").style.background = "#7b7171";
		$("listFixed1-4").style.background = "#7b7171";
		$("listFixed1-5").style.background = "#c84213";
	}else{
		$("listFixed1-5").style.background = "#7b7171";
	}
	/*$("listFixed1-5").onmousemove = function(){
		$("listFixed1-5").style.background = "#c84213";
	}
	$("listFixed1-5").onmouseout = function(){
		$("listFixed1-5").style.background = "#7b7171";
	}*/



	if(xT >= 2912){
		$("listFixed1-2").style.background = "#7b7171";
		$("listFixed1-1").style.background = "#7b7171";
		$("listFixed1-3").style.background = "#7b7171";
		$("listFixed1-4").style.background = "#7b7171";
		$("listFixed1-5").style.background = "#7b7171";
		$("listFixed1-6").style.background = "#c84213";
	}else{
		$("listFixed1-6").style.background = "#7b7171";
	}
	/*$("listFixed1-6").onmousemove = function(){
		$("listFixed1-6").style.background = "#c84213";
	}
	$("listFixed1-6").onmouseout = function(){
		$("listFixed1-6").style.background = "#7b7171";
	}*/




	if(xT >= 3192){
		$("listFixed1-2").style.background = "#7b7171";
		$("listFixed1-1").style.background = "#7b7171";
		$("listFixed1-3").style.background = "#7b7171";
		$("listFixed1-4").style.background = "#7b7171";
		$("listFixed1-5").style.background = "#7b7171";
		$("listFixed1-6").style.background = "#7b7171";
		$("listFixed1-7").style.background = "#c84213";
	}else{
		$("listFixed1-7").style.background = "#7b7171";
	}
/*	$("listFixed1-7").onmousemove = function(){
		$("listFixed1-7").style.background = "#c84213";
	}
	$("listFixed1-7").onmouseout = function(){
		$("listFixed1-7").style.background = "#7b7171";
	}*/



	if(xT >= 3611){
		$("listFixed1-2").style.background = "#7b7171";
		$("listFixed1-1").style.background = "#7b7171";
		$("listFixed1-3").style.background = "#7b7171";
		$("listFixed1-4").style.background = "#7b7171";
		$("listFixed1-5").style.background = "#7b7171";
		$("listFixed1-6").style.background = "#7b7171";
		$("listFixed1-7").style.background = "#7b7171";
		$("listFixed1-8").style.background = "#c84213";
	}else{
		$("listFixed1-8").style.background = "#7b7171";
	}
	/*$("listFixed1-8").onmousemove = function(){
		$("listFixed1-8").style.background = "#c84213";
	}
	$("listFixed1-8").onmouseout = function(){
		$("listFixed1-8").style.background = "#7b7171";
	}*/


}










/*
function mj(){

    //划过的时候出现变化
        $(".mj-1").children().bind("mouseenter",function(){
            $(this).css({visibility:"hidden"}).siblings().css({visibility:"visible"});
            $(".mj-2").children().eq($(this).index()).css({visibility:"visible"}).siblings().css({visibility:"hidden"})
        })

        $(".mj-2").children().bind("mouseleave",function(){
            $(this).css({visibility:"hidden"})
            $(".mj-1").children().eq($(this).index()).css({visibility:"visible"})
        })
    //如果滚动条的高度大于1320px时候，mj-2的第一个孩子出现
        if (st>1320) {
            $(".mj-2").children().eq(0).css({visibility:"visible"})
            //第二个孩子不论是否“划过”都不变
            $(".mj-1").children().bind("mouseenter",function(){
                $(".mj-2").children().eq($(this).index()).css({visibility:"visible"}).siblings().css({visibility:"hidden"})
                $(".mj-2").children().eq(0).css({visibility:"visible"});
            })
            $(".mj-2").children().bind("mouseleave",function(){
                $(".mj-2").children().eq(0).css({visibility:"visible"});
                $(".mj-2").children().eq(1).css({visibility:"hidden"});
            })
        }else{
            $(".mj-2").children().eq(0).css({visibility:"hidden"})
        }


        //如果滚动条的高度大于2610px时候，mj-2第二个孩子出现
        if (st>1960) {
            //第一个孩子还原
            $(".mj-2").children().eq(0).css({visibility:"hidden"})
            //第二个孩子出现
            $(".mj-2").children().eq(1).css({visibility:"visible"})
            //第二个孩子不论是否“划过”都不变
            $(".mj-1").children().bind("mouseenter",function(){

                $(".mj-2").children().eq($(this).index()).css({visibility:"visible"}).siblings().css({visibility:"hidden"})
                $(".mj-2").children().eq(1).css({visibility:"visible"});
            })
            $(".mj-2").children().bind("mouseleave",function(){
                //离开第二个孩子第二个孩子依然有颜色

                $(this).css({visibility:"hiddden"})
                $(".mj-2").children().eq(0).css({visibility:"hidden"});
                $(".mj-2").children().eq(1).css({visibility:"visible"});
                $(".mj-2").children().eq(2).css({visibility:"hidden"});
            })

        }else{
            $(".mj-2").children().eq(1).css({visibility:"hidden"})
        }



    //如果滚动条的高度大于2600px时候，mj-2第三个孩子出现
        if (st>2600) {
            //第一个孩子还原
            $(".mj-2").children().eq(0).css({visibility:"hidden"})
            //第二个孩子还原
            $(".mj-2").children().eq(1).css({visibility:"hidden"})
            //第二个孩子出现
            $(".mj-2").children().eq(2).css({visibility:"visible"})
            //第二个孩子不论是否“划过”都不变
            $(".mj-1").children().bind("mouseenter",function(){
                $(".mj-2").children().eq($(this).index()).css({visibility:"visible"}).siblings().css({visibility:"hidden"})
                $(".mj-2").children().eq(2).css({visibility:"visible"});
            })
            $(".mj-2").children().bind("mouseleave",function(){

                $(".mj-2").children().eq(0).css({visibility:"hidden"});
                $(".mj-2").children().eq(1).css({visibility:"hidden"});
                $(".mj-2").children().eq(2).css({visibility:"visible"});
                $(".mj-2").children().eq(3).css({visibility:"hidden"});
            })
        }else{
            $(".mj-2").children().eq(2).css({visibility:"hidden"})
        }

    //如果滚动条的高度大于3240px时候，mj-2第三个孩子出现
        if (st>3240) {
            //第一个孩子还原
            $(".mj-2").children().eq(0).css({visibility:"hidden"})
            //第二个孩子还原
            $(".mj-2").children().eq(1).css({visibility:"hidden"})
            //第三个孩子还原
            $(".mj-2").children().eq(2).css({visibility:"hidden"})
            //第四个孩子出现
            $(".mj-2").children().eq(3).css({visibility:"visible"})
            //第二个孩子不论是否“划过”都不变
            $(".mj-1").children().bind("mouseenter",function(){
                $(".mj-2").children().eq($(this).index()).css({visibility:"visible"}).siblings().css({visibility:"hidden"})
                $(".mj-2").children().eq(3).css({visibility:"visible"});
            })
            $(".mj-2").children().bind("mouseleave",function(){

                $(".mj-2").children().eq(0).css({visibility:"hidden"});
                $(".mj-2").children().eq(1).css({visibility:"hidden"});
                $(".mj-2").children().eq(2).css({visibility:"hidden"});
                $(".mj-2").children().eq(3).css({visibility:"visible"});
            })
        }else{
            $(".mj-2").children().eq(3).css({visibility:"hidden"})
        }


}
*/






