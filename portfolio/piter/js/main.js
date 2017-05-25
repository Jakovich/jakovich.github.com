(function() {
    var mainMenu = $(".main-nav__items-wrp");
    var pageMenu = $(".page-nav__items-wrp");
    var menuClose = $('[data-close]');
    var menuToggle = $('[data-nav]');


    menuToggle.click(function(event) {
        event.preventDefault;
        if ($(this).attr('data-nav') === 'main-nav') {
            mainMenu.addClass("main-nav__items-wrp--active");
        } else {
            pageMenu.addClass("page-nav__items-wrp--active");
            var pageMenuoffset = $('.page-nav').offset().top + 'px';
            pageMenu.css({top: pageMenuoffset});
        }
    })

    menuClose.click(function(event) {
        event.preventDefault;
        if ($(this).attr('data-close') === 'main-nav') {
            mainMenu.removeClass("main-nav__items-wrp--active");
        } else {
            pageMenu.removeClass("page-nav__items-wrp--active");
        }
    });

})()
