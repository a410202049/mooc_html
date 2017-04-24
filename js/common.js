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

$(function(){

	$('.custom-modal .icon-close').click(function(){
		$(this).parents('.custom-modal').css("display","none");
	})

	$('#js-signin-btn').click(function(){
		// console.log(1)
		// $('#login-modal').css("display","block")
		
		// var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		// $('#login-modal').addClass('animated ' + 'fadeInDown').one(animationEnd, function() {

  //       });
		// ("#login-modal").animateCss("fadeInDown",function(){
		// 	console.log(1)
		// })
		// $('#login-modal').addClass('fadeInDown animated');
	})
})