layui.define(['layer', 'form'],function(exports){
	// var layer = layui.layer,
	// 	form = layui.form;
	// layer.msg('hello world');
	exports('index', {});
});

/**
 * logic 逻辑模块
 * canvas canvas模块
 * element 进度条
 */
layui.use(['logic', 'canvas', 'element'], function(exports){
	layui.logic.logic();

	layui.canvas.canvas();
})

//canvas1
// layui.use('canvas1', function(){
// 	var canvas = layui.canvas1;
// 	canvas.canvas();
// });
