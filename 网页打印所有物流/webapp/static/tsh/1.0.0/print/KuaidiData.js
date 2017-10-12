var moban=(function(){
	var yuantong=function(){
	var data=objinitData();
		data.name="圆通快递";
		data.istemplate=1;
		data.image="/static/tsh/1.0.0/print/img/yuantong.png";
		return data;
		
		
	}
	var shengtong=function(){
			var data=objinitData();
		data.name="申通快递";	
			data.istemplate=1;
					data.image="/static/tsh/1.0.0/print/img/shentong.png";
		return data;
		
	}
	var zhongtong=function(){
		
			var data=objinitData();
		data.name="中通快递";	
				data.istemplate=1;
				data.image="/static/tsh/1.0.0/print/img/zhongtong.png";
		return data;
	}
	var yunda=function(){
		
			var data=objinitData();
		data.name="韵达快递";	
		data.istemplate=1;
 		data.image="/static/tsh/1.0.0/print/img/yuanda.png";
		return data;
	}
	
	return {
		 yuantong:yuantong,
		 shengtong:shengtong,
		 zhongtong:zhongtong,
		 yunda:yunda
	}
	
})();


var objinitData=(function(){

	var data=new Object();
	data.id=0;
	data.width="228";
	data.height="125";
	data.image="";
	data.isdefaule=0;
	data.istemplate=0;
	data.time="";
	var seller_send_contact=new Object();
	seller_send_contact.isexit=1;
	seller_send_contact.width="263";
	seller_send_contact.height="26";
	seller_send_contact.offsetleft="64";
	seller_send_contact.offsettop="97";
	seller_send_contact.name="发件人姓名";
	data.seller_send_contact=seller_send_contact;
	
	
	var seller_send_address=new Object();
	seller_send_address.isexit=1;
	seller_send_address.width="341";
	seller_send_address.height="23";
	seller_send_address.offsetleft="58";
	seller_send_address.offsettop="152";
	seller_send_address.name="发件人地址";
	data.seller_send_address=seller_send_address;
	
	
	
	var seller_send_tel=new Object();
	seller_send_tel.isexit=1;
	seller_send_tel.width="263";
	seller_send_tel.height="23";
	seller_send_tel.offsetleft="70";
	seller_send_tel.offsettop="200";
	seller_send_tel.name="发件人手机";
	data.seller_send_tel=seller_send_tel;
	
	
	var seller_name=new Object();
	seller_name.isexit=0;
	seller_name.width="200";
	seller_name.height="30";
	seller_name.offsetleft="124";
	seller_name.offsettop="180";
	seller_name.name="供应商名称";
	data.seller_name=seller_name;
	
				
				
				
				
				
	var buyer_logistics_contact=new Object();			
	buyer_logistics_contact.isexit=1;			
	buyer_logistics_contact.width="235";
	buyer_logistics_contact.height="23";
	buyer_logistics_contact.offsetleft="426";
	buyer_logistics_contact.offsettop="93";
	buyer_logistics_contact.name="收件人姓名";
	data.buyer_logistics_contact=buyer_logistics_contact;
	
	
	var buyer_logistics_address=new Object();
	buyer_logistics_address.isexit=1;
	buyer_logistics_address.width="334";
	buyer_logistics_address.height="25";
	buyer_logistics_address.offsetleft="416";
	buyer_logistics_address.offsettop="146";
	buyer_logistics_address.name="收件人地址";
	data.buyer_logistics_address=buyer_logistics_address;
	
	var buyer_logistics_tel=new Object();
	buyer_logistics_tel.isexit=1;
	buyer_logistics_tel.width="267";
	buyer_logistics_tel.height="26";
	buyer_logistics_tel.offsetleft="430"; 
	buyer_logistics_tel.offsettop="202"; 
	buyer_logistics_tel.name="收件人电话";
	data.buyer_logistics_tel=buyer_logistics_tel;
	
	var buyers_remark=new Object();
	buyers_remark.isexit=0;
	buyers_remark.width="200";
	buyers_remark.height="30";
	buyers_remark.offsetleft="200";  
	buyers_remark.offsettop=" 60";
	buyers_remark.name="买家信息";
	data.buyers_remark=buyers_remark;
	
	var order_no=new Object();
	order_no.isexit=0;
	order_no.width="200";
	order_no.height="30";
	order_no.offsetleft="200";
	order_no.offsettop="200";
	order_no.name="订单编号";
	data.order_no=order_no;
	
	var goodsdetail=new Object();
	goodsdetail.isexit=0;
	goodsdetail.width="200";
	goodsdetail.height="30";
	goodsdetail.offsetleft="250";
	goodsdetail.offsettop="50";
	goodsdetail.name="订单详情";
	data.goodsdetail=goodsdetail;
	
	var datatime=new Object();
	datatime.isexit=0;
	datatime.width="200";
	datatime.height="30";
	datatime.offsetleft="280";
	datatime.offsettop="80";
	datatime.name="打单日期"
	data.datatime= datatime;


	var send_no=new Object();
	send_no.isexit=0;
	send_no.width="320";
	send_no.height="30";
	send_no.offsetleft="280";
	send_no.offsettop="200";
	send_no.name="发货编号"
	data.send_no= send_no;
	
	return data;
	
})
