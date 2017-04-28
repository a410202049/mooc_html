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


    /******* banner *******/
    var options = {
      width: 1170, // 宽度
      height: 460, // 高度
      gridCol: 10, // 网格列数
      gridRow: 5, // 网格行数
      gridVertical: 20, // 栅格列数
      gridHorizontal: 10, // 栅格行数
      autoPlay: true, // 自动播放
      ascending: true, // 图片按照升序播放
      effects: [ // 使用的转场动画效果
        'fade', 'fadeLeft', 'fadeRight', 'fadeTop', 'fadeBottom', 'fadeTopLeft', 'fadeBottomRight',
        'blindsLeft', 'blindsRight', 'blindsTop', 'blindsBottom', 'blindsTopLeft', 'blindsBottomRight',
        'curtainLeft', 'curtainRight', 'interlaceLeft', 'interlaceRight', 'mosaic', 'bomb', 'fumes'
      ],
      ie6Tidy: false, // IE6下精简效果
      random: false, // 随机使用转场动画效果
      duration: 4000, // 图片停留时长（毫秒）
      speed: 900 // 转场效果时长（毫秒）
    };
    /* 创建轮播效果 */
    $('#banner').vmcSlider(options);


    /******* 学生评价 *******/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        loop:true,
        autoplay:10000,
        slidesPerGroup:3,
    });

})




