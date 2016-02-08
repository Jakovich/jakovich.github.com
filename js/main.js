$(document).ready(function() {
	var subscribeLink = $(".subscribe_popup_link");
	var subscribePopup = $(".subscribe_popup");
	var subscribeClose = $(".popup_close");
	var subscribeSuccesPopup = $(".subscribe_popup_succes");
	var subscribeSuccesLink = $(".submit_succes");
	var subscribeSuccesClose = $(".popup_close");
	var emailLink = $(".email_popup_link");
	var emailPopup = $(".email_popup");
	var emailClose = $(".popup_close");
	var emailSuccesPopup = $(".email_popup_succes");
	var emailSuccesLink = $(".email_succes");
	var emailSuccesClose = $(".popup_close");
	var mobileMenuLink = $("div.mobile_menu");
	var mobileMenu = $(".mobile_menu_popup");
	var mobileMenuClose = $(".menu_close");
	var mobileSubscribeLink = $(".mobile_subscribe_link");
	var mobileEmailLink = $(".mobile_email_link");
	
	
	/*navigation*/
	$(window).scroll(function() {
		if ($(window).width() <= 490) {
			if ($(this).scrollTop() > 100) {
				$("nav.mobile_nav").animate({'top':'0px'},400);
			}
			else {
				$("nav.mobile_nav").stop(true).animate({'top':'-105px'},300);
			}
		}
		else {
			if ($(this).scrollTop() > 200) {
				$("nav.main_nav").animate({'top':'0px'},400);
			}
			else {
				$("nav.main_nav").stop(true).animate({'top':'-105px'},400);
			}
		}
	});
	
	/*mobile menu*/
	mobileMenuLink.click ( function() {
		mobileMenu.css('display','block').animate({'top': '0'}, 600);	
	});
	
	mobileMenuClose.click( function() {
	mobileMenu.animate({top: '-500'}, 400,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	mobileSubscribeLink.click( function() {
	mobileMenu.animate({top: '-500'}, 100,
					   function(){
								$(this).css('display','none');
							}
						  );	   
	});
	
	mobileEmailLink.click( function() {
	mobileMenu.animate({top: '-500'}, 100,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	
      /*Subscribe popup*/
	subscribeLink.click ( function(event) {
		 event.preventDefault();
		subscribePopup.css('display','block').animate({'right': '0'}, 700);	
	});
	
	subscribeClose.click( function() {
	subscribePopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	$(".subscribe_form").submit(function(){
		subscribePopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
		subscribeSuccesPopup.css('display','block').animate({'right': '0'}, 700);
	});
	
	subscribeSuccesClose.click( function() {
	subscribeSuccesPopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	/*email popup*/
	emailLink.click ( function(event) {
		 event.preventDefault();
		emailPopup.css('display','block').animate({'right': '0'}, 700);	
	});
	
	emailClose.click( function() {
	emailPopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	$(".email_form").submit(function(){
		emailPopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
		emailSuccesPopup.css('display','block').animate({'right': '0'}, 700);
	});
	
	emailSuccesClose.click( function() {
	emailSuccesPopup.animate({right: '-1000'}, 500,
					   function(){
								$(this).css('display','none');
							}
						  );
	});
	
	

});