var printOrder = (function() {

	/**
	 * 获取HTML传过来的参数
	 * @param keys
	 * @returns
	 */
	return {
		getPrintData: function() {

			var type = UtilTool.getHtmlParams("type");

			var detailIds = UtilTool.getHtmlParams("detailIds");
		
			var sendurl = "../../../print/printOrderServer.do";
			var getdata="";
			/*异步请求加载数据*/
			$.ajax({
				type: "get",
				dataType: "json",
				url: sendurl,
				data: {"detailIds":detailIds, "type":type},
				cache: false,
				async: false,
				success: function(data) {
					getdata=data;
					// $('span[name=pickTime]').html(dateFormat(new Date(),"yyyy-MM-dd HH:mm:ss"));
					
				},
				error: function() {

				}

			});
			return getdata;
		},
		getListByArea: function(data) {
			var arrayGroup = new Array();
			for(var i = 0; i < data.length; i++) {

				var isexit = false;
				var exittitle = new Object();
				for(var j = 0; j < arrayGroup.length; j++) {

					if(arrayGroup[j].buyer_logistics_address == data[i].buyer_logistics_address &&  arrayGroup[j].send_no== data[i].send_no) {
						isexit = true;
						exittitle = arrayGroup[j];
					}

				}
				if(isexit) {
					var obj = new Object();
					obj.order_no = data[i].order_no;
					obj.goods_name = data[i].goods_name;
					obj.sku_msg = data[i].sku_msg;
					obj.number = data[i].number;
					obj.goods_unit = data[i].goods_unit;
					obj.buyer_logistics_contact = data[i].buyer_logistics_contact;
					obj.buyer_logistics_tel = data[i].buyer_logistics_tel;
					obj.buyers_remark = data[i].buyers_remark;
					obj.logistics_remark=data[i].logistics_remark;
					
					obj.shopShortName=data[i].shopShortName;
					obj.buyer_no=data[i].buyer_no;
					obj.member_user_name=data[i].member_user_name;
					obj.member_user_tel=data[i].member_user_tel;
					 
					obj.goods_bar_code=data[i].goods_bar_code;
					obj.isexit=data[i].shopShortName;
	
					exittitle.goods.push(obj);
				} else {
					var title = Object();
					title.send_logistics_number = data[i].send_logistics_number;
					title.shopShortName = data[i].shopShortName;
					title.buyer_no = data[i].buyer_no;
					title.buyer_logistics_address = data[i].buyer_logistics_address;
					title.buyer_logistics_contact = data[i].buyer_logistics_contact;
					title.buyer_logistics_tel = data[i].buyer_logistics_tel;
					title.seller_back_address = data[i].seller_back_address;
					title.seller_back_contact = data[i].seller_back_contact;
					title.seller_back_tel = data[i].seller_back_tel;
					title.order_no=data[i].order_no;
					title.send_order_no=data[i].send_order_no;
					
					title.seller_send_contact=data[i].seller_send_contact;
					title.seller_send_tel=data[i].seller_send_tel;
					title.seller_send_address=data[i].seller_send_address;
					
					title.send_no=data[i].send_no;

					title.seller_send_contact=data[i].seller_send_contact;
					title.seller_send_tel=data[i].seller_send_tel;
					title.seller_send_address=data[i].seller_send_address;

					title.logistics_create_time = data[i].logistics_create_time;
					
					var goods = new Array();
					var obj = new Object();
					obj.order_no = data[i].order_no;
					obj.goods_name = data[i].goods_name;
					obj.sku_msg = data[i].sku_msg;
					obj.number = data[i].number;
					obj.goods_unit = data[i].goods_unit;
					obj.buyer_logistics_contact = data[i].buyer_logistics_contact;
					obj.buyer_logistics_tel = data[i].buyer_logistics_tel;
					obj.buyers_remark = data[i].buyers_remark;
					obj.logistics_remark=data[i].logistics_remark;
					obj.shopShortName=data[i].shopShortName;
					obj.buyer_no=data[i].buyer_no;
					obj.member_user_name=data[i].member_user_name;
					obj.member_user_tel=data[i].member_user_tel;
					
					obj.isexit=data[i].shopShortName;
					
					obj.goods_bar_code=data[i].goods_bar_code;
					goods.push(obj);
					title.goods = goods;
					arrayGroup.push(title);
				}

			}
						return arrayGroup;
		},

		getListByBuyers: function(data) {
			var arrayGroup = new Array();
			for(var i = 0; i < data.length; i++) {

				var isexit = false;
				var exittitle = new Object();
				for(var j = 0; j < arrayGroup.length; j++) {
					if(arrayGroup[j].shopShortName == data[i].shopShortName  &&  arrayGroup[j].send_no== data[i].send_no) {

						isexit = true;
						exittitle = arrayGroup[j];
					}

				}
				if(isexit) {
					var obj = new Object();
					obj.order_no = data[i].order_no;
					obj.goods_name = data[i].goods_name;
					obj.sku_msg = data[i].sku_msg;
					obj.number = data[i].number;
					obj.goods_unit = data[i].goods_unit;
					obj.shopShortName = data[i].shopShortName;
					obj.buyer_no = data[i].buyer_no;
					obj.buyer_logistics_contact = data[i].buyer_logistics_contact;
					obj.buyer_logistics_tel = data[i].buyer_logistics_tel;
					obj.buyers_remark = data[i].buyers_remark;
					obj.logistics_remark=data[i].logistics_remark;
					
					obj.member_user_name=data[i].member_user_name;
					obj.member_user_tel=data[i].member_user_tel;
					
					obj.isexit=data[i].buyer_logistics_address;
			
						
					exittitle.goods.push(obj);
				} else {
					var title = Object();
					title.send_logistics_number = data[i].send_logistics_number;
					title.shopShortName = data[i].shopShortName;
					title.buyer_no = data[i].buyer_no;
					title.buyer_logistics_address = data[i].buyer_logistics_address;
					title.buyer_logistics_contact = data[i].buyer_logistics_contact;
					title.buyer_logistics_tel = data[i].buyer_logistics_tel;


					title.seller_back_address = data[i].seller_back_address;
					title.seller_back_contact = data[i].seller_back_contact;
					title.seller_back_tel = data[i].seller_back_tel;
					title.logistics_create_time = data[i].logistics_create_time;
					
				
					title.order_no=data[i].order_no;
					
					title.buyers_address=data[i].buyers_address;
					title.buyers_contact=data[i].buyers_contact;
					title.buyers_tel=data[i].buyers_tel;
					title.send_order_no=data[i].send_order_no;		
					
					title.buyers_remark = data[i].buyers_remark;
					  title.seller_name=data[i].seller_name;
					title.seller_send_contact=data[i].seller_send_contact;
					title.seller_send_address=data[i].seller_send_address;
					title.seller_send_tel=data[i].seller_send_tel;
					title.send_no=data[i].send_no;
					 
					var goods = new Array();
					var obj = new Object();
					obj.order_no = data[i].order_no;
					obj.goods_name = data[i].goods_name;
					obj.sku_msg = data[i].sku_msg;
					obj.number = data[i].number;
					obj.goods_unit = data[i].goods_unit;
					obj.shopShortName = data[i].shopShortName;
					obj.buyer_no = data[i].buyer_no;
					obj.buyer_logistics_contact = data[i].buyer_logistics_contact;
					obj.buyer_logistics_tel = data[i].buyer_logistics_tel;
			
					obj.logistics_remark=data[i].logistics_remark;
					obj.member_user_name=data[i].member_user_name;
					obj.member_user_tel=data[i].member_user_tel;
						obj.isexit=data[i].buyer_logistics_address;
					goods.push(obj);
					title.goods = goods;
					arrayGroup.push(title);
				}

			}
			return arrayGroup;

		},
		initbyCouny: function(data, functr, funcinitTop,funcinitTail) {
			var printDivClone = $('#printDiv');
			var lnoCloneInit = printDivClone.clone();
			for(var i = 0; i < data.length; i++) {
				var lnoCloneByInit = lnoCloneInit.clone();
				var lnoCloneByEach = lnoCloneInit.clone();
				$(lnoCloneByInit).find(".lno").first().attr("name", "byinit" + i);
				$(lnoCloneByEach).find(".lno").first().attr("name", "byeach" + i);
				funcinitTop(lnoCloneByInit,data[i]);
				funcinitTop(lnoCloneByEach,data[i]);
				funcinitTail(lnoCloneByInit,data[i]);
				funcinitTail(lnoCloneByEach,data[i]);
				functr(data[i], lnoCloneByInit, lnoCloneByEach);
			}
				$(".lno[name='initlno']").first().remove();
			for(var i = 0; i < data.length; i++) {
				printOrder.setNumberPage("byeach" + i);
				printOrder.geteachTotal("byeach" + i);
			}

		
		},

		cloneTab: function(strHtml, byinit, byeach) {
			var getlno = $(byinit).find(".lno");
			getlno.find("#aftertr").after(strHtml);
			$("#printDiv").append(getlno.prop("outerHTML"));
			var byinitname = getlno.attr("name");
			var lno = $(".lno[name='" + byinitname + "']");

			var tbottomoffsetTop = lno.height();

			var alltr = $(lno).find(".fortr")

			if(alltr.length < 1) {
				alert("没有任何数据");
			}
			//alert(alltr[17].offsetTop);
			var tbodyoffserTop = lno.find(".tbody")[0].offsetTop + 20;

			// alert(lno.find(".tbody")[0].offsetTop)
			var lasttrheight = lno.find("#lasttr").height() + 2;
			var lastspanheight = lno.find("#lastspan").height() + 10;
			var aftertrheight = lno.find("#aftertr").height() + 2;
			var toptable = 0;
			var pagesize = 1;
			var firstgetone = 0;

			var betweentr = tbottomoffsetTop - tbodyoffserTop - lasttrheight - lastspanheight - aftertrheight;
			//	alert(alltr[17].offsetTop);
			//alert($(alltr[17]).height());
			//alert($(".lno")[0].offsetTop)
			var getsizetr = 1;
			for(var i = 0; i < alltr.length; i++) {
				toptable = toptable + $(alltr[i]).height() + 1;

				if(toptable >= betweentr) {
					getsizetr++;
					var strCloneHtml = "";
					var lonClone = byeach.clone();
					for(var j = firstgetone; j < i; j++) {

						strCloneHtml += $(alltr[j]).prop("outerHTML");
					}
					if(strCloneHtml != "") {
						lonClone.find("#aftertr").after(strCloneHtml);
						$("#printDiv").append(lonClone.html());
						firstgetone = i;
						toptable = 0;
					}

				}
			}

			if(firstgetone < alltr.length) {
				var strCloneHtml = "";
				var lonClone = byeach.clone();
				for(var i = firstgetone; i < alltr.length; i++) {
					strCloneHtml += $(alltr[i]).prop("outerHTML");
				}
				lonClone.find("#aftertr").after(strCloneHtml);
				$("#printDiv").append(lonClone.html());
			}
			lno.remove();

		},

		getNumberPage: function(attrname) {
			var lnoAll = $(".lno[name='" + attrname + "']");
			var pickNameArr = new Array();
			var pickName = "";
			for(var i = 0; i < lnoAll.length; i++) {
				var isBool = false;
				pickName = $(lnoAll[i]).find("[name='pickName']").first().val();
				for(var j = 0; j < pickNameArr.length; j++) {
					if(pickNameArr[j].pickName == pickName) {
						isBool = true;
					}

				}
				if(!isBool) {
					var pickNameObj = new Object();
					
					var countPiackName = 0;
					for(var j = 0; j < lnoAll.length; j++) {

						var pickNameVal = $(lnoAll[j]).find("[name='pickName']").first().val();
						if(pickNameVal == pickName) {
							countPiackName++;
						}
					

					}
						pickNameObj.pickName = pickName;
						pickNameObj.count = countPiackName;

						pickNameArr.push(pickNameObj);

				}

			}
			return pickNameArr;
		},
		setNumberPage: function(attrname) {

			var pickNameArr = printOrder.getNumberPage(attrname);
			var lnoAll = $(".lno[name='" + attrname + "']");
			for(var i = 0; i < pickNameArr.length; i++) {

				var count = 0;
				for(var j = 0; j < lnoAll.length; j++) {
					var pickName = $(lnoAll[j]).find("[name='pickName']").first().val();
					if(pickName == pickNameArr[i].pickName) {
						count++;
						$(lnoAll[j]).find(".page_num").html("第" + count + "页 共" + pickNameArr[i].count + "页")
					}

				}
			}
		},
		geteachTotal: function(attrname) {
			var lnoAll = $(".lno[name='" + attrname + "']");

			for(var i = 0; i < lnoAll.length; i++) {
				var eachTotal = 0;
				var objnames = $(lnoAll[i]).find("[name='numbereach']");
				for(var j = 0; j < objnames.length; j++) {

					eachTotal += parseInt($(objnames[j]).html());
				}

				var objnames = $(lnoAll[i]).find("[name='eachTotal']");
				objnames.html("合计：" + eachTotal);
			}

		}

	}

})();