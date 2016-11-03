//引入原生模块、引入 required 模块
//使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require('http');
//处理url
var url = require('url');
//处理字符串
var querystring = require('querystring');
console.log('开启服务器');

function responseMsg(response,param) {
	var data = {
		key:'b84344e743debbb3da229c8de79d7ff4',
		q: param.q
	}
	http.request({
		//域名
		hostname:'op.juhe.cn',
		//端口
		port:'80',
		// path:'/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf&info='+param.q,
		path:'/onebox/movie/video?'+querystring.stringify(data),
		method:'GET',
		/*headers:{
			'apiKey':'c75ba576f50ddaa5fd2a87615d144ecf'
		}*/
		//回调函数
	},function(request){
		var data = '';
		request.on('data',function(chunk){
			// console.log(data);
			data += chunk;
		})
		request.on('end',function(){
			console.log(data);
			response.end(param.callback+'('+JSON.stringify(data)+')');
		})
	}).on('error',function(e){
		console.log(e.message)
	}).end()

}

//服务器就是干嘛，就是接受前端发给我的请求，响应结果
//console.log(http);

//接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。
//创建服务器
http.createServer(function(request,response){
	//url上的路由
	var pathname = url.parse(request.url).pathname;
	//url上的参数
	var paramStr = url.parse(request.url).query
	console.log('路由：'+pathname);
	console.log('参数：'+paramStr);
	//处理url上的参数，转化为可用的对象
	var param = querystring.parse(paramStr);
	console.log('对象：');
	console.log(param);
	// var datas = {
	// 	name:'wem',
	// 	age:0,
	// 	sex:'cat',
	// 	skill:['ps','nodejs','js']
	// }
	responseMsg(response,param)
	// response.end(param.callback+'('+JSON.stringify(datas)+')');
}).listen(8888)