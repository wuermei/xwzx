	// 将路由,触摸注入
	var app = angular.module('wem', ['ngRoute','ngTouch']);

	// 路由
	app.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/index',{
			templateUrl:'views/index.html',
			controller:'indexCtrl'
		})
		.when('/shehui',{
			templateUrl:'views/shehui.html',
			controller:'shehuiCtrl'
		})
		.when('/guonei',{
			templateUrl:'views/guonei.html',
			controller:'guoneiCtrl'
		})
		.when('/guoji',{
			templateUrl:'views/guoji.html',
			controller:'guojiCtrl'
		})
		.when('/yule',{
			templateUrl:'views/yule.html',
			controller:'yuleCtrl'
		})
		.when('/tiyu',{
			templateUrl:'views/tiyu.html',
			controller:'tiyuCtrl'
		})
		.when('/junshi',{
			templateUrl:'views/junshi.html',
			controller:'junshiCtrl'
		})
		.when('/keji',{
			templateUrl:'views/keji.html',
			controller:'kejiCtrl'
		})
		.when('/caijing',{
			templateUrl:'views/caijing.html',
			controller:'caijingCtrl'
		})
		.when('/shishang',{
			templateUrl:'views/shishang.html',
			controller:'shishangCtrl'
		})
		//一个类型的内容具体展开对应一个控制器,一个页面
		.when('/detail1/:id',{
			templateUrl:'detail/detail1.html',
			controller:'detailCtrl1'
		})
		.when('/detail2/:id',{
		templateUrl:'detail/detail2.html',
		controller:'detailCtrl2'
		})
		.when('/detail3/:id',{
			templateUrl:'detail/detail3.html',
			controller:'detailCtrl3'
		})
		.when('/detail4/:id',{
		templateUrl:'detail/detail4.html',
		controller:'detailCtrl4'
		})
		.when('/detail5/:id',{
			templateUrl:'detail/detail5.html',
			controller:'detailCtrl5'
		})
		.when('/detail6/:id',{
		templateUrl:'detail/detail6.html',
		controller:'detailCtrl6'
		})
		.when('/detail7/:id',{
			templateUrl:'detail/detail7.html',
			controller:'detailCtrl7'
		})
		.when('/detail8/:id',{
		templateUrl:'detail/detail8.html',
		controller:'detailCtrl8'
		})
		.when('/detail9/:id',{
			templateUrl:'detail/detail9.html',
			controller:'detailCtrl9'
		})
		.when('/detail10/:id',{
		templateUrl:'detail/detail10.html',
		controller:'detailCtrl10'
		})
		.otherwise({
			redirectTo:'/index',		
		})
	}])


	app.run([function($rootScope) {
		/*http.get('isLogin.php',{
			params:{
			cookie:'123'
		}}).success(function(data){
			if(data.isLogin){			
			}else{
				window.location.href = '#/login'
			}
		})*/
		//自执行函数
		// 字体根据屏幕的大小自适应
		(function(doc, win) {
			var docEl = doc.documentElement,
				recalc = function() {
					var clientWidth = docEl.clientWidth;
					if(!clientWidth) return;
					if(clientWidth >= 740) {
						clientWidth = 740;
					}
					if(clientWidth <= 320) {
						clientWidth = 320;
					}
					docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
				};
			if(!doc.addEventListener) return;
			win.addEventListener('resize', recalc, false);
			doc.addEventListener('DOMContentLoaded', recalc, false);
		})(document, window);
		console.log("进入路由前先执行");
	}])

// 新闻列表控制器========================================================================
	//首页控制器indexCtrl
	app.controller('indexCtrl',function($scope,$http,$window,$routeParams,swipe){
		//请求新闻数据
		$scope.loading = true;
		swipe.me();
		$http.jsonp('news.php',{
			params:{
				type: 'top',
				callback:'JSON_CALLBACK'
				
			}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;

			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail1/' + id ;
		}
	})

	//做分类点击
	app.controller('shehuiCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'shehui',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
				
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail2/' + id ;
		}

	})

	app.controller('guoneiCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'guonei',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
				
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail3/' + id ;
		}
	})

	app.controller('guojiCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'guoji',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
			
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail4/' + id ;
		}
	})

	app.controller('yuleCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'yule',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
			
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail5/' + id ;
		}
	})

	app.controller('tiyuCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'tiyu',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
				
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail6/' + id ;
		}
	})

	app.controller('junshiCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'junshi',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
				
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail7/' + id ;
		}
	})

	app.controller('kejiCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'keji',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
				
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail8/' + id ;
		}
	})

	app.controller('caijingCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'caijing',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
				
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail9/' + id ;
		}
	})

	app.controller('shishangCtrl',function($scope,$http,$routeParams,$window){
		$scope.loading = true;
		$http.jsonp('news.php',{
				params:{
					type: 'shishang',
					callback:'JSON_CALLBACK',
					
				}
			}).success(function(data){
				$scope.loading = false;
				$scope.news = data.result.data;
				
			})
		$scope.detail = function(id){
			console.log(id);
			$window.location.href = '#/detail10/' + id ;
		}
	})

// 新闻详情页控制器========================================================================
	//点击每条新闻的标题，进入具体内容，每一类型新闻对应一个控制器
	/*严格的上下文转义(SCE)是一种需要在一定的语境中导致AngularJS绑定值被标记为安全使用语境的模式。*/
	app.controller('detailCtrl1',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'top',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			//console.log($scope.news);
			//请求每条新闻的url去获取详情页
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;				
			})
		}) 
	})

	app.controller('detailCtrl2',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'shehui',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;						
			})
		}) 
	})

	app.controller('detailCtrl3',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'guonei',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;						
			})
		}) 
	})

	app.controller('detailCtrl4',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'guoji',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;					
			})
		}) 
	})

	app.controller('detailCtrl5',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'yule',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;						
			})
		}) 
	})

	app.controller('detailCtrl6',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'tiyu',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;					

			})
		}) 
	})

	app.controller('detailCtrl7',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'junshi',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;						
			})
		}) 
	})

	app.controller('detailCtrl8',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'keji',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;					
			})
		}) 
	})

	app.controller('detailCtrl9',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'caijing',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;						
			})
		}) 
	})

	app.controller('detailCtrl10',function($scope,$routeParams,$http,$sce){
		$scope.loading = true;
		$http.jsonp('news.php',{
			params:{
				type: 'shishang',
				callback:'JSON_CALLBACK',
			}
		}).success(function(data){
			
			$scope.news = data.result.data[$routeParams.id];
			console.log($scope.news);
			//请求每条新闻的url去获取详情页内容
			$http.jsonp('detail.php',{
				params:{
					url: $scope.news.url,
					callback:'JSON_CALLBACK',
				}
			}).success(function(info){
				var html = info;
				//把未处理的html的格式安全处理，并配合ng-bind-html渲染到视图
				$scope.htmlSced = $sce.trustAsHtml(html.match(/<article[^>]*>([\s\S]*?)<\/article>/g)[0]);
				$scope.loading = false;						
			})
		}) 
	})
	
//组件============================================================================
	//底部组件
	app.directive('foot',function(){
		return{
			templateUrl: 'directive/footer.html'
		}
	})

//指令============================================================================
	//导航条点击，对dom的操作
	app.directive('active',function(){
		return{
			link:function(scope,elm,attr){
				//js的监听事件用addEventListener，jq用on
				elm.find('li').on('touchend',function(){
					//console.log(angular.element(this));
					elm.find('li').find('a').removeClass('active');
					angular.element(this).find('a').addClass('active');
				})
				
			}
		}
	})

//服务============================================================================
	//swiper滑动服务
	app.service('swipe', function() {
		return {
			me: function() {
				var myswiper = new Swiper('.swiper-container', {
					loop: true, // 一个循环的滑动
					fade: true,//jianbianxiaoguo
					pagination: '.swiper-pagination', // 分页器
					autoplay: '2000',

				});
			}
		}
	})



// /<article[^>]*>([\s\S]*?)<\/article>/g
// 可以匹配文档中任何一个位置。
// \s 空白符
// \S 非空白符
// [\s\S]任意字符
// [\s\S]* 0个到任意多个字符
// [\s\S]*?   0个字符，匹配任何字符前的位置。
// [^>]*表示0个或多个不为>的字符