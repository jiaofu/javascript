
var uploadimg=(function(){
	
	 var goodsImageUpload = function(selector,fn){
		  
		    var setHeader = function(object, data, headers) {
		        if(document.all){ 
		        headers['Access-Control-Allow-Origin'] = '*'; 
		        headers['Access-Control-Request-Headers'] = 'content-type'; 
		        headers['Access-Control-Request-Method'] = 'POST'; 
		        }
		    }
		    
		    var BASE_URL ="../../../";
		     WebUploader.create({
		        auto: true,
		        swf: BASE_URL + 'static/tsh/1.0.0/plugins/webuploader-0.1.5/Uploader.swf',
		        server: BASE_URL + '../../afterSalesback/uploadImg.do',
		        pick: {id:selector,multiple :false},
		        fileNumLimit:999,  // 限制上传文件个数   参考网址：http://fex.baidu.com/webuploader/doc/index.html#WebUploader_File_events
		        accept: {
		            title: 'Images',
		            extensions: 'jpg,jpeg,bmp,png',
		            mimeTypes: 'image/*'
		        },
		        fileSingleSizeLimit:2097152,
		        onUploadBeforeSend:setHeader,
		        onUploadError :function( file,reason ) {
		            //$error.text('上传失败');
		            if(reason=="http"){
		                alert("网络异常！");
		            }else{
		                alert("不支持的图片,换张图片试试!");
		            }
		            
		        },
		        onUploadProgress: function( file,percentage) {
		        },
		        onUploadSuccess: function( file,response  ) {
		       
		       		fn(response);
		     
		
		        },
		        onError: function( file,response  ) { 
		            switch(file){
		                case "F_EXCEED_SIZE":
		                    alert("图片大小不超过2M");
		                    break;
		                case "F_DUPLICATE":
		                    alert("请勿重复提交，换张图片试试!");
		                    break;
		                case "Q_EXCEED_NUM_LIMIT":
		                    alert("限制三张凭证!");
		                    break;
		                case "Q_TYPE_DENIED":
		                    alert("请上传jpg,jpeg格式的图片");
		                    break;
		                default:
		                    alert("上传失败！");
		                break;
		            }
		        }

		    });
           


		 };
		 
		 var goodsImageUploadDefault=function(selector){
		 	
		 	goodsImageUpload(selector,onUploadSuccessDefault);
		 };
		 
		 var onUploadSuccessDefault=function(response){
		 	   var ossImage = response.path;

		        console.log(ossImage);
				isdefauledata.image=ossImage;
				$("#chosecontext").css("background-image","url("+isdefauledata.image+")");

				
		        var img = '<img style="width:100px;height:100px;margin-left:10px;" src='+ossImage+' alt=""></img>';
		        $("#imgs").append(img);
		 };
		 return {
		 	goodsImageUpload:goodsImageUpload,
		 	goodsImageUploadDefault:goodsImageUploadDefault
		 	
		 }
	
	
})()


   