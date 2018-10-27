//表单验证--------
//验证用户名是否存在
$('#login_name').keyup(function() {
	var usn = $('#login_name').val();
	var psw = $('#login_password').val();
	//设置开关，用来判断是否能注册
	var isok = false;

	$.ajax({
		type: "post",//传输方式
		url: "../api/checkname.php",//接口url
		async: true,//异步
		data: {//要传输的数据
			'username': usn,
			'password': psw
		},
		success: function(str) {//成功的回调
//			console.log(usn);
//			console.log(psw);
//			console.log(str);
			if (str=='no' && psw=='') {
				isok = true;
				$('#names').html('*用户名正确').css('color', 'green');
			}else{
				isok = false;
				$('#names').html('*用户名错误').css('color', 'red');
			}
		}
	});
});


//登录部分功能----------
function Login(){
	var usn = $('#login_name').val();
	var psw = $('#login_password').val();
	var isoks = false;//设置开关 
	
	if (!isoks) {//当isok为true，证明是可以登录的用户名
		if (usn && psw) {//用户名和密码不能为空，否则不能登录
			$.ajax({
				type: "post",
				url: "../api/checklogin.php",
				async: true,
				data: {
					'username': usn,
					'password': psw
				},
				success: function(str) {
					//console.log(usn);
					//console.log(str);
					var data = JSON.parse(str);
					console.log(data);
					var user_id=data[0].user_id;
					//console.log(user_id);
					
					if (data[1].no=='no') {
						alert("登录成功");
						setCookie('user_id',user_id,1,'/');
						window.location.href = "../html/index.html";
					}
				}
			});
		}
		else{
			alert("登录失败！密码不能为空");
		}
	}
}


//点击登录时功能模块------------
$('#login_btn').click(function(){
	Login();
});


//回车登录---------------
$(document).keydown(function(ev){
	//console.log(ev.keyCode);//获取键值   键值13是回车键
	if(ev.keyCode==13){
		//console.log(123)
		Login();
	}
});