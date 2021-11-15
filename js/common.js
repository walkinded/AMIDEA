// $(document).ready(function(e) {
// 	const changePage = $('.change-site');
//   if (changePage.is(e.target)) {
//     $("body").css("display", "none");

//     $("body").fadeIn(2000);
    
//     $(".change-site").click(function(event){
//       event.preventDefault();
//       linkLocation = this.href;
//       $("body").fadeOut(1000, redirectPage);		
//     });
      
//     function redirectPage() {
//       window.location = linkLocation;
//     }
//   }
// });

$(document).ready(function() {

  $("body").css("display", "none");
  $("body").fadeIn(1000);
  
  $(".change-site").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);		
  });
    
  function redirectPage() {
    window.location = linkLocation;
  }
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


/* ==================== to up scroller ==================== */ 
  $(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroller').fadeIn();
            $('#scroller').css({'display': 'flex'});
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
  });


/* ==================== basicScroll lib (test work) ==================== */ 
  const fadeBox = basicScroll.create({
    elem: document.querySelector('.fadeBox'),
    from: 'bottom-bottom',
    to: 'top-middle',
    // inside: (instance, percentage, props) => console.log('fadeBox is animating'),
    // outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
    props: {
      '--o': {
        from: .99,
        to: .01
      }
    }
  });

  const sineInOut = basicScroll.create({
    elem: document.querySelector('.sineInOut'),
    from: 'bottom-bottom',
    to: 'top-middle',
    direct: true,
    // inside: (instance, percentage, props) => console.log('fadeBox is animating'),
    // outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
    props: {
      '--ty': {
        from: '0',
        to: '100px',
      }
    }
  });
  

  fadeBox.start();
  sineInOut.start();

/* ==================== libs ==================== */ 
  $("input[type=tel]").mask("+7 (999) 999-99-99");
  $(".fancybox").fancybox();

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
