//12、点击添加购物车后在购物车页面显示商品信息-------------------
$(document).ready(function(){
	var get_uid = getCookie('user_id');
	$.ajax({
		type:"post",
		url:"../api/cart.php",
		async:true,
		data:{
			'ins':'select_datas',
			'userid':get_uid
		},
		success:function(str){
			//console.log(str);
			var data = JSON.parse(str);
			//console.log(data);
			for (var i=0; i<data.length; i++) {
				//console.log(data[i].goods_id)
				var goods_id = data[i].goods_id;
				$.ajax({
					type:"post",
					url:"../api/cart.php",
					async:true,
					data:{
						'ins':'select_datas2',
						'goodsid':goods_id
					},
					success:function(str){
						//console.log(str);
						var data2 = JSON.parse(str);
						//console.log(data2);
						mycarts(data2);
					}
				});
			}
			
			function mycarts(data2){
				var html = '';
				for (var i=0; i<data2.length; i++) {
					html+=`
					<div class="big">
						<div class="shop">
							<input type="checkbox" class="checked_" value="" />
							<p>店铺名称：<span class="shop_name">浩涵首饰厂</span></p>
							<button>添加到数据包</button>
						</div>
						<table border="0" cellspacing="0" cellpadding="0" class="table_">
							<tbody>
								<tr>
									<td class="td1">货品</td>
									<td class="td2">数量</td>
									<td class="td3">库存</td>
									<td class="td4">单价</td>
									<td class="td5">区间价（折扣价）</td>
									<td class="td6">金额</td>
									<td class="td7">操作</td>
								</tr>
							</tbody>
						</table>
						<ul class="myreceipt_tables">
							<li>
								<div class="myreceipt-tables-t">
									<div class="myreceipt-tables-t-left fl">
										<input type="checkbox" class="goods_checked" value="" />
										<span class="myreceipt-title">${data2[i].title}</span>
									</div>
									<a href="" class="fr">删除所有</a>
								</div>
								<table border="0" cellspacing="0" cellpadding="0">
									<tbody>
										<tr>
											<td class="td1">
												<a href="" class="fl"><img src="${data2[i].src}"/></a>
												<div class="styles fl">
													<p>
														<span>金属颜色/戒指大小</span>
														<span>镀白金/16</span>
													</p>
													<p>2018101700001</p>
												</div>
											</td>
											<td class="td2">
												<span class="cut_num">-</span>
												<input type="text" class="now_num" value="1"/>
												<span class="add_num">+</span>
											</td>
											<td class="td3">50</td>
											<td class="td4">￥<span class="one_pri">${data2[i].pri}</span></td>
											<td class="td5">≥1<span class="one_deco">${data2[i].pri}</span></td>
											<td class="td6">￥<span class="one_price">${data2[i].pri}</span></td>
											<td class="td7 one_del">删除</td>
										</tr>
									</tbody>
								</table>
							</li>
						</ul>
					</div>
					`;
				}
				$('.carts_center').append(html);
			}
			
			
		}
	});
});



//实现购物车功能-------------
/*
	* 加数量
	* 减数量
	* 删除当行
	* 小计
	* 全选
	* 总价和总数量
	* 删除多个
	* 手动输入改变价格
*/

//1、加数量-----------
$('#p_mains .container .carts_center').on('click','.add_num',function(){
	//给每一个加号绑定事件(用事件委托的方式绑定)
	var val = $(this).prev().val();
//	console.log(val)
	val++;
//	console.log(val);
	if (val>=50) {
		val=50;
	}
	$(this).prev().val(val);
	
	//金额改变-------
	total($(this));
	
	//点击加数量时计算总数量总价
	//总数量
	var arr = checked();//判断是哪行被选中，调用checked()函数
	allnum(arr);//调用总数量函数并传参  ，传被选中的行的下标过去，那边做累计处理
	
	//总价
	totalprice(arr);
});


//2、减数量-----------
$('#p_mains .container .carts_center').on('click','.cut_num',function(){
	//给每一个减号绑定事件(用事件委托的方式绑定)
	var val = $(this).next().val();
//	console.log(val)
	val--;
//	console.log(val);
	if (val<=1) {
		val=1;
	}
	$(this).next().val(val);
	
	//金额改变-------
	total($(this));
	
	//点击减数量时计算总数量总价
	//总数量
	var arr = checked();//判断是哪行被选中，调用checked()函数
	allnum(arr);//调用总数量函数并传参  ，传被选中的行的下标过去，那边做累计处理
	
	//总价
	totalprice(arr);
});


//3、加减数量时金额改变------------
function total(now){
	//找到对应商品单价，取内容
	var price = now.parent().next().next().children().text();
//	console.log(price);//6.50
	//获取数量
	var num = now.parent().find('input').val();
//	console.log(num)
	
	//点击时金额改变
	var totals = price*num;//单价*数量
	//	console.log(totals);
	//将新的小计赋值给原来的小计，并保留两位小数
	now.parent().next().next().next().next().children().html(totals.toFixed(2));
}


//4、点击删除单行--------------
$('#p_mains .container .carts_center').on('click','.one_del',function(){
	getcoo = getCookie('goods_id');
	var conf = confirm('您确定要删除该商品吗？');
	
	if (conf) {
		//把整条数据删走
		$(this).parent().parent().parent().parent().parent().parent().remove();
		
		$.ajax({
			type:"post",
			url:"../api/cart.php",
			async:true,
			data:{
				'ins':'deldatas',
				'id':getcoo
			},
			success:function(str){
				console.log(str);
			}
		});
		
	}
	
	//页面刷新
	updata();
	
	//删除单行时计算总数量总价
	//总数量
	var arr = checked();//判断是哪行被选中，调用checked()函数
	allnum(arr);//调用总数量函数并传参  ，传被选中的行的下标过去，那边做累计处理
	
	//总价
	totalprice(arr);
});


//5、页面刷新----------
function updata(){
	if ($('.cut_num').size()==0) {
		$('.shop').remove();
		$('.table_').remove();
	}
}


//6、全选------------
//设置默认开关
var ischeck = true;
//给全选按钮绑定一个点击事件
$('.allchecked').on('click',function(){
	//attr()加普通属性      title    prop() 加有行为的属性
	if (ischeck) {
		//点击一下全选
		//每个商品的勾选按钮设置为已勾选状态
		$('.goods_checked').prop('checked','checked');
		//全选按钮也设置已勾选状态
		$('.allchecked').prop('checked','checked');
	}
	else{
		//点击一下全不选
		$('.goods_checked').removeAttr('checked');
		$('.allchecked').removeAttr('checked');
	}
	//开关要取反
	ischeck = !ischeck;
	
	//点击全选时总数量和总价也跟着改变
	//总数量
	var arr = checked();//判断是哪行被选中，调用checked()函数
	allnum(arr);//调用总数量函数并传参  ，传被选中的行的下标过去，那边做累计处理
	
	//总价
	totalprice(arr);
});


//7、删除多行-------------
$('._delall').on('click',function(){
	//被选中的行
	var arr = checked();//调用checked()函数
//	console.log(arr);
	var conf = confirm('您确定要删除这些商品吗？');
	if (conf) {
		//删除arr下标对应的行，从下往上删除才不会出错
		for (var i=arr.length-1; i>=0; i--) {
			//整行删除
			$('.goods_checked').eq(i).parent().parent().parent().remove();
		}
	}
	
	//页面刷新
	updata();
});

//循环判断哪行被选中
function checked(){
	//设置一个空数组，等会被选中的就把下标存起来
	var arr = [];
	//获取行长度
	var len = $('.goods_checked').size();
	for (var i=0; i<len; i++) {
		if ($('.goods_checked').eq(i).prop('checked')) {
			//不为空就证明被选中了，就向数组里添加它的下标
			arr.push(i);
		}
	}
	return arr;
}


//8、总数量-----------
function allnum(arr){
	var num = 0;//总数量初始值为0
	for (var i=0; i<arr.length; i++) {
		//找到被选中的行的数量，相加
		num+=parseInt($('.now_num').eq(arr[i]).val());
	}
//	console.log(num)
	//赋值
	$('#sliang').html(num);
}


//9、总价--------------
function totalprice(arr){
	var price = 0;
	for (var i=0; i<arr.length; i++) {
		var nowtotal = $('.one_price').eq(arr[i]).text();
		console.log(nowtotal);
		//由于nowtotal是字符串，所以将其转化为数字类型
		price+=nowtotal*1;
	}
	
	//赋值
	$('#total_price').html(price.toFixed(2));
}


//10、单行选中
//用事件委托绑定事件
$('#p_mains .container .carts_center').on('click','.goods_checked',function(){
	//被选中的行
	var arr = checked();//调用checked()函数
	
	if (arr.length==$('.goods_checked').size()) {
		//如果所有的行都被选中了
		//全选框就会被勾选
		$('.allchecked').prop('checked','checked');
		
		//三个都被选中了，下次点击全选按钮是为了全不选
		ischeck = false;
	}else{
		//如果有一行或多行未勾选
		//全选框就取消勾选
		$('.allchecked').removeAttr('checked');
		
		//如果有一行或多行未勾选，下次点击全选按钮是为了全选
		ischeck = true;
	}
	
	//单行被选中时计算总数量和总价
	//总数量
	var arr = checked();//判断是哪行被选中，调用checked()函数
	allnum(arr);//调用总数量函数并传参  ，传被选中的行的下标过去，那边做累计处理
	
	//总价
	totalprice(arr);
});


//11、手动输入改变总价总数量
//事件委托绑定事件
$('#p_mains .container .carts_center').on('keyup','.now_num',function(){
	//小计
	total($(this));//调用小计函数，把点击当前节点当成实参传过去
	
	//手动输入时改变总价总数量
	//总数量
	var arr = checked();//判断是哪行被选中，调用checked()函数
	allnum(arr);//调用总数量函数并传参  ，传被选中的行的下标过去，那边做累计处理
	
	//总价
	totalprice(arr);
});






