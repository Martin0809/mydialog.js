mydialog.js
===========

一个可以实现弹窗效果的插件。

###1.引用

目前的js文件是基于jquery实现的，所以在引入mydialog.js文件前需要引入jquery文件。

```
<script src="jquery-2.1.1.js"></script>
<script src="mydialog.js"></script>
```

为了便于维护，将弹窗的样式移到了css文件中。这样，我们还需要引入css文件。

```
<link rel="stylesheet" href="mydialog.css">
```

###2.使用

在需要弹出窗口的事件上调用`mydialog()`方法，例如：

```
<button onclick="mydialog()">mydialog</button>
```

当然，方法中可以传入6个参数，`mydialog(title, msg, type, fun, color, bool)`：

*   `title`：string类型，表示弹窗的标题
*   `msg`：string类型，将会显示在弹窗的内容中
*   `type`：string类型，可以传入“confirm”，其他值将会默认为“alert”
*   `fun`：function类型，将作为点击“ok”按钮后执行的方法
*   `color`：string类型，可传入“primary”、“success”、“waring”和“danger”，其他值将会默认为“default”
*   `bool`：boolean类型，默认值为“false”，传入“true”时弹窗将允许拖拽
