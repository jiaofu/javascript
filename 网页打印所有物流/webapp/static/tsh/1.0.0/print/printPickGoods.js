var printPickGoods=(function(){

	
	var initTable=function(goodsObj,byinit,byeach){
	  var strHtml="	";
for(var i=0;i<goodsObj.goods.length;i++){

   var obj=goodsObj.goods[i];
	strHtml +="	<tr class='fortr'> "		; 
	  strHtml +="					<td>"+obj.goods_name+"</td> ";
		strHtml +="						 	<td>"+obj.sku_msg+"</td> ";
	  strHtml +="							 	<td>"+obj.goods_bar_code+"</td> ";
		strHtml +="						 	<td name='numbereach'> "+obj.number+"</td> ";
		  	strHtml +="						 	<td>"+obj.goods_unit+"</td>";
		 strHtml +=" <input type='hidden'  name='pickName' id='pickName' value="+obj.isexit+" >";
			strHtml +="		</tr>";
		

}
printOrder.cloneTab(strHtml,byinit,byeach);

};
	var initTop=function(contextObj,data){
		
	$(contextObj).find('span[name=pickTime]').html(UtilTool.dateFormat(new Date(),"yyyy-MM-dd HH:mm:ss"));

};
var initTail=function(contextObj,data){
	

};

	return {

		initTable:initTable,
		initTail:initTail,
		initTop:initTop
		
	}
})();



$(function(){
		
	var btnPrint= document.getElementById("btnPrint");
	eventUnit.addEvent(btnPrint,'click',function(){	window.print();},false);
	var boolisexit=false;
	var data=printOrder.getPrintData();
	if(data==null || data==undefined || data==""){
		
		alert("数据出现问题");
		return ;
	}
	data=printOrder.getListByArea(data);
	
		var arrayGroup = new Array();
	var goods=new Array();
	for(var i=0;i<data.length;i++){
		for(var j=0;j<data[i].goods.length;j++){
			goods.push(data[i].goods[j]);
		}

	}
	var setgoods=new Array();
	for(var i=0;i<goods.length;i++){
		
		for(var j=0;j<setgoods.length;j++){
			if(goods[i].goods_name==setgoods[j].goods_name && goods[i].sku_msg==setgoods[j].sku_msg){
				boolisexit=true;1
				setgoods[j].number=parseInt(setgoods[j].number)+ parseInt(goods[i].number);
			}
		}
	if(!boolisexit){
	 setgoods.push(goods[i]);	
	}
boolisexit=false;
	}
	
	
	data[0].goods=setgoods;
	
	arrayGroup.push(data[0]);

	printOrder.initbyCouny(arrayGroup,printPickGoods.initTable,printPickGoods.initTop,printPickGoods.initTail);
	
})


