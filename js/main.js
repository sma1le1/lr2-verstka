$(function(){
	$('#slider_head .bxslider').bxSlider({
	    controls: false,	    
		mode: 'vertical'
		// mode: 'fade' // - is not working in IE!		
	});


	$('#team .bxslider').bxSlider({
		controls: true,
		nextText: '<img src="img/next.png" height="55" width="29"/>',
		prevText: '<img src="img/prev.png" height="55" width="29"/>'
	});

	$('#clients .bxslider').bxSlider({
		controls: false
	});


		// form effect:
		$(".message_box input").focus(function focusInput(){	   		
	   		$(this).css("border-bottom", "1px solid #fff");
	   		$(this).next().animate({top: "-20px"}, 300).dequeue();
	   		$(this).next().css("color","#fff");

	   		$(this).blur(function(){
	   			if ($(this).val() == 0) {
				    $(this).next().animate({top: "5px"}, 300).dequeue();
	   				$(this).next().css("color","#4A4A4A")
	   				$(this).css("border-bottom", "1px solid #4A4A4A");
				};	   					   			
	   		}); 
	   });

	   $(".message_box .formRow span").on("click", function(){
	   		$(this).prev().focus();	   			   		  		
	   });

	// send a message:
	$(".message_box input[type='submit']").on("click", function(){
		$(".message_box").html(
			"<img src='./img/check.png' class='check' alt='image'><p class='info_check'>Thank you!<br>Your message has been sent!</p><button class='common_btn check_btn'>new message</button>"
		);		   		  		
	});
});