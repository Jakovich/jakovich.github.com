'use strict';
$(document).ready(function() {

    //show/hide questions
    $('.faq__question').on('click', function(event) {
        var currentItem = $(event.target).closest('.faq__item');
        var answer = currentItem.find('.faq__answer');
        answer.slideToggle(300);
        currentItem.toggleClass('').toggleClass('faq__item--active');
    });

    //show/hide additional info in section info
    var infoWrp = $('.info');
    var infoAddit = $('.info__addit');
    var infoShort = $('.info__short');
    var tooltipWrp = $('.tooltip-info__wrp');


    function infoToggle(event) {
        /*if (!infoAddit.is(':visible') && infoWrp.hasClass('info--fixed')){

        } else {
          infoWrp.css({'height': 'auto', 'overflow-y': 'visible'});
          infoAddit.find('.question-tooltip__body').css({'bottom': 'auto', 'top': '15px'})
        }*/
        if (infoAddit.is(':visible') && infoWrp.hasClass('info--fixed')) {
            infoWrp.css({
                'height': 'auto',
                'overflow-y': 'visible'
            });
            infoAddit.find('.question-tooltip__body').css({
                'bottom': 'auto',
                'top': '15px'
            })
        }
        infoAddit.slideToggle(300, function() {
            if (infoWrp.hasClass('info--fixed') && $('.info__full').innerHeight() > $(window).innerHeight() - 50) {
                infoWrp.css({
                    'height': '100%',
                    'overflow-y': 'auto'
                });
            }
            if ($('.info__full').innerHeight() > 500) {
                infoAddit.find('.question-tooltip__body').css({
                    'top': 'auto',
                    'bottom': '15px'
                });
            }


        });
    }

    $('.info__addit-btn').on('click', function(event) {
        infoToggle(event);
    });

    $('.info__btn--more').on('click', function(event) {
        infoToggle(event);
    });

    //unblur links & buttons after click

    $('button').on('mouseup', function(event) {
        $(this).blur();
    });

    $('a').on('mouseup', function(event) {
        $(this).blur();
    });


    //toggle icon of sorting
    $('.sorting-icon').on('click', function() {
        $(this).toggleClass('sorting-icon--down').toggleClass('sorting-icon--up');
    });


    function addTooltipTop() {
        var menuHeight = infoWrp.find('.info__full').innerHeight() + 5 + 'px';
        tooltipWrp.css({
            'top': menuHeight
        });
    }


    //stick menu
    var additVisible;

    function toggleMenu() {
        if ($(window).scrollTop() > $(".steps").offset().top + 250) {

            if (!infoWrp.hasClass('info--fixed')) {
                var menuHeight = infoWrp.innerHeight() + 'px';
                $('main').css({
                    'padding-top': menuHeight
                });
                if (infoAddit.is(":visible")) {
                    additVisible = 1;
                    infoAddit.hide();
                } else {
                    additVisible = 0;
                }
                infoWrp.fadeOut(0);
                infoWrp.addClass('info--fixed').fadeIn(300);
            }

            if (!tooltipWrp.hasClass('tooltip-info__wrp--fixed')) {
                var tooltipHeight = tooltipWrp.innerHeight() + 25 + 'px';
                $('main').css({
                    'padding-top': menuHeight
                });
                addTooltipTop();
                $('.services').css({
                    'padding-top': tooltipHeight
                });
                tooltipWrp.fadeOut(0);
                tooltipWrp.addClass('tooltip-info__wrp--fixed').fadeIn(300);
            }

        } else {
            if (infoWrp.hasClass('info--fixed')) {
                if (additVisible === 1) {
                    infoAddit.show(0);
                }
                infoWrp.removeClass('info--fixed');
                infoWrp.css({
                    'height': 'auto',
                    'overflow-y': 'visible'
                });
                $('main').css({
                    'padding-top': '0px'
                });
            }
            if (tooltipWrp.hasClass('tooltip-info__wrp--fixed')) {
                tooltipWrp.removeClass('tooltip-info__wrp--fixed');
                $('.services').css({
                    'padding-top': '25px'
                });
            }
        }
    }

    toggleMenu();

    $(window).scroll(function() {
        toggleMenu();
    });

    $(window).resize(function() {
        if (tooltipWrp.hasClass('tooltip-info__wrp--fixed')) {
            addTooltipTop()
        }
    });


    //show/hide popup
    function getScrollbarWidth() {
        var block = $('<div>').css({
                'height': '50px',
                'width': '50px'
            }),
            indicator = $('<div>').css({
                'height': '200px'
            });

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }

    var scrollWidth = getScrollbarWidth() + 'px';

    function showPopup(popup) {
        popup.fadeIn();
        popup.closest($('.popup-wrp')).fadeIn();

        $('body').css({
            'overflow': 'hidden',
            'padding-right': scrollWidth
        });
        $('.tooltip-info__wrp--fixed, .info--fixed').css({
            'right': scrollWidth
        })

    }

    function hidePopup(popup) {
        popup.fadeOut();
        popup.closest($('.popup-wrp')).fadeOut(function(){
            if ($('.popup-wrp:visible').length === 0) {
                $('body').css({
                    'overflow': 'auto',
                    'padding-right': 0
                });
                $('.tooltip-info__wrp--fixed, .info--fixed').css({
                    'right': 0
                })
            }

        });

    }

    $('[data-rel]').on('click', function(evt) {
        evt.stopPropagation();
    });

    $('[data-modal]').on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var currentPopup = $('[data-rel="' + this.dataset.modal + '"]');
        showPopup(currentPopup);
    });

    $('[data-action="close"]').on('click', function(evt) {
        evt.preventDefault();
        var currentPopup = $(this).closest('[data-rel]');
        hidePopup(currentPopup);
    });

    $('.popup-wrp').on('click', function(evt) {
        hidePopup($('[data-rel]:visible:last'));
    });

});
