$(function(){
	//拍照
	Camera();
});

//Html5调用摄像头
function Camera() {
	var W = $('body').width();
	var H = $(window).height();
	var video = $("#Video")[0],
	errBack = function(error) {console.log("Video capture error: ", error.code);};
	//调取摄像头
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
	window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
	if (navigator.getUserMedia){
		navigator.getUserMedia({"video": true}, function(stream){
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}
	//设置内容区域
	$("#Video").css({width:'100%',height:H});
	var n = 40;
	var m = 80;
	var w=W-n, h=H-m, l=n/2, t=m/2;
	$("#Line").css({width:w,height:h,left:l,top:t});
	//拍照
	$("#Line .camera").click(function (){
		Scamera(-l,-t,W-l,H-t);
		return false;
	});
	//上传
	$("#Line .upload").click(function (){
		ScameraData();
		return false;
	});
	//取消
	$("#Line .clear").click(function (){
		$("#Camera").hide();
		$("#LineBG").hide();
		return false;
	});
}
//拍照
function Scamera(x,y,w,h){
	$("#Camera").attr({width:w,height:h}).css({left:-x,top:-y});
	var video = $("#Video")[0];
	var canvas = $("#Camera")[0];
	var context = canvas.getContext("2d");
	context.fillStyle = "#FFFFFF";
	context.fillRect(x, y, w, h);
	context.drawImage(video, x, y, w, h);
	//显示
	$("#Camera").show();
	$("#LineBG").show();
}
//上传数据
function ScameraData(){
	var canvas = $("#Camera")[0];
	//传递数据
	var imgData = canvas.toDataURL("image/jpeg");
	$.post($base_url+'index_c/CameraData.html',{'img':imgData},function (data, status) {
		//alert(data);
		if(data.status == 'y'){
			alert('上传成功！');
		}else{
			alert('上传失败！');
		}
	},'json');
}