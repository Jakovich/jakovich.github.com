
"use strict";
$(document).ready(function(e) {
	$('.reviews__cboxExample').colorbox({
      'rel' : 'gal',
      'maxWidth' : '90%',
      'current' : ''
    });
    $('.reviews__cboxFeedback').colorbox({
      'rel' : 'gal2',
      'maxWidth' : '90%',
      'current' : ''
    });
    $('#input-phone').inputmask("+7 (999) 999-9999", 
                                { "onincomplete": function(){ alert('inputmask incomplete')}}
                                 );
});