$(document).ready(function() {
  // START


  //  Бергер меню и меню
  // Закрыть меню если произашел клик вне блока
  $(document).mouseup(function (e){ 
    let menu = $(".menu");
    let burger = $('.burger-menu');
    if (menu.hasClass('active')) {
      if ((!menu.is(e.target) && menu.has(e.target).length === 0) || burger.is(e.target)) {
        menu.removeClass('active');
        burger.removeClass('active');
      }
    } else {
      if (burger.is(e.target)) {
        menu.addClass('active');
        burger.addClass('active');
      }
    }
  });

  // END
}); 
