$(function(){
	layer.msg("恭喜项目搭建成功");
	$.ajax({
		url:"/HDB2/credit/insertNewCredit",//请求路径,项目前面千万别少了/，少了的话会自动加上HDB2/到该文件的目录位置
		type:"post",//规定请求的类型（GET 或 POST）。
		data:{},//规定要发送到服务器的数据。
		async:false,//是否异步处理。
		cache:false,//浏览器是否缓存被请求页面
		dataType:"json",//预期的服务器响应的数据类型。
		success:function(data){//当请求成功时运行的函数。
			console.info(data.result);
		},
		error:function(data){// 如果请求失败要运行的函数。
			console.info("失败");
		}
	});
});
