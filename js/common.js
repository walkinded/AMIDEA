$(document).ready(function() {
  // START


  //  Бергер меню и меню
  // Закрыть меню если произашел клик вне блока
  $(document).mouseup(function (e){ 
    let menu = $(".menu");
    let burger = $('.burger-menu');
    if (menu.hasClass('active')) {
      if ((!menu.is(e.target) && menu.has(e.target).length === 0)) {
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

/*==================== SLICK-SLIDER ==================== */ 
  $('.slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    speed: 1000,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1601,
        settings: {
          arrows: true,
          slidesToShow: 2,
          // speed: 1000,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 1,
          // speed: 1000,
        }
      },
    ]
  });

  $('.sertif-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 2,
    speed: 1000,
    infinity: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          // speed: 1000,
        }
      },
    ]
  });

  $('.gallery__scroll-small').slick({
    slidesToShow: 2,
    vertical: true,
    arrows: true,
    infinity: true,
    verticalSwiping: true,
    asNavFor: ".gallery__scroll-big",
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      }
    ]
  });
  
  $('.gallery__scroll-big').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    asNavFor: ".gallery__scroll-small",
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      },
    ]
  });
  // END
}); 
