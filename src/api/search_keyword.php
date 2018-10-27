<?php
	//搜索关键字接口
	header("content-type:text/html;charset=utf-8");
	
	//连接数据库
	include 'connect.php';
	
	$keyw = isset($_GET['keyword']) ? $_GET['keyword'] : '' ;
//	$keyw = '戒指';
	
	$sql = "select * from pro_inf where title like '%$keyw%'";
	
	//执行语句
	$res = 	$conn->query($sql);
	$row = $res->fetch_all(MYSQLI_ASSOC);
//	var_dump($row);
	
	//数组转换成字符串，echo传给前端，再加上防止出现乱码的代码
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>