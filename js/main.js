$(document).ready(function() {
  
  /*функция смены картинок двери*/
  $('.doors-item__color-btn').click(function(){
    $currentButton = $(this);
    var $currentSrc = $currentButton.attr('data-src');
    var $currentImg = $currentButton.parents('.doors-item').find('img');
    var imageReplace = new Image();
    imageReplace.onload = function() {
      $currentImg.attr('src', $currentSrc);
    }
    $currentImg.attr('src', 'img/ajax-loader.gif');
    imageReplace.src = $currentSrc;
  })
  
  /*функция слайдера*/
  function htmSlider(){
    
    var slideWrap = $('.doors-items__wrapper');
    
    var nextLink = $('.doors-slider__nav--prev');
    
    var prevLink = $('.doors-slider__nav--next');

    var is_animate = false;
    
    var slideWidth = $('.doors-item').outerWidth();
  
    var scrollSlider = slideWrap.position().left - slideWidth;
	 	
 
    nextLink.click(function(){
      if(!slideWrap.is(':animated')) {
      slideWrap.animate({left: scrollSlider}, 500, function(){
      slideWrap
        .find('.doors-item:first')
        .appendTo(slideWrap)
        .parent()
        .css({'left': 0});
      });
     }
    });
  
    
    prevLink.click(function(){
      if(!slideWrap.is(':animated')) {
        slideWrap
       .css({'left': scrollSlider})
       .find('.doors-item:last')
       .prependTo(slideWrap)
       .parent()
       .animate({left: 0}, 500);
      }
    });
 
  }
  
  htmSlider();
  
})
