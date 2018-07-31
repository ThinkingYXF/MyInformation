layui.define(['layer', 'form'],function(exports){
	var layer = layui.layer,
		form = layui.form;
	// layer.msg('hello world');
	exports('index', {});
});

//逻辑模块
layui.use('logic', function(){
	layui.logic.logic();
})

//canvas模块
layui.use('canvas', function(){
	var canvas = layui.canvas;
	canvas.canvas();
});

//canvas1
// layui.use('canvas1', function(){
// 	var canvas = layui.canvas1;
// 	canvas.canvas();
// });
