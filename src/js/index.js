//首页侧边栏登录
$('#p_inside .userlog').click(function(){
	window.location.href = "../html/login.html";
});

//点击侧边栏跳转购物车----------
$('#p_inside .cart').click(function(){
	window.location.href = "../html/carts.html";
});

//点击立即登录-----
$('.p_entrance .login .bt').click(function(){
	window.location.href = "../html/login.html";
});

//免费注册跳转
$('#p_topnav .zhuce').click(function(){
	window.location.href = '../html/register.html';
});

//请登录跳转
$('#p_topnav .denglu').click(function(){
	window.location.href = '../html/login.html';
});

//头部鼠标滑过
//我的批发户
$('#myhu').hover(function(){
	$('#two').slideDown().css('display','block');
},function(){
	$('#two').slideUp().css('display','none');
});

//收藏夹
$('#shoucangjia').hover(function(){
	$('#scang').slideDown().css('display','block');
},function(){
	$('#scang').slideUp().css('display','none');
});

//平台客服
$('#kefu').hover(function(){
	$('#kfu').slideDown().css('display','block');
},function(){
	$('#kfu').slideUp().css('display','none');
});


//二级菜单--------------
var aa='';
$(".mainnav_dl-con_ul .mainnav_dl-li").mouseover(function(){
	for(let i=0;i<$(".mainnav_dl-con_ul .mainnav_dl-li").size();i++){
		$(".mainnav_dl-con_ul .mainnav_dl-li").eq(i).css('background','#003e8a');
		$(".mainnav_dl-con_ul .mainnav_dl-li p").eq(i).css('color','white');
		$(".mainnav_dl-con_ul .mainnav_dl-li div").eq(i).children().css('color','white');
	}
	aa=$(this);
	$("#twomenu").css("display","block");
	fn($(this),'#003e8a','white')
});
$("#twomenu").mouseenter(function(){
	$("#twomenu").css("display","block");
	fn(aa,'#003e8a','white')
});
$("#twomenu").mouseleave(function(){
	$("#twomenu").css("display","none");
	fn(aa,'white','#003e8a')
});
function fn(aa,color,bcolor){
	aa.css('background',bcolor);
	aa.children().eq(0).children().eq(1).css('color',color);
	aa.children().eq(1).children().css('color',color);
}


//选项卡部分
//给每个按钮绑定点击事件
//新品爆款
$('#tab #btn').mouseover(function(){
	//当前高亮显示前要清除其他按钮的样式
	$('#tab #btn').attr('class','');
	//点击哪个哪个就高亮显示
	$(this).attr('class','active');
	
	//点击按钮时div跟着一起切换
	//排他，清除所有
	$('#tab #content').css('display','none');
	//根据下标判断点击的是哪个，对应的div就显示
	$('#tab #content').eq($(this).index()).css('display','block');
});

//时尚饰品
$('#tables #btns').mouseover(function(){
	//当前高亮显示前要清除其他按钮的样式
	$('#tables #btns').attr('class','');
	//点击哪个哪个就高亮显示
	$(this).attr('class','active');
	
	//点击按钮时div跟着一起切换
	//排他，清除所有
	$('#tables .showfasion').css('display','none');
	//根据下标判断点击的是哪个，对应的div就显示
	$('#tables .showfasion').eq($(this).index()).css('display','block');
});

//纯银首饰
$('#ittab #btns').mouseover(function(){
	//当前高亮显示前要清除其他按钮的样式
	$('#ittab #btns').attr('class','');
	//点击哪个哪个就高亮显示
	$(this).attr('class','active');
	
	//点击按钮时div跟着一起切换
	//排他，清除所有
	$('#ittab .xianshi').css('display','none');
	//根据下标判断点击的是哪个，对应的div就显示
	$('#ittab .xianshi').eq($(this).index()).css('display','block');
});

//适销平台
$('#xiaoshou #btns').mouseover(function(){
	//当前高亮显示前要清除其他按钮的样式
	$('#xiaoshou #btns').attr('class','');
	//点击哪个哪个就高亮显示
	$(this).attr('class','active');
	
	//点击按钮时div跟着一起切换
	//排他，清除所有
	$('#xiaoshou .showments').css('display','none');
	//根据下标判断点击的是哪个，对应的div就显示
	$('#xiaoshou .showments').eq($(this).index()).css('display','block');
});


//数据渲染产品部分
$(document).ready(function(){
	$.ajax({
		type:"get",
		url:"../api/products.php",
		async:true,
		success:function(str){
			var data = JSON.parse(str);
			//console.log(data);
			
			//将数据渲染到页面
			//新品爆款-----------------------------
			var html1='';
			for (var i=0; i<8; i++) {
				//console.log(data[i].id);
				html1+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tab_list1').html(html1);
			
			var html2='';
			for (var i=8; i<16; i++) {
				html2+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tab_list2').html(html2);
			
			var html3='';
			for (var i=15; i<23; i++) {
				html3+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tab_list3').html(html3);
			
			var html4='';
			for (var i=23; i<31; i++) {
				html4+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tab_list4').html(html4);
			
			var html5='';
			for (var i=31; i<39; i++) {
				html5+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tab_list5').html(html5);
			
			var html6='';
			for (var i=39; i<47; i++) {
				html6+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tab_list6').html(html6);
			
			
			//时尚饰品、纯银首饰、适销平台部分---------------------------
			var html11='';
			for (var i=0; i<6; i++) {
				html11+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tables_list1').html(html11);
			$('#chunyin_list1').html(html11);
			$('#xiaoshou_list4').html(html11);
			
			var html12='';
			for (var i=6; i<12; i++) {
				html12+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tables_list2').html(html12);
			$('#chunyin_list2').html(html12);
			$('#xiaoshou_list5').html(html12);
			
			var html13='';
			for (var i=12; i<18; i++) {
				html13+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tables_list3').html(html13);
			$('#chunyin_list3').html(html13);
			$('#xiaoshou_list1').html(html13);
			
			var html14='';
			for (var i=19; i<25; i++) {
				html14+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tables_list4').html(html14);
			$('#chunyin_list4').html(html14);
			$('#xiaoshou_list2').html(html14);
			
			var html15='';
			for (var i=25; i<31; i++) {
				html15+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tables_list5').html(html15);
			$('#chunyin_list5').html(html15);
			$('#xiaoshou_list3').html(html15);
			
			var html16='';
			for (var i=31; i<37; i++) {
				html16+=`
					<li>
						<p class="img"><img src="${data[i].src}"/></p>
						<p class="title">${data[i].title}</p>
						<p class="price">批发：￥<span class="pri">${data[i].pri}</span></p>
					</li>
				`;
			}
			$('#tables_list6').html(html16);
			$('#chunyin_list6').html(html16);
			$('#xiaoshou_list6').html(html16);
			
		}
	});
});


function update() {
	//刷新面板的状态，根据用户的登陆状态而定的。
	//如果是登陆的：显示退出面板，隐藏注册和登陆面板
	//如果是退出的：显示注册和登陆面板，隐藏退出面板
	var uid = getCookie('user_id');
	//console.log(uid);
	if(uid) {
		$.ajax({
			type:"post",
			url:"../api/index.php",
			async:true,
			data:{
				'userid':uid
			},
			success:function(str){
				//console.log(str);
				var data = JSON.parse(str);
				//console.log(data)
				for (var i=0; i<data.length; i++) {
					var name = data[i].user_name;
					//console.log(name)
					if(uid) {
						//登陆状态
						$('.p_entrance .login .tis').html(name);
						$('.p_entrance .login .ld').html('欢迎来到批发户');
						$('.p_entrance .login .bt').html('退出用户');
						$('.p_entrance .login').css('background','lightpink');
					}else{
						//退出状态
						
					}
				}
			}
		});
	}
}

update();


//退出----------
$('.p_entrance .login .bt').click(function(){
//	console.log(123)
	if(this.innerHTML=='立即登录'){
		window.location.href = "../html/login.html";
	}else{
		setCookie('user_id','',-1,"/");
		//	console.log(user_id);
		window.location.reload();//刷新当前页面
	}
	
});	


//关键字搜索--------
$('#search-form #btn2').click(function(){
	var value = $('#search-form #s_text').val();
	//console.log(value);
	$.ajax({
		type:"get",
		url:"../api/search_keyword.php",
		async:true,
		data:{
			'keyword':value
		},
		success:function(str){
			//console.log(str);
			window.location.href = "../html/fenye.html";
		}
	});
	
});

