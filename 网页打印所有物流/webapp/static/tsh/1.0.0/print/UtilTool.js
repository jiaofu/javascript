var UtilTool=(function(){
	var	getHtmlParams=function(keys) {
		var reg = new RegExp("(^|&)" + keys + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return(r[2]);
		return null;
	};

var dateFormat=function(millisecond, format){
    var t = new Date(millisecond);
    var tf = function(i){return (i < 10 ? '0' : '') + i;};
return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
    switch(a){
        case 'yyyy':
            return tf(t.getFullYear());
            break;
        case 'MM':
            return tf(t.getMonth() + 1);
            break;
        case 'mm':
            return tf(t.getMinutes());
            break;
        case 'dd':
            return tf(t.getDate());
            break;
        case 'HH':
            return tf(t.getHours());
            break;
        case 'ss':
              return tf(t.getSeconds());
          break;
        }
    });
};

 var isfloat=function(nu){
 	var re=/^[0-9]+\.{1}[0-9]*$/;
 	if(re.test(nu)){
 		return true;
 	}
 	return false;
 }
 
 var getparam=function(){
 	var type = UtilTool.getHtmlParams("type");

   var detailIds = UtilTool.getHtmlParams("detailIds");
   
   var obj=new Object();
   obj.type=type;
   obj.detailIds=detailIds;
   return obj;
		
 }
  var addPrintOrder=function(wherePrint){

	 	var systype = UtilTool.getHtmlParams("type");

   var detailIds = UtilTool.getHtmlParams("detailIds");
 			$.ajax({
			type:"get",
			dataType: "json",
			url:'../../../print/addprint.do',
			data:{"detailIds":detailIds,"systype":systype,"wherePrint":wherePrint},
			success:function(data){},
			error:function(context,status,message){
	
			}
		});
 	
 }
 
 
	return {
		getHtmlParams:getHtmlParams,
		dateFormat:dateFormat,
		isfloat:isfloat,
		getparam:getparam,
		addPrintOrder:addPrintOrder
	}


	
})();
