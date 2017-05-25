$(document).ready(function() {
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
    }
    if ($('[data-valid=phone]').length) {

        $('[data-valid=phone]').mask("+7 (999) 999-99-99");
    }

    if ($('[data-valid=upload]').length) {
        $('.form__upload-result').hide(0);
        $('[data-valid=upload]').change(function() {
            var filename = $(this).val().replace(/.*\\/, "");
            var uploadItem = $(this).closest('.form__upload');
            uploadItem.find('.form__upload-path').html(filename);
            uploadItem.find('label').hide();
            uploadItem.find('.form__upload-result').fadeIn();
        });


        $('.form__upload-remove').click(function(evt) {
            evt.preventDefault();
            var uploadItem = $(this).closest('.form__upload');
            uploadItem.find('label').show();
            uploadItem.find('.form__upload-result').hide(0);
            uploadItem.find('input[type=file]').val('');
        })
    }
    //toggle function

    $('[data-toggle]').click(function(evt) {
        evt.preventDefault();
        var currentItem = $('[data-content="' + this.dataset.toggle + '"]');
        currentItem.slideToggle(300);
        if ($(this).text() === '(скрыть)') {
            $(this).text('(показать)')
        } else {
            $(this).text('(скрыть)')
        }
    });

})
