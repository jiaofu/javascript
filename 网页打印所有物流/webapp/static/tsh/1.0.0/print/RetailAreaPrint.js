var RetailAreaPrint=(function(){

	
	var initTable=function(goodsObj,byinit,byeach){
	  var strHtml="	";
for(var i=0;i<goodsObj.goods.length;i++){

   var obj=goodsObj.goods[i];
	strHtml +="	<tr class='fortr'> "		; 
	  strHtml +="					<td>"+obj.order_no+"</td> ";
		strHtml +="						 	<td>"+obj.goods_name+"</td> ";
	  strHtml +="							 	<td>"+obj.sku_msg+"</td> ";
		strHtml +="						 	<td name='numbereach'> "+obj.number+"</td> ";
		  	strHtml +="						 	<td>"+obj.goods_unit+"</td>";
		  	
		  	strHtml +="						 	<td >"+obj.shopShortName+"</td> ";
		  	strHtml +="						 	<td>"+obj.buyer_no+"</td>";
		  	
		  	strHtml +="						 	<td>"+obj.member_user_name+"</td> ";
		  	strHtml +="						 	<td >"+obj.member_user_tel+"</td>";
		  	strHtml +="						 	<td>"+obj.logistics_remark+"</td>";
		 strHtml +=" <input type='hidden'  name='pickName' id='pickName' value="+obj.isexit+" >";
			strHtml +="		</tr>";
		

}
printOrder.cloneTab(strHtml,byinit,byeach);

};
	var initTop=function(contextObj,data){
	$(contextObj).find(".initTop [name='send_logistics_number']").html(data.send_logistics_number);
			if(data.logistics_create_time==""){
		data.logistics_create_time=new Date();
	}
	$(contextObj).find(" .initTop [name='logistics_create_time']").html( UtilTool.dateFormat(data.logistics_create_time,"yyyy-MM-dd HH:mm:ss"));
	$(contextObj).find(" .initTop [name='buyer_logistics_address']").html(data.buyer_logistics_address);
	$(contextObj).find(" .initTop [name='buyer_logistics_contact']").html(data.buyer_logistics_contact);
	$(contextObj).find(" .initTop [name='buyer_logistics_tel']").html(data.buyer_logistics_tel);
	$(contextObj).find(" .initTop [name='shopShortName']").html(data.shopShortName);
	$(contextObj).find(".initTop [name='buyer_no']").html(data.buyer_no);
	$(contextObj).find(" .initTop [name='buyers_address']").html(data.buyers_address);
	$(contextObj).find(" .initTop [name='buyers_contact']").html(data.buyers_contact);
	$(contextObj).find(" .initTop [name='buyers_tel']").html(data.buyers_tel);	
   $(contextObj).find("  [name='send_order_no']").html(data.send_order_no);	
      $(contextObj).find("#send_no").html(data.send_no);
};
var initTail=function(contextObj,data){
	
	$(contextObj).find("[name='seller_back_address']").html(data.seller_back_address);
	$(contextObj).find("[name='seller_back_contact']").html(data.seller_back_contact);
	$(contextObj).find("[name='seller_back_tel']").html(data.seller_back_tel);
};

	return {

		initTable:initTable,
		initTail:initTail,
		initTop:initTop
		
	}
})();



$(function(){
	
		var btnPrint= document.getElementById("btnPrint");
	eventUnit.addEvent(btnPrint,'click',function(){UtilTool.addPrintOrder(2);	window.print();},false);
	var data=printOrder.getPrintData();
	if(data==null || data==undefined || data==""){
		
		alert("数据出现问题");
		return ;
	}
	data=printOrder.getListByArea(data);
	printOrder.initbyCouny(data,RetailAreaPrint.initTable,RetailAreaPrint.initTop,RetailAreaPrint.initTail);
	
})


