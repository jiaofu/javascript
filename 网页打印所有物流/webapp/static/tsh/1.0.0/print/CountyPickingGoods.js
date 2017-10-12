

    $(function(){
    	 var types=UtilTool.getHtmlParams("types");

    	var orderNos=UtilTool.getHtmlParams("orderNos");

   
   
   			var params={};
			    params['orderNoList']= orderNos;//订单编号列表
			    params['types']=types;//订单类型：2表批发，其他表零售
			var jsonData;
			var url="../../../order/getAreaPickOrderListForPrint.do";
			/*异步请求加载数据*/
               $.ajax({
                        type:"get",
                        dataType:"json",
                        url:url,
                        data:params,
                        cache:false,
                        async: false,
                        success:function(data){
                   
           			       		 $('span[name=pickTime]').html(UtilTool.dateFormat(new Date(),"yyyy-MM-dd HH:mm:ss"));
           			       		 var datalist=new Array();
           			       		 for(var i=0;i<data.goodsList.length;i++){
           			       		 	datalist.push(data.goodsList[i]);
           			       		 }
           			       		 
           			       		 printOrder.initbyCouny(datalist,initTable,initTop,initTail);
                         },
		                 error:function(){},		  
		  
            });
   
       
       
    });
    
function initbyCouny(){
	
}
function initTop(){
	
}
function initTail(){
	
}

function initTable(goodsObj,byinit,byeach){
  	  var strHtml="	";
  for(var i=0;i<goodsObj.areaPickOrder.length;i++){

   var obj=goodsObj.areaPickOrder[i];
  	strHtml +="	<tr class='fortr'> "		; 
  	strHtml +="				 	<td>"+(i+1)+"</td> ";
	  strHtml +="					<td>"+obj.buyer_logistics_contact+"</td> ";
		strHtml +="						 	<td>"+obj.buyer_logistics_tel+"</td> ";
	  strHtml +="							 	<td>"+obj.buyer_logistics_address+"</td> ";
		strHtml +="						 	<td>"+obj.goodsName+"</td> ";
		  	strHtml +="						 	<td>"+obj.goodSku+"</td>";
		  	strHtml +="						 	<td>"+obj.goodCode+"</td> ";
		  	strHtml +="						 	<td name='numbereach'>"+obj.number+"</td>";
		  	strHtml +="						 	<td>"+obj.unit+"</td>";
		 strHtml +=" <input type='hidden'  name='pickName' id='pickName' value="+goodsObj.areaName+" >";
			strHtml +="		</tr>";
		

  }
cloneTab(strHtml,byinit,byeach);
}
function cloneTab(strHtml,byinit,byeach){
	var getlno= $(byinit).find(".lno");
		getlno.find("#aftertr").after(strHtml);
	$("#printDiv").append(getlno.prop("outerHTML"));
 var byinitname= 	getlno.attr("name");
  var lno=$(".lno[name='"+byinitname+"']");
	

	 var tbottomoffsetTop=lno.height();



  var alltr= $(lno).find(".fortr")

  if(alltr.length<1){
  	alert("没有任何数据");
  }
  //alert(alltr[17].offsetTop);
  var tbodyoffserTop=lno.find(".tbody")[0].offsetTop+20;
  
 // alert(lno.find(".tbody")[0].offsetTop)
    var lasttrheight=  lno.find("#lasttr").height()+2;
 var  lastspanheight= lno.find("#lastspan").height()+10;
 var aftertrheight=lno.find("#aftertr").height()+2;
		var toptable=0;
		var pagesize=1;
		var firstgetone=0;

var betweentr= tbottomoffsetTop-tbodyoffserTop-lasttrheight-lastspanheight-aftertrheight;
	//	alert(alltr[17].offsetTop);
		//alert($(alltr[17]).height());
   //alert($(".lno")[0].offsetTop)
   var getsizetr=1;
  for(var i=0;i<alltr.length ;i++){
toptable = toptable +$(alltr[i]).height()+1;

  
     if(toptable>=betweentr){
   		getsizetr++;
     	var  strCloneHtml="";
     	 var lonClone=  byeach.clone();
     	 for(var j=firstgetone;j<=i;j++){
    
     	 	  strCloneHtml +=$(alltr[j]).prop("outerHTML");
     	 }
     	 if(strCloneHtml !=""){
     	 	 lonClone.find("#aftertr").after(strCloneHtml);
     	  $("#printDiv").append(lonClone.html());
     		firstgetone=i;
				toptable=0;
     	 }
     	
     }
  }
  
  if(firstgetone <alltr.length){
  	var  strCloneHtml="";
  	var lonClone=  byeach.clone();
  	for(var  i=firstgetone;i<alltr.length;i++){
  		strCloneHtml +=$(alltr[i]).prop("outerHTML");
  	}
  	   lonClone.find("#aftertr").after(strCloneHtml);
     $("#printDiv").append(lonClone.html());
  }
  	 lno.remove();


}

  
  


