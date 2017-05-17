$(document).ready(function() {

    $('[data-tabcontent=reservation]').hide();
    $('[data-tablink]').click(function(evt) {
        if ($(this).hasClass('tab-nav__link')) {
          evt.preventDefault();
          $(this).closest('[data-tabgroup]').find('[data-tablink]').removeClass('tab-nav__link--active');
          $(this).addClass('tab-nav__link--active');
        }
        $(this).closest('[data-tabgroup]').find('[data-tabcontent]').hide();
        $('[data-tabcontent="' + this.dataset.tablink + '"]').show();
    })


    $('input[data-tablink]').each(function(){
      if (!$(this).prop( "checked" )) {
        $('[data-tabcontent="' + this.dataset.tablink + '"]').hide();
      }
    })

    //проверка на наличие данных после загрузки

    $('.form__input').each(function(){
      checkComplet($(this));
    })


    $('.form__input').focus(function(){
      $(this).addClass('form__input--completed');
    })


    $('.form__input').blur(function(){
      checkComplet($(this));
    })


    $('[data-valid=date]').change(function(){
      checkComplet($(this));
    })

    function checkComplet(elem) {
      var self = elem;
      //timeout нужен из-за того, что datepicker вводит данные с задержкой
      setTimeout(function(){
        if(self.val() !== '') {
          self.addClass('form__input--completed');
        } else {
          self.removeClass('form__input--completed');
        }
      }
      ,100)
    }

    if ($('[data-valid=date]').length) {

        jQuery(function($) {
            $.datepicker.regional['ru'] = {
                closeText: 'Закрыть',
                prevText: '&#x3c;',
                nextText: '&#x3e;',
                currentText: 'Сегодня',
                monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                ],
                monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
                ],
                dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
                dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
                dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                weekHeader: 'Нед',
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['ru']);
        });

        $('[data-valid=date]').datepicker();
        //show/hide date note

    }

    //show/hide popup-visitor//show/hide popup
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

    function showPopup() {
        $('.popup-visitor__wrp').fadeIn();

        $('body').css({
            'overflow': 'hidden',
            'padding-right': scrollWidth
        });
    }

    $('.popup-visitor').on('click', function(evt) {
        evt.stopPropagation();
    });



    function hidePopup() {

        $('.popup-visitor__wrp').fadeOut(function(){
          $('body').css({
              'overflow': 'auto',
              'padding-right': 0
          });
        });
    }

    $('[data-modal=visitor]').on('click', function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        showPopup();
    });

    $('.table--visitor tbody tr').on('click', function(evt) {
        evt.stopPropagation();
        showPopup();
    });

    $('[data-action=close]').on('click', function(evt) {
        evt.preventDefault();
        hidePopup();
    });

    $('.popup-visitor__wrp').on('click', function() {
        hidePopup();
    });

})
