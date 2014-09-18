function mydialog(title, msg, type, fun, color) {
	var dialogBox = '<div id="mydialog-box"><div id="mydialog-header"><span id="mydialog-close">&times;</span>'+ title +'</div><div id="mydialog-body">'+ msg +'</div><div id="mydialog-footer">';
	if(type == "confirm") {
		dialogBox += '<div id="confirm-ok" class="mydialog-button">ok</div><div id="confirm-cancel" class="mydialog-button">cancel</div>';
	} else {
		dialogBox += '<div id="alert-ok" class="mydialog-button">ok</div>';
	}
	dialogBox += '</div></div>';
	$("body").append(dialogBox);
	//居中显示
	var top = ($(window).height() - $("#mydialog-box").height()) / 2 + "px";
	var left = ($(window).width() - $("#mydialog-box").width()) / 2 + "px";
	$("#mydialog-box").css({"top": top, "left": left});
	//屏幕尺寸发生变化时重新定位
	window.onresize = function() {
		var top = ($(window).height() - $("#mydialog-box").height()) / 2 + "px";
		var left = ($(window).width() - $("#mydialog-box").width()) / 2 + "px";
		$("#mydialog-box").css({"top": top, "left": left});
	}
	if(color == "primary" || "success" || "warning" || "danger") {
		$("#mydialog-box").addClass(color);
	}

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