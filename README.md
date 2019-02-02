![演示效果][1]

## 博客介绍： [奏世界][2]
## 使用说明： 
### 1. 在 `<head> </head>` 任意位置引用样式表： 
```
<link rel="stylesheet" type="text/css" href="./stylesheets/live2d.css">
```

### 2. 在 `<body> </body>` 任意位置加入代码块：
```
<div id="landlord" class="lock">
	<div id="l2d-message"></div>
	<div id="l2d-control">
		<button id="l2d-drag">
			<img src="./images/drag.svg" alt="" draggable="false"/>
		</button>
		<button id="l2d-setting">
			<img src="./images/setting.svg" alt="" draggable="false"/>
		</button>
		<button id="l2d-hide">
			<img src="./images/hide.svg" alt="" draggable="false"/>
		</button>
		<button id="l2d-about">
			<img src="./images/about.svg" alt="" draggable="false"/>
		</button>
	</div>
	<div id="l2d-setting-box" class="l2d-box">
		<p>打扰了，还没做好，你去看看别的吧。。。</p>
	</div>
	<div id="l2d-hide-box" class="l2d-box">
		<h1>真的要离开我吗？</h1>
		<button id="l2d-hide-yes">离开</button>
		<button id="l2d-hide-no">留下</button>
	</div>
	<div id="l2d-about-box" class="l2d-box">
		<p>项目作者：Illyasviel(<a href="https://github.com/illyasviels">@illyasviels</a>)<br />当前版本号：1.0.0。<br />持续更新请关注作者Github。</p>
		<button id="l2d-about-yes">我已知晓</button>
	</div>
	<canvas id="live2d" width="280" height="250" class="live2d"></canvas>
</div>
```

### 3. 在 `</body>` 之前添加脚本文件： 
```
<script type="text/javascript" src="./javascripts/jquery.min.js"></script>
<script type="text/javascript" src="./javascripts/live2d.js"></script>
<script type="text/javascript" src="./javascripts/message.js"></script>
<script type="text/javascript" src="./javascripts/extension.js"></script>
<script type="text/javascript">
	loadlive2d("live2d", "./models/illyasviel/illyasviel.model.json");
</script>
```

  [1]: https://oss.acgme.cn/typecho/live2donweb.jpg
  [2]: https://blog.acgme.cn/index.php/archives/19/