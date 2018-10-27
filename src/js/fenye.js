//点击侧边栏跳转购物车----------
$('#p_inside .cart').click(function(){
	window.location.href = "../html/carts.html";
});

//首页侧边栏登录
$('#p_inside .userlog').click(function(){
	window.location.href = "../html/login.html";
});


//函数封装部分---------------
function creat(data){
	var html='';
	for (var i=0; i<data.length; i++) {
		html+=`
			<li id="${data[i].id}">
				<p class="imgs" id="${data[i].id}"><img src="${data[i].src}"/></p>
				<p class="price">
					批发价：￥<span class="pri">${data[i].pri}</span>
					<i class="fr">成交额￥0</i>
				</p>
				<p class="title"><a href="">${data[i].title}</a></p>
				<p class="btns">
					<span class="shuju">数据包</span>
					<span class="gouwu">加入进货单</span>
				</p>
				<p class="place">汕尾产地:20180912002</p>
				<p class="times">
					<span>现货销售</span>
					<span class="fr">上架时间:2018/10</span>
				</p>
			</li>
		`;
	}
	$('.ullist').html(html);
}


//数据渲染实现分页-----------------
$(document).ready(function(){
	$.ajax({
		type:"get",
		url:"../api/pages.php",
		async:true,
		data:{
			'page' : 1,
			'qty' : 15
		},
		success:function(str){
			//console.log(123);
			//console.log(str);
			//var data = JSON.parse(str);
			//console.log(data);
			var all = JSON.parse(str);
			var data = all.list;
			//console.log(data);//15
			creat(data);//调用函数
			
			//创建分页节点------------
			var count = Math.ceil(all.total/15);//每页十五条数据
			//console.log(count);//4
			var html2 = '';
			for (var i=0; i<count; i++) {
				html2+='<span>'+(i+1)+'</span>';
			}
			$('#page').html(html2);
			
			//console.log(all.page);//1
			var index=parseInt(all.page)-1;
			$('#page span').eq(index).addClass('click');
			
			//点击每个商品图片就会跳到对应的详情页------------
			$('#ullists .imgs').click(function(){
				var ids = $(this).attr('id');
				//console.log(ids);
				setCookie('ids',ids,'/');
				window.location.href='../html/xiangqing.html';
			});

			//商品列表中添加到购物车事件------------
			$('#ullists .gouwu').on('click',function(){
				var user_id = getCookie('user_id');
				var goods_id = $(this).parent().parent().attr('id');
				//console.log(goods_id);
				setCookie('goods_id',goods_id,'/');
				
				$.ajax({
					type:"post",
					url:"../api/cart.php",
					async:true,
					data:{
						'ins':'insert_data',
						'userid':user_id,
						'goodsid':goods_id
					},
					success:function(str){
						//console.log(str);
						alert('添加成功');
					}
				});
			});

		}
		
	});
	
	//事件委托，点击能够跳转到其他分页--;----------
	$('#page').on('click','span',function(e){
		var page = $(e.target).text();
		var tar = $(e.target);
		tar.addClass('click');
		tar.siblings().removeClass('click');
		
		$.ajax({
			type:"get",
			url:"../api/pages.php",
			async:true,
			data:{
				'page' : page,
				'qty' : 15
			},
			success:function(str){
				var all = JSON.parse(str);
				var data = all.list;
				//console.log(data);//15
				
				creat(data);//调用函数
			}
		});
	});

	//console.log(1223)
});



