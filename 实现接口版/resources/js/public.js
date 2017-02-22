new function (){
	var _self = this;
	_self.width = 640;//设置默认最大宽度
	_self.fontSize = 100;//默认字体大小
	_self.widthProportion = function(){
        var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p<0.5?0.5:(p>0.75?0.75:p);
    };
	
	_self.changePage = function(){
		document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
	}
	_self.changePage();
	window.addEventListener("resize",function(){_self.changePage();},false);
};

/*******/
Config = {
//	url:'http://172.16.2.30:8080/bqjr-interview-web/',
//	url:'http://10.80.3.135:8080/bqjr-interview-web/',
//	url:'http://10.80.2.35:8080/bqjr-interview-web/',

	url:'http://10.80.2.99:8080/bqjr-interview-web/',
}