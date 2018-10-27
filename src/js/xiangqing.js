//点击侧边栏跳转购物车----------
$('#p_inside .cart').click(function(){
	window.location.href = "../html/carts.html";
});

//首页侧边栏登录
$('#p_inside .userlog').click(function(){
	window.location.href = "../html/login.html";
});


//console.log(123);
//中间款式部分--------
//实现点击下拉按钮显示其余
$('#up_down').click(function(){
	$('.detail_style .inf_hidden').slideToggle();
});

//点击加减按钮数量增加或减少的功能--------------
//减数量-----------
$('.kuangshi').on('click','#cutnum',function(){
	//给每一个加号绑定事件(用事件委托的方式绑定)
	var val=$(this).next().val();
	val--;//隐式转换
//	console.log(val);
	if(val<=0){
		//库存量是50.限制最大值
		val=0;
	}
	//设置内容
	$(this).next().val(val);
});

//加数量-----------
$('.kuangshi').on('click','#addnum',function(){
	//给每一个加号绑定事件(用事件委托的方式绑定)
	var val=$(this).prev().val();
	val++;//隐式转换
//	console.log(val);
	if(val>=50){
		//库存量是50.限制最大值
		val=50;
	}
	//设置内容
	$(this).prev().val(val);
});


//选项卡li部分-----------
$('.lis_tab li').click(function(){
	$(this).addClass('_active');
	$(this).siblings().removeClass('_active');
	//div跟着切换
	$('.canshu .con').css('display', 'none');
	$('.canshu .con').eq($(this).index()).css('display', 'block');
});


//客户评价实现留言板功能---------------
$('.pingjia #sub_btns').click(function(){
	updata();
});

function updata(){
	//从前面插入新内容
	var value = $('.pingjia #tex').val();
	$li = $('<li></li>');
	$li.html(value);
	
	$('.pingjia #sub_contents').prepend($li);
	$('.pingjia #tex').val('');
}

//评价实现回车提交-------
$(document).keydown(function(ev){
	//console.log(ev.which);//获取键值   键值13是回车键
	if(ev.which==13){
		updata();
	}
});


//渲染商品信息--------
var coo = getCookie("ids");
//console.log(coo);
$(document).ready(function(){
	$.ajax({
		type:"get",
		url:"../api/products.php",
		async:true,
		success:function(str){
			//console.log(str);
			var data = JSON.parse(str);
			//console.log(data);
			var html = '';
			var html2='';
			for (var i=0; i<data.length; i++) {
				if (data[i].id == coo) {
					//console.log(123);
					html=`
						${data[i].title}
					`;
					html2=`${data[i].pri}`;
					break;
				}
			}
			$('#tit').html(html);
			$('.pri').html(html2);
//			setCookie(coo,coo,-1);
		}
	});
});

