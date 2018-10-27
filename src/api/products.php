<?php
	//查询数据（取数据）接口
	
	//连接数据库
	include 'connect.php';
	
	//写查询语句	select <字段1, 字段2, …> from < 表名 > where < 表达式 >;
	$sql = 'select * from pro_inf';//查询表中所有信息
	//执行查询语句
	$res = $conn->query($sql);
	//获取里面的结果集
	//通过fetch_all(MYSQLI_ASSOC)方法得到数据，是一个数组类型
	$row = $res->fetch_all(MYSQLI_ASSOC);
//	var_dump($row);
	
	//数组转换成字符串，echo传给前端，再加上防止出现乱码的代码
	echo json_encode($row,JSON_UNESCAPED_UNICODE);
	
	//关闭查询结果集，避免资源浪费
	$res->close();
	//关闭数据库，避免资源浪费
	$conn->close();
?>