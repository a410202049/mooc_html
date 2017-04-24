$.fn.extend({
    animateCss: function (animationName,func) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            if(func){
            	func();	
            }
        });
    }
});


//水平垂直居中 支持浏览器窗口大小改变，存在垂直滚动条
function center(obj) {
    var screenWidth = $(window).width(), screenHeight = $(window).height();  //当前浏览器窗口的宽高
    var scrolltop = $(document).scrollTop();//获取当前窗口距离页面顶部高度
    var objLeft = (screenWidth - obj.width()) / 2;
    var objTop = (screenHeight - obj.height()) / 2 + scrolltop;
    obj.css({left: objLeft + 'px', top: objTop + 'px'});
    //浏览器窗口大小改变时
    $(window).resize(function () {
        screenWidth = $(window).width();
        screenHeight = $(window).height();
        scrolltop = $(document).scrollTop();
        objLeft = (screenWidth - obj.width()) / 2;
        objTop = (screenHeight - obj.height()) / 2 + scrolltop;
        obj.css({left: objLeft + 'px', top: objTop + 'px'});
    });
    //浏览器有滚动条时
    $(window).scroll(function () {
        screenWidth = $(window).width();
        screenHeight = $(window).height();
        scrolltop = $(document).scrollTop();
        objLeft = (screenWidth - obj.width()) / 2;
        objTop = (screenHeight - obj.height()) / 2 + scrolltop;
        obj.css({left: objLeft + 'px', top: objTop + 'px'});
    });
}

$(function(){
	$('.custom-modal .icon-close').click(function(){

		$(this).parents('.custom-modal').css("display","none");
	})

	$('#js-signin-btn').click(function(){
		$('#login-modal').css("display","block");
		center($("#login-modal .form-modal"));
		$("#login-modal .form-modal").animateCss("fadeInDown",function(){})
	})

	$('#js-register-btn').click(function(){
		$('#register-modal').css("display","block");
		center($("#register-modal .form-modal"));
		$("#register-modal .form-modal").animateCss("fadeInDown",function(){})
	})

	$('#login_now').click(function(){
		$('#register-modal').css("display","none");
		$('#js-signin-btn').click();
	})

	$('#regsiter_now').click(function(){
		$('#login-modal').css("display","none");
		$('#js-register-btn').click();
	})



})




