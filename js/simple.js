//移动端ren适配方案

(function () {
	var maxWidth = 540;
	var minWidth = 320;
	var htmlDom = document.documentElement;
	var dpr = window.devicePixelRatio || 1;
	dpr = dpr >= 3 ? 3 : (dpr >=2 ? 2 : 1);
	htmlDom.setAttribute('data-dpr', dpr)
	var scale = 1 / dpr;
	var metaDom = document.querySelector('meta[name="viewport"]');
	
	htmlDom.setAttribute('max-width', maxWidth + 'px');
	htmlDom.setAttribute('min-width', minWidth + 'px');
	var content = "width=device-width, initial-scale="+ scale +",maximum-scale="+ scale +",minimum-scale="+ scale +", user-scalable=no";

	if (metaDom) {
		metaDom.setAttribute('content', content);
	} else {
		var meta = document.createElement('meta');
		meta.setAttribute('name', 'viewport');
		meta.setAttribute('content', content)
		document.head.appendChild(meta)
	}


	setHtmlFont();
	window.addEventListener('resize', setHtmlFont);
	function setHtmlFont() {
		var num = 18.75;

		var viewWidth = htmlDom.getBoundingClientRect().width || window.innerWidth;
		
		// console.log(window.innerWidth)
		if (maxWidth && viewWidth / dpr >= maxWidth) {
			viewWidth = maxWidth * dpr
		} else if (minWidth && viewWidth /dpr <= minWidth) {
			viewWidth = minWidth * dpr
		}
		// console.log(viewWidth);
		htmlDom.style.fontSize = viewWidth / 375 * 40 + 'px';
	}	
})()