(function() {
  var menu = document.querySelector(".main-nav__items-wrp");
  var menuClose = menu.querySelector(".main-nav__close");
  var menuToggle = document.querySelector(".main-nav__toggle");


  menuToggle.addEventListener("click", function (event) {
    event.preventDefault;
    menu.classList.add("main-nav__items-wrp--active");
  });

  menuClose.addEventListener("click", function (event){
      event.preventDefault;
    menu.classList.remove("main-nav__items-wrp--active");
  });

})();
