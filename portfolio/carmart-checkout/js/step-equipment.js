'use strict';
$(document).ready(function() {

//add class active (change color) for services__item when add button is clicked
  $('.services-btn').on('mousedown', function(event) {
      var currentItem = $(event.target).closest('.services__item');
      currentItem.addClass('services__item--focus');
  });

  $('.services-btn').on('mouseup', function(event) {
      var currentItem = $(event.target).closest('.services__item');
      currentItem.removeClass('services__item--focus');
      $(this).blur();
  });



  //add/delete select class for services-items
  $('.services-btn').on('click', function(event) {
      //cancel popup show when we click on service-item
      event.stopPropagation();
      var currentBtn = $(this);

      var currentItem = $(event.target).closest('.services__item');
      if (currentBtn.hasClass('services-btn--select')) {
          currentBtn.text('Установить');
      } else {
          currentBtn.text('Установлено');
      }
      currentBtn.toggleClass('services-btn').toggleClass('services-btn services-btn--select');
      currentItem.toggleClass('services__item').toggleClass('services__item services__item--select');
  });

})
