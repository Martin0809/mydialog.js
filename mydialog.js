function mydialog(title, msg, type, fun, color) {
	var dialogBox = '<div id="mydialog-box"><div id="mydialog-header" style=""><div id="mydialog-close" style="float:right;">&times;</div>'+ title +'</div><div id="mydialog-body" style="height:100px;background:white;">'+ msg +'</div><div id="mydialog-footer" style="background:white; text-align:right">';
	if(type == "confirm") {
		dialogBox += '<button id="confirm-ok">ok</button><button id="confirm-cancel">cancel</button>';
	} else {
		dialogBox += '<button id="alert-ok">ok</button>';
	}
	dialogBox += '</div></div>';
	$("body").append(dialogBox);

	//添加样式
	if(typeof(color) != "string") {
		color = "#e1e1e8";
	}
	$("#mydialog-box").css({
		"display": "none",
		"position": "fixed",
		"padding": "0 5px 5px 5px",
		"width": "300px",
		"background": color,
	});
	var top = ($(window).height() - $("#mydialog-box").height()) / 2 + "px";
	var left = ($(window).width() - $("#mydialog-box").width()) / 2 + "px";
	$("#mydialog-box").css({"top": top, "left": left});

	$("#mydialog-box").fadeIn(function() {
		$(this).css("display", "block");
	});

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
		_x = e.pageX - $("#mydialog-box").offset().left;
		_y = e.pageY - $("#mydialog-box").offset().top;
		move = true;
	});
	$(document).mousemove(function(e) {
		if(move) {
			var x = e.pageX - _x + "px";
			var y = e.pageY - _y + "px";
			$("#mydialog-box").css({"top":y, "left":x});
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