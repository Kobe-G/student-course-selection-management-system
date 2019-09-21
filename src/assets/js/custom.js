$(document).ready(function(){
	"use strict";
   // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
		// 登录功能

		$('#loginBtn').on('click',function(){
            console.log('111')
            var loginName = $('#signinName').val()
            var loginPassword = $('#signinPassword').val()
            var key = $("input[name='inlineRadioOptions']:checked").val();
            console.log(loginName + loginPassword + key)
            //开始发送请求
				$.ajax({//请求登录页处理
					type: 'POST',
					url: "/jquery/confirm_login",
					dataType: 'json',
					data: {
					loginName: loginName, 
					loginPassword: loginPassword,
					key: key
					},//传送请求数据
					success: function(strValue) {//登录成功后返回的数据
						
						window.location.href = "http://www.baidu.com";
						},
					error: function(XMLHttpRequest, strError, strObj) {
						console.log("XMLHttpRequest:"+XMLHttpRequest);
						console.log("strError:"+strError);
						console.log("strObj:"+strObj);
						}
					})

		})

	
	
});	
