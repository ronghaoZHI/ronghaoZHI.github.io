// loaded
$(function () {
	// body...	
	// alert(rolls.length);
	// alert(pimgs.length);
	playimgs();
	// b();
	
	loadhtml();
	nav_a_selected();
	tagsCloud();
	// 待优化 --获取点击次数 -排序 -获取 -赋值
	contentright_change(
		'&nbsp 原生JS实现tab标签栏',
		'&nbsp 浏览器的重绘与重写',
		'&nbsp 浅谈Vue.js',
		'&nbsp hhhhhhhhhhh',
		'&nbsp hhhhhhhhhhh',
		'&nbsp hhhhhhhhhhh',
		'hhh1',
		'hhh2',
		'hhh',
		'hhh',
		'hhh',
		'hhh');
	// 
	
	
	
});

// nav_a
function nav_a_selected(){
	var obj=null;
	var As=document.getElementById("headnav").getElementsByTagName("a");

	obj = As[0];
	for(var i=1;i<As.length;i++){
		if(window.location.href.indexOf(As[i].href)>=0)
		obj=As[i];
	
		}
	obj.id ='topnav_current'
	 
}

// 
// // 返回顶部
var totop = $("#totop")
$(window).scroll(function(e){
	b();		
})
function b(){
	h = $(window).height()/2;
	t = $(document).scrollTop();
	if(t > h){
		$(totop).show();
	}else{
		$(totop).hide();
	}
}
$(totop).click(function(){
		$(document).scrollTop(0);	
	});

	
// // 
// 轮播图 相关参数
// rollswhite 为轮播小球选中时的样式
var i=0;                 //img-index
var pimgs = $(".pimg");   // imgs 图片集合
var rolls = $(".rolls");  // 轮播球 集合
var toleft = $(".toleft");  //前一个
var toright = $(".toright");  //后一个

function Init()
{
	 // $(rolls[i]).addClass("rollswhite");
	 $(pimgs).eq(i).fadeIn(300).siblings().fadeOut(300);
	 $(rolls).eq(i).addClass("rollswhite").siblings().removeClass("rollswhite");
}
function playimgs()
{
	Init(); 
    Timer = setInterval(imgsstart,5000);
}
function stopimgs(){
	
	clearInterval(Timer);
	$(pimgs).stop();
	$(rolls).stop();
}
function imgsstart(){ 
	imgshow();
	add();
}

function imgshow(){
	
	// $(".pimg").addClass("imgHide");
	// $(pimgs[i]).removeClass("imgHide");
	// $(".rolls").removeClass("rollswhite");
	// $(rolls[i]).addClass("rollswhite");
	$(pimgs).eq(i).fadeIn(300).siblings().fadeOut(300);
	$(rolls).eq(i).addClass("rollswhite").siblings().removeClass("rollswhite");
}

function add(){	
	i++;
	if(i===pimgs.length)
		i=0;
}
//添加 上一个下一个点击事件
$(toleft).click(function(){

	stopimgs();
	i--;
	if(i===-1){
		i=pimgs.length-1;
		imgshow();
	}else{
	
		imgshow();
	}
	playimgs();
})


$(toright).click(function(){

	stopimgs();
	i++;
	if(i===pimgs.length){
		i=0;
		imgshow();
	}else{
	
		imgshow();
	}
	playimgs();
})

$(rolls).click(function(){
	stopimgs();
	i = $(this).index();
	// alert(i);
	if (i !== -1) {
		imgshow();
		}
	playimgs();
})

//// 获取时间 
var html ="";
var datelocalweek=new Array("星期日", "星期一", "星期二","星期三","星期四", "星期五","星期六");
var datelocalnow=new Date(); 
var datelocalyear=datelocalnow.getFullYear(); 
var datelocalmonth=(datelocalmonth="0"+(datelocalnow.getMonth()+1)).substr(datelocalmonth.length-2,2); 
var datelocalday=(datelocalday="0"+datelocalnow.getDate()).substr(datelocalday.length-2,2); 
var datelocalweekday=datelocalweek[datelocalnow.getDay()]; 
	html+="<font color=#f96c0f>北京时间：</font><font color=#333333> "+datelocalyear+"年"+datelocalmonth+"月"+datelocalday+"日"+" "+datelocalweekday+"</font><br>"; 
	$('.dateshow').html(html);

// 获取天气
// var city ='北京';
// var url0='api.tocus.com.cn/weather2.php?send='+city;
// 	$.ajax({
// 	    type:'get',
// 	    url:url0,
// 	    // data:{location:city},
// 	    dataType:'json',
// 	    success:function(data){
// 	        var weather_data = data;
	        
// 	        html+="<font color=#f96c0f>北京天气：</font><font color=#333333> "+weather_data+"</font>";
// 	        $('.dateshow').html(html);
// 	    }
// 	});


// HTTP 请求：GET vs. POST

// 两种在客户端和服务器端进行请求-响应的常用方法是：GET 和 POST。
// GET - 从指定的资源请求数据
// POST - 向指定的资源提交要处理的数据
// GET 基本上用于从服务器获得（取回）数据。注释：GET 方法可能返回缓存数据。
// POST 也可用于从服务器获取数据。不过，POST 方法不会缓存数据，并且常用于连同请求一起发送数据。
// 
// $(".").click(function(event) {
// 	/* Act on the event */
// 	$.get('.php', function(data,status) {
// 		/*optional stuff to do after success */
// 		alert("data:"+data+"status:"+status);
// 	});
// });

// $(".").click(function(event) {
// 	/* Act on the event */
// 	$.post('file', {param1: 'value1',param1:'value1'}, function(data, status) {
// 		/*optional stuff to do after success */
// 		alert("data:"+data+"status:"+status);
// 	});
// });


// 修改 contentright 最新文章- hot 词汇
function contentright_change(Pname1,Pname2,Pname3,Pname4,Pname5,Pname6,Wname1,Wname2,Wname3,Wname4,Wname5,Wname6){
	var Pnames = document.getElementById("newshotul").getElementsByTagName("a");
	var Wnames = document.getElementById("newshotworddiv").getElementsByTagName("a");

	for(var i=0; i<arguments.length;i++)
	{
		if(arguments[i] == ""&& arguments[i] == null)
			{return;}
		if(i<6){
			console.log(Pnames[i]);
			Pnames[i].innerHTML = arguments[i].toString();  

		}
		else if(i>=6) {
			console.log(Wnames[i-6]);
			Wnames[i-6].innerHTML = arguments[i].toString(); 
		}
	}


}


// news  ajax
function load_news_click(url){
	var xmlhttp;
	if(window.XMLHttpRequest)
		// IE7+,
		xmlhttp = new XMLHttpRequest();
	else {
			// IE5,6
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				document.getElementById("contentleft").innerHTML = xmlhttp.responseXML;
			}
		}
	xmlhttp.open("POST", url,true);
	xmlhttp.send();

}


//html 动态写入

function loadhtml(){
	var txt="<font>这是一个<em>基于GitHub Pages的</em> 静态网页--主要用于<em>Test</em>,具体搭建过程网上有很多教程,如果感兴趣可以尝试去搭建一个个人静态<em>blog</em></font>"
	var txt0="";
	// var x = 0;
	for (var i = 0; i < txt.length; i++) {
		
		(function(i){ 
			setTimeout(function(){
				txt0+=txt[i];
				$("#writehtml>p").html(txt0);
				// console.log('out:s% s%',i,txt0[i]);
				},i*150);
			})(i);
			// x++
		}
}



/************tags move************************/ 
function tagsCloud(){
	
	var radius = 80;
	var dtr = Math.PI/180;
	var d=300;
	var mcList = [];
	var active = false;
	var lasta = 1;
	var lastb = 1;
	var distr = true;
	var tspeed=15;
	var size=250;

	var mouseX=0;
	var mouseY=0;

	var howElliptical=1;

	var aA=null;
	var oDiv=null;		
	
	var i=0;
	var oTag=null;
	
	oDiv=document.getElementById('tagsCloud');
	if(oDiv){
	oDiv.style.display="block";
	
	aA=oDiv.getElementsByTagName('a');	
	
	for(i=0;i<aA.length;i++)
	{
		oTag={};
		
		oTag.offsetWidth=aA[i].offsetWidth;
		oTag.offsetHeight=aA[i].offsetHeight;
		
		mcList.push(oTag);
	}
	
	sineCosine( 0,0,0 );
	
	positionAll();
	
	oDiv.onmouseover=function ()
	{
		active=true;
	};
	
	oDiv.onmouseout=function ()
	{
		active=false;
	};
	
	oDiv.onmousemove=function (ev)
	{
		var oEvent=window.event || ev;
		var thisScrollTop = document.documentElement.scrollTop + document.body.scrollTop;
		
		mouseX=oEvent.clientX-(oDiv.offsetLeft+oDiv.offsetWidth/2);
		mouseY=oEvent.clientY-(oDiv.offsetTop+oDiv.offsetHeight/2)+thisScrollTop-60;		
		
		mouseX/=5;
		mouseY/=5;
	};
	
	setInterval(update, 30);	
	
	function update()
	{
		var a;
		var b;
		
		if(active)
		{
			a = (-Math.min( Math.max( -mouseY, -size ), size ) / radius ) * tspeed;
			b = (Math.min( Math.max( -mouseX, -size ), size ) / radius ) * tspeed;
		}
		else
		{
			a = lasta * 0.98;
			b = lastb * 0.98;
		}
		
		lasta=a;
		lastb=b;
		
		if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
		{
			return;
		}
		
		var c=0;
		sineCosine(a,b,c);
		for(var j=0;j<mcList.length;j++)
		{
			var rx1=mcList[j].cx;
			var ry1=mcList[j].cy*ca+mcList[j].cz*(-sa);
			var rz1=mcList[j].cy*sa+mcList[j].cz*ca;
			
			var rx2=rx1*cb+rz1*sb;
			var ry2=ry1;
			var rz2=rx1*(-sb)+rz1*cb;
			
			var rx3=rx2*cc+ry2*(-sc);
			var ry3=rx2*sc+ry2*cc;
			var rz3=rz2;
			
			mcList[j].cx=rx3;
			mcList[j].cy=ry3;
			mcList[j].cz=rz3;
			
			per=d/(d+rz3);
			
			mcList[j].x=(howElliptical*rx3*per)-(howElliptical*2);
			mcList[j].y=ry3*per;
			mcList[j].scale=per;
			mcList[j].alpha=per;
			
			mcList[j].alpha=(mcList[j].alpha-0.6)*(10/6);
		}
		
		doPosition();
		depthSort();
	}

	function depthSort()
	{
		var i=0;
		var aTmp=[];
		
		for(i=0;i<aA.length;i++)
		{
			aTmp.push(aA[i]);
		}
		
		aTmp.sort
		(
			function (vItem1, vItem2)
			{
				if(vItem1.cz>vItem2.cz)
				{
					return -1;
				}
				else if(vItem1.cz<vItem2.cz)
				{
					return 1;
				}
				else
				{
					return 0;
				}
			}
		);
		
		for(i=0;i<aTmp.length;i++)
		{
			aTmp[i].style.zIndex=i;
		}
	}

	function positionAll()
	{
		var phi=0;
		var theta=0;
		var max=mcList.length;
		var i=0;
		
		var aTmp=[];
		var oFragment=document.createDocumentFragment();
		
		//Ëæ»úÅÅÐò
		for(i=0;i<aA.length;i++)
		{
			aTmp.push(aA[i]);
		}
		
		aTmp.sort
		(
			function ()
			{
				return Math.random()<0.5?1:-1;
			}
		);
		
		for(i=0;i<aTmp.length;i++)
		{
			oFragment.appendChild(aTmp[i]);
		}
		
		oDiv.appendChild(oFragment);
		
		for( var i=1; i<max+1; i++){
			if( distr )
			{
				phi = Math.acos(-1+(2*i-1)/max);
				theta = Math.sqrt(max*Math.PI)*phi;
			}
			else
			{
				phi = Math.random()*(Math.PI);
				theta = Math.random()*(2*Math.PI);
			}
			//×ø±ê±ä»»
			mcList[i-1].cx = radius * Math.cos(theta)*Math.sin(phi);
			mcList[i-1].cy = radius * Math.sin(theta)*Math.sin(phi);
			mcList[i-1].cz = radius * Math.cos(phi);
			
			aA[i-1].style.left=mcList[i-1].cx+oDiv.offsetWidth/2-mcList[i-1].offsetWidth/2-10+'px';
			aA[i-1].style.top=mcList[i-1].cy+oDiv.offsetHeight/2-mcList[i-1].offsetHeight/2+'px';
		}
	}

	function doPosition()
	{
		var l=oDiv.offsetWidth/2;
		var t=oDiv.offsetHeight/2;
		for(var i=0;i<mcList.length;i++)
		{
			aA[i].style.left=mcList[i].cx+l-mcList[i].offsetWidth/2-10+'px';
			aA[i].style.top=mcList[i].cy+t-mcList[i].offsetHeight/2+'px';
			
			aA[i].style.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';
			
			aA[i].style.filter="alpha(opacity="+100*mcList[i].alpha+")";
			aA[i].style.opacity=mcList[i].alpha;
		}
	}

	function sineCosine( a, b, c)
	{
		sa = Math.sin(a * dtr);
		ca = Math.cos(a * dtr);
		sb = Math.sin(b * dtr);
		cb = Math.cos(b * dtr);
		sc = Math.sin(c * dtr);
		cc = Math.cos(c * dtr);
	}
	}
}
/*************************************************************/ 


/**************************************************************/ 