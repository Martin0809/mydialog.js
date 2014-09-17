function mydialog(title, msg, type, fun) {
	var dialogBox = '<div id="mydialog-box" style="position:relative;width:300px;left:100px;top:100px;background:green;padding:5px;"><div id="mydialog-header" style=""><div id="mydialog-close" style="float:right;">x</div>'+ title +'</div><div id="mydialog-body" style="height:100px;background:white;">'+ msg +'</div><div id="mydialog-footer">';
	if(type == "confirm") {
		dialogBox += '<button id="confirm-ok">ok</button><button id="confirm-cancel">cancel</button>';
	} else {
		dialogBox += '<button id="alert-ok">ok</button>';
	}
	dialogBox += '</div></div>';
	$("body").append(dialogBox);

	//弹窗的关闭
	$("#mydialog-close").click(function() {
		mydialogClose();
	});
	$("#alert-ok").click(function() {
		mydialogClose();
		if(typeof(fun) == "function") fun();
	});
	$("#confirm-ok").click(function() {
		mydialogClose();
		if(typeof(fun) == "function") fun();
	});
	$("#confirm-cancel").click(function() {
		mydialogClose();
	});

	//弹窗的拖拽
	var move = false;
	var _x, _y;
	$("#mydialog-header").click().mousedown(function(e) {
		_x = e.pageX - parseInt($("#mydialog-box").css("left"));
		_y = e.pageY - parseInt($("#mydialog-box").css("top"));
		move = true;
	});
	$(document).mousemove(function(e) {
		if(move) {
			var x = e.pageX - _x;
			var y = e.pageY - _y;
			$("#mydialog-box").css({top:y, left:x});
		}
	}).mouseup(function() {
		move = false;
	});
}

//关闭弹窗的方法
function mydialogClose() {
	$("#mydialog-box").fadeOut(function() {
        $(this).remove();
    });
}