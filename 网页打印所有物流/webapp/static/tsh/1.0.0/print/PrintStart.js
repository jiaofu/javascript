var PrintStart=(function(){
 var	openPrinkuaidi=function(detailIds,type){
 	if(detailIds==""){
			alert("无打印订单");
			return;
		}
 	
 			 window.open('print/PrintKuaiDi2.html?detailIds='+detailIds+"&type="+type);
 	
 }
 var openPrintWin=function(detailIds,type,groupby){
 	
 
		if(detailIds==""){
			alert("无打印订单");
		}else{

			
			if(type==1){
				if(groupby==2){
										 window.open('print/BatchAreaPrint.html?detailIds='+detailIds+"&type="+type);
				}else{
										 window.open('print/BatchBuyersPrint.html?detailIds='+detailIds+"&type="+type);
				}
				
			}else{
				
				if(groupby==2){
					 window.open('print/RetailAreaPrint.html?detailIds='+detailIds+"&type="+type);
					
				}else{
					 window.open('print/RetailBuyersPrint.html?detailIds='+detailIds+"&type="+type);
					
				}
			}
			
	

		}
 	
 }
 

 
 return {
 	openPrinkuaidi:openPrinkuaidi,
 	openPrintWin:openPrintWin

 }
	
	
})();
