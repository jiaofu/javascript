

var setprintKuaiDi= (function(){
	var intSize=function(obj){

		changePageSize(obj);
	}

	var setTime=function(event){
		if(isdefauledata.time==""){
			isdefauledata.time="无";
		}
		$("#lastdatatime").html("最后更新时间："+isdefauledata.time);
	}
	var initName=function(){
		
		$("#pname").val(isdefauledata.name);
	}
	var setdefault=function(){
		if(isdefauledata.isdefaule==1){
			 $("#setDefault").prop("checked",true);
		}
	}
	
	var bindClick=function(obj){
	 $("#okdivsetwidthset").click(function(){
	 	
	 	isdefauledata.width=$("#width").val();
	 	isdefauledata.height=$('#height').val();
	 	changePageSize(isdefauledata);
	 	 var closeparent=	$(this).parents(".closeparent");
	 	 $(closeparent).hide();
	 	 
	 });
	 
	 $("#editsetcontext").click(function(){
	 	console.log($("#tempSelect").val());
	 		$("#setcontext").show();
	 		$("#outer").show();
	 		bingprint();
//	 $("#chosecontext").empty();
//
//	 	changePageSize(isdefauledata);
//	 	chagePostion(isdefauledata,$("#chosecontext"));
//	 		 		$("#pname").val(isdefauledata.name);
//	  var alldiv= 	$("#chosecontext").find(".examplediv");
//	  	  var allbut= 	$("#chosecontext").find(".divlastbut");
//	 	changePostion.startChange($("#chosecontext"),alldiv,setposition);
//	 	changePostion.startChange($("#chosecontext"),allbut,setposition);
	 });
	
	 
	 
	 $(document).on('click','#cancledivsetwidthset,#cancledivsetContext, .close',function(){
	 	
	 var closeparent=	$(this).parents(".closeparent");
	  if(closeparent.hasClass("examplediv")){
	  	 $(closeparent).remove();
	  	 isdefauledata[$(closeparent).attr("name")].isexit=0;
	  }
	  else{
	  	$(closeparent).hide();
	  }
	 })
	 
	 $(document).on('mousedown', '.divlastbut', function(){
	 	chagepoint=true;
	 })


	 $("#setPageSize").click(function(obj){
	 	$(".divsetwidthset").show();
	 	
	 })
	 $("#setPageContext").click(function(obj){
	 	$(".divsetContext").show();
	 	
	
	 });
	 $("#okdivsetContext").click(function(event){
	 	
	 		 	 var closeparent=	$(this).parents(".closeparent");
	 	 $(closeparent).hide();
	 	
	   var allcheck=	$("#checkboxtable").find("[type=checkbox]");
	   for(var i=0;i<allcheck.length;i++){
	   	var ck=$(allcheck[i]);
	   	if(isdefauledata[ck.attr("name")]==undefined){
	   		var data=objinitData();
	   		isdefauledata[ck.attr("name")]=data[ck.attr("name")];
	   	}
	   	if(ck.is(':checked')){
	   		isdefauledata[ck.attr("name")].isexit=1;
	   	}else{

	   		isdefauledata[ck.attr("name")].isexit=0;
	   	}
	   }
	  	$("#chosecontext").empty();
		chagePostion(isdefauledata,$("#chosecontext"));
	 	  var alldiv= 	$("#chosecontext").find(".examplediv");
	  	  var allbut= 	$("#chosecontext").find(".divlastbut");
	 	changePostion.startChange($("#chosecontext"),alldiv,setposition);
	 	changePostion.startChange($("#chosecontext"),allbut,setposition);
	 });
	 $("#savePage").click(function(event){
	  isdefauledata.name=$("#pname").val();
	 isdefauledata.time	=UtilTool.dateFormat(new Date(),"yyyy-MM-dd HH:mm:ss");

	 	
	 			$.ajax({
				type: "get",
				dataType: "json",
				url: "../../../print/saveprint.do",
				data: {"name":isdefauledata.name,"isdefault":isdefauledata.isdefaule ,"jsonposition":JSON.stringify(isdefauledata)},
				cache: false,
				async: false,
				success: function(context,status,message) {
					
			if ("200"==context.status) { 
				alert("保存成功");
				   window.location.reload();
			}else if ("500"==context.status) { 
				alert(context.msg);

			}
	
				},
				error: function() {

				}

			});
        
	 })
	 $("#canclePage").click(function(event){
	 	$("#setcontext").hide();
	 	changePostion.stopChange($("#chosecontext"),$("#chosecontext").find(".examplediv"));
	 		$("#outer").hide();
	 
	 })
	 $("#testPrint").click(function(event){
	 	
	 	PrintKuaiDi.printdiv($("#newiframe"),$("#chosecontext").prop("outerHTML"));
	 	
	 })
	 $("#btnPrint").click(function(event){
	 	      var printhtmlo="";
     		 	for(var i=0;i<$(".first").length;i++){
     		 		printhtmlo +=$($(".first")[i]).prop("outerHTML")
     		 	}
	 	PrintKuaiDi.printdiv($("#newiframe"),printhtmlo);
     })
	 $("#setDefault").click(function(event){
	 	if($(this).prop('checked')){
		isdefauledata.isdefaule=1;	 		
	 		
	 	}else{
	 	 isdefauledata.isdefaule=0;
	 	}
	 })
	 
	 $("#tempSelect").bind('change',function(){
	 
	 	for(var i=0;i<listdata.length;i++){
	 		if(listdata[i].name==$(this).val()){
	 			isdefauledata=listdata[i];
	 			$(".first:gt(0)").remove();

			$(".first").first().empty();
	setprintKuaiDi.chagePostion(isdefauledata,$(".first"));
	setTime();
	setprintKuaiDi.changePageSizeContext(isdefauledata,$(".first"));
		PrintKuaiDi.ExpressBill(getuserdata);
		PrintKuaiDi.removeClass();
		bingprint();
	 			$("#pname").attr("readonly","readonly")	
	 		}
	 	}
	 	if($(this).val()=="添加新模板"){
	 		var newdata=objinitData();
		newdata.name="新模板";
		newdata.istemplate=0;
	 		isdefauledata=newdata;
	 		$(".first:gt(0)").remove();
	 		$(".first").first().empty();
	setprintKuaiDi.chagePostion(isdefauledata,$(".first"));
	setTime();
	setprintKuaiDi.changePageSizeContext(isdefauledata,$(".first"));
		PrintKuaiDi.ExpressBill(getuserdata);
		PrintKuaiDi.removeClass();
		bingprint();

	 		$("#pname").removeAttr("readonly")
	 	}
	 	
	 })
	 
	 
	
	};
	
	var bingprint=function(){
		$("#chosecontext").empty();
			setTime();
		changePageSize(isdefauledata);
	 	chagePostion(isdefauledata,$("#chosecontext"));
	 	$("#pname").val(isdefauledata.name);
	 	setdefault();
	  var alldiv= 	$("#chosecontext").find(".examplediv");
	  	  var allbut= 	$("#chosecontext").find(".divlastbut");
	  	  imgset();
	 	changePostion.startChange($("#chosecontext"),alldiv,setposition);
	 	changePostion.startChange($("#chosecontext"),allbut,setposition);
	}
	var  imgset=function(){
		$("#chosecontext").css("background-image","url("+isdefauledata.image+")");
	}
	var changePageSize=function(obj){

		$("#chosecontext").css({
			'width':obj.width+"mm",
			'height':obj.height+"mm"
			
		});
		$("#setcontext").css({
			'width':$("#chosecontext").width()+80,
			'height': $("#chosecontext").height()+150
			
		});
	
	};
	var changePageSizeContext=function(obj,context){
		
		$(context).css({
			'width':obj.width+"mm",
			'height':obj.height+"mm"
			
		});
	}
	var chagePostion=function(obj,context){
		for(var name in obj){
			if(typeof( obj[name])=="object"){
				if(obj[name]['isexit']==1){
				 var getone=	$(".example").find('[name='+ name+']');
				 if(getone.length ==0){
				 	continue;
				 }
				 var html=  getone.prop("outerHTML");
				 $(context).append(html);
				 var $html=	$(context).find('[name='+ name+']');	
				 $html.css({
				 	'width': obj[name]['width']+"px",
				 	 'height':obj[name]['height']+"px"
				 })
				 
			
				$html.offset({
					'left': $(context).offset().left+ parseFloat( obj[name]['offsetleft']),
					'top': $(context).offset().top +parseFloat(obj[name]['offsettop'])
				});

		
		        
				 
				}

			}
		}
		
		
		
	};
    var setposition=function($div, x,y,oldevent){
    	
  
    	var $examplediv="";
    	if($div.hasClass("divlastbut")){
    
    		$examplediv=$div.parents(".examplediv");
    	}
    	else{
    		$examplediv=$div;

    	}
    	 var getch=$examplediv.attr("name");
    	if(chagepoint){
    		
    	$examplediv.css({
	 	'width': oldevent.pageX -$examplediv.offset().left  ,
	 	'height': oldevent.pageY- $examplediv.offset().top
	 });
	
    	isdefauledata[getch].width=$examplediv.width();
    	
    	isdefauledata[getch].height=$examplediv.height();	
    		
    	}else{
    		
    		  				$examplediv.offset({
								'left': x,
								'top': y
							});
							
		isdefauledata[getch].offsetleft=$examplediv.position().left;
    	
    	isdefauledata[getch].offsettop=$examplediv.position().top;			
							
						}

    }
	


	return{
		intSize:intSize,

		setTime:setTime,
		bindClick:bindClick,
		chagePostion:chagePostion,
		changePageSizeContext:changePageSizeContext,
		imgset:imgset
	}
	
	
	
	
})();

$(function(){
	setprintKuaiDi.intSize(isdefauledata);
	setprintKuaiDi.setTime(isdefauledata);
	setprintKuaiDi.bindClick(isdefauledata);
	uploadimg.goodsImageUploadDefault($("#filePicker1"));
	
	
	
	$("#filePicker1").find("div").last().height("16");
		$("#filePicker1").find("div").last().width("74");
})
