
//点击请登录时跳转到登录页面
$('#p_topnav #denglu').click(function(){
	window.location.href = "../html/login.html";
});


//表单验证--------
//验证用户名是否存在
$('#username').keyup(function() {
	var usn = $('#username').val();
	//设置开关，用来判断是否能注册
	var isok = false;

	$.ajax({
		type: "post",//传输方式
		url: "../api/checkname.php",//接口url
		async: true,//异步
		data: {//要传输的数据
			'username': usn
		},
		success: function(str) {//成功的回调
			//console.log(str);
			if (str=='yes' && usn!='') {
				//如果可以注册，把开关置成true
				isok = true;
				$('#warn-name').html('*该用户名可以注册').css('color', 'green');
			}else{
				isok = false;
				$('#warn-name').html('*该用户名已经存在且用户名不能为空').css('color', 'red');
			}
		}
	});
	
});

//qq验证----------
$('#userqq').keyup(function(){
	var qq = $('#userqq').val();
	if (/^\d{9}$/.test(qq)) {
		$('#warn-qq').html('*输入成功').css('color','green');
	} else{
		$('#warn-qq').html('*qq只能为9位数字或不能为空').css('color','red');
	}
	
});

//密码验证----------
$('#userpassword').keyup(function(){
	var psw = $('#userpassword').val();
	if (/^\d{5,12}$/.test(psw)) {
		$('#warn-password').html('*密码正确').css('color','green');
	} else{
		$('#warn-password').html('*密码格式不对').css('color','red');
	}
});

//手机号验证-----------
$('#userphone').keyup(function(){
	var phone = $('#userphone').val();
	if (/^1[35789]\d{9}$/.test(phone)) {
		$('#warn-phone').html('*手机号输入正确').css('color','green');
	} else{
		$('#warn-phone').html('*手机号输入格式不对').css('color','red');
	}
});

//点击获取随机码-------------
$('.click-btn').click(function(){
	var yzm = $('#yzm').val();
	var num = Math.random()*9000;
	if (num>1000 && num<10000) {
		yzm = parseInt(num);
		//console.log(parseInt(yzm));
		$('#yzm').val(yzm);
	}
});

//点击注册时的功能-------------
$('#register-btn').click(function(){
	var usn = $('#username').val();
	var psw = $('#userpassword').val();
	var pho = $('#userphone').val();
	var qq = $('#userqq').val();
	var isoks = false;//设置开关 
	
	if (!isoks) {//当isok为true，证明是可以注册的用户名
		if (usn && psw && pho) {//用户名和密码手机号不能为空，否则不给注册
			$.ajax({
				type: "post",
				url: "../api/checkregister.php",
				async: true,
				data: {
					'username': usn,
					'qq': qq,
					'password': psw,
					'phone': pho
				},
				success: function(str) {
					//console.log(usn);
					//console.log(str);
					if (str=='yes') {
						alert("注册成功,马上跳转到登录页面");
						window.location.href = "../html/login.html";
					}
				}
			});
		}
		else{
			alert("注册失败！请填写完整信息");
		}
	}
});


