 var isdefauledata="";
 var listdata=new Array();
 var comboxs=new Array();
 var chagepoint=false;
 var getuserdata="";
var PrintKuaiDi=(function(){
	var ExpressBill=function(data){
		var billHmtl="";
 		var firstclone=	$(".first").first().clone();
		for(var i=0;i<data.length;i++){
						
		var first=firstclone.clone();
		for(var v in  isdefauledata){
			if(typeof(isdefauledata[v])=="object" && isdefauledata[v]["isexit"]==1){
			
			$(first).find("[name='"+v+"']").html(isdefauledata[v]["name"] +":"+data[i][v])
			}
		}
		billHmtl +=	$(first).prop("outerHTML");
		}
		$(".first").last().after(billHmtl);
		$(".first").first().remove();
		
		removeClass();

		
	}
	
	var removeClass=function(){
		var firstclose= $(".first").find(".examplediv");
	
	for(var i=0;i<firstclose.length;i++){
		
		$(firstclose[i]).find(".close").remove();
		$(firstclose[i]).css({
			'border':'0px solid blue'
		})
		
	}
		
	}
	
	var readprintCss=function(iframe){
			 var doc=	iframe[0].contentWindow.document;
			 
			 UtilTool.addPrintOrder(3);
			 doc.writeln(' <link rel="stylesheet"   type="text/css" href="../../../static/tsh/1.0.0/print/printCss.css" />');
			doc.writeln('	 <link rel="stylesheet" type="text/css" href="../../../static/tsh/1.0.0/print/toolClose.css"    />');
	doc.writeln('		 <link rel="stylesheet" href="../../../static/tsh/1.0.0/themes/default/main.css" /> ');

	doc.close();
	}
	
	var printdiv=function(iframe, divhtml){
		

		
			 var doc=	iframe[0].contentWindow.document;
			 $(doc).find("div").remove();
			 $(doc).find("body").append(divhtml);

	iframe[0].contentWindow.focus();
       
   	iframe[0].contentWindow.print();

	}
	var setDataforPrint=function(data){
		for(var i=0;i<data.length;i++){
			if(data[i].buyers_remark==""){
				data[i].buyers_remark="无";
			}
			data[i].datatime=UtilTool.dateFormat(new Date(),"yyyy-MM-dd HH:mm:ss");
			data[i].goodsdetail="";
			for( var j=0;j<data[i].goods.length;j++){
					data[i].goodsdetail += ("名称:"+data[i].goods[j].goods_name + "规格"+ data[i].goods[j].sku_msg + "数量"+ data[i].goods[j].number +"   ");
			}
			
		}
		return data;
		
	}
		
	
	return {
		ExpressBill:ExpressBill,
		printdiv:printdiv,
		removeClass:removeClass,
		readprintCss:readprintCss,
		setDataforPrint:setDataforPrint
	}
	
})();




$(function(){
	

	var data=printOrder.getPrintData();
	if(data==null || data==undefined || data==""){
		
		alert("数据出现问题");
		return ;
	}
	var  offsetData=getoffsetdata();
	
	data=printOrder.getListByBuyers(data);
	data= PrintKuaiDi.setDataforPrint(data);
	setOffset(offsetData);	
	getuserdata=data;
	PrintKuaiDi.ExpressBill(data);
	PrintKuaiDi.readprintCss( $("#newiframe"));
	


	
})

function getoffsetdata(){

		
			var sendurl = "../../../print/findprint.do";
			var getdata=objinitData();
			/*异步请求加载数据*/
			$.ajax({
				type: "get",
				dataType: "json",
				url: sendurl,
				data:" ",
				cache: false,
				async: false,
				success: function(data) {
					if(!(data==null || data=="")){
						var arrayidefaule=new Array();
						for(var i=0;i<data.length;i++){
						var isdefaule=	data[i].isdefault;
						if(data[i].jsonposition==null || data[i].jsonposition==undefined){
							continue;
						}
					 var jsonparse=	JSON.parse(data[i].jsonposition);
					 jsonparse.isdefaule=isdefaule;
					 jsonparse.id=data[i].id;
					 arrayidefaule.push(jsonparse);
						
						}
						getdata=arrayidefaule;
						
					}	
				},
				error: function(data) {

				}

			});
		
			return getdata;
	
	
}

function setOffset(data){
	



	listdata.push(moban.yuantong())
	listdata.push(moban.shengtong());
	listdata.push(moban.zhongtong());
	listdata.push(moban.yunda());

	isdefauledata=listdata[0];
	for(var i=0;i<listdata.length;i++){
		comboxs.push(listdata[i].name);
	}

	for(var i=0;i<data.length;i++){
		
		var isexitobj=false;
	
		for(var j=0;j<listdata.length;j++){
			if(data[i].name== listdata[j].name){
				isexitobj =true;
				listdata[j]=data[i];
			
				isdefauledata=data[i];
			
			}
		}
		if(!isexitobj){
			listdata.push(data[i]);
			comboxs.push(data[i].name);
		}
		if(data[i].isdefaule==1){
			isdefauledata=data[i];	
		}
		
		
	}
	for(var z=0;z<comboxs.length;z++){
		if(comboxs[z]==isdefauledata.name){
		    comboxs.splice(z,1);
			comboxs.unshift(isdefauledata.name);
		}
	}
	

	setprintKuaiDi.chagePostion(isdefauledata,$(".first"));
	
	setprintKuaiDi.changePageSizeContext(isdefauledata,$(".first"));
	
		comboxs.push("添加新模板");
	for(var i=0;i<comboxs.length;i++){
		$("#tempSelect")[0].options.add(new Option(comboxs[i],comboxs[i]));
	}
PrintKuaiDi.removeClass();
	 			$("#pname").attr("readonly","readonly")	

}

