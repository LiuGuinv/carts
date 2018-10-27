<?php
	
	//验证注册接口
	//该接口的功能：接收用户名和密码，插入到数据库
	
	//连接数据库
	include 'connect.php';
	
	//接收参数
	$name = isset($_POST['username']) ? $_POST['username'] : '' ;
	$qq = isset($_POST['qq']) ? $_POST['qq'] : '' ;
	$psw = isset($_POST['password']) ? $_POST['password'] : '' ;
	$pho = isset($_POST['phone']) ? $_POST['phone'] : '' ;
	//echo $name.' '.$psw;
	
	//sql语句，插入数据	前提是数据库表里要有name和password者两个字段
	$sql="insert into user_inf(user_name,user_qq,user_password,user_phone) values('$name','$qq','$psw','$pho')";
	
	//执行语句，插入成功会返回true
	$res = $conn->query($sql);
	
	if($res){//插入成功
		echo 'yes';
	}else{
		echo 'no';
	}
	
?>