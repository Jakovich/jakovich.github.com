'use strict';

$(function() {
	var subscribeLink = $(".subscribe_popup_link");
	var subscribePopup = $(".subscribe_popup");
	var subscribeClose = $(".popup_close");
	var subscribeSuccesPopup = $(".subscribe_popup_succes");
	var emailLink = $(".email_popup_link");
	var emailPopup = $(".email_popup");
	var emailSuccesPopup = $(".email_popup_succes");
	var mobileMenuLink = $("div.mobile_menu");
	var mobileMenu = $(".mobile_menu_popup");
	var mobileMenuClose = $(".menu_close");
	var mobileSubscribeLink = $(".mobile_subscribe_link");
	var mobileEmailLink = $(".mobile_email_link");
	var emailSuccesClose = $(".popup_close");


	/*navigation*/
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if ($(window).width() <= 1024) {
			if (scrollTop > 100) {
				$("nav.mobile_nav").animate({'top':'0px'},400);
			}
			else {
				$("nav.mobile_nav").stop(true).animate({'top':'-105px'},300);
			}
		}
		else {
			if (scrollTop > 200) {
				$("nav.main_nav").animate({'top':'0px'},400);
			}
			else {
				$("nav.main_nav").stop(true).animate({'top':'-105px'},400);
			}
		}
	});

	/*mobile menu*/
	mobileMenuLink.click ( function() {
		mobileMenu.show().animate({'top': '0'}, 600);
	});

	mobileMenuClose.click( function() {
		mobileMenu.animate({top: '-500'}, 400, function(){
			$(this).hide();
		});
	});

	mobileSubscribeLink.click( function() {
		mobileMenu.animate({top: '-500'}, 100, function(){
			$(this).hide();
		});
	});

	mobileEmailLink.click( function() {
		mobileMenu.animate({top: '-500'}, 100, function(){
			$(this).hide();
		});
	});


	/*Subscribe popup*/
	subscribeLink.click ( function(event) {
		event.preventDefault();
		subscribePopup.show().animate({'right': '0'}, 700);
	});

	subscribeClose.click( function() {
		hidePopup(subscribePopup);
	});

	$(".subscribe_form").submit(function(){
		hidePopup(subscribePopup);
		subscribeSuccesPopup.css('display','block').animate({'right': '0'}, 700);
	});

	/*email popup*/
	emailLink.click ( function(event) {
		event.preventDefault();
		emailPopup.show().animate({'right': '0'}, 700);
	});

	$(".email_form").submit(function(){
		hidePopup(emailPopup);
		emailSuccesPopup.show().animate({'right': '0'}, 700);
	});
	 emailSuccesClose.click( function() {
		hidePopup(emailPopup);
	});

	var hidePopup = function (popup) {
		popup.animate({right: '-1000'}, 500,
			function(){
				$(this).hide();
			}
		);
	}
});
