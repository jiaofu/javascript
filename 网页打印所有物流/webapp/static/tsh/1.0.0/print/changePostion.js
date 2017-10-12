var changePostion=(function(){
	 var isShouleMove = false;
	
	var startChange=function(argsparentd,args,fn){
				 var frame =$(argsparentd);
				 	isShouleMove=true;
		$(args).bind('mousedown',function(event){

					var div = $(this);
					var abs_x = event.pageX - div.offset().left;
					var abs_y = event.pageY - div.offset().top;
				var isMove = true;
					$(document).bind('mousemove',function(event) {
						
						if(isMove&& isShouleMove) {
					
							var x = 0;
							if((event.pageX - abs_x) < frame.offset().left) {
								x = frame.offset().left;
							} else if((event.pageX - abs_x) > frame[0].offsetWidth - div.width()+frame.offset().left) {
								x = frame[0].offsetWidth+frame.offset().left - div.width();
							} else {
								x = event.pageX - abs_x;
							}

							var y = 0;
							if((event.pageY - abs_y) < frame.offset().top) {
								y = frame.offset().top;
							} else if((event.pageY - abs_y) > (frame[0].offsetHeight + frame.offset().top - div.height())) {
								y = frame[0].offsetHeight + frame.offset().top - div.height() - 2;
							} else {
								y = event.pageY - abs_y;
							}
							fn($(div),x,y,event);

						}
					})
					
					
			$(document).bind('mouseup',function(){
				isMove = false;
					chagepoint=false;
				//stopChange(argsparentd,args);
				console.log("xxxxxxxx");
			})
				
					})
		
	}
	var stopChange=function(argsparentd,args){
		$(args).unbind('mousedown');
		$(document).unbind('mousemove');
		$(document).unbind('mouseup');
		isShouleMove=false;
	}
	return {
		startChange:startChange,
		stopChange:stopChange
	}
})();
