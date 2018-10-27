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

//点击顶部图片可跳转至首页
$('.logo img').click(function(){
	window.location.href = '../html/index.html';
});
