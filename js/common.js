$(document).ready(function() {

/* ==================== плавный пережод между страницами ==================== */ 
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


  $('.grid__item:not(:first)').on('click', function(){
    $('.grid__item').removeClass('active');
    $(this).addClass('active');

    let img = $(this).find('.img-box img').attr('src'),
        imgFirst = $('.grid__item:first').find('.img-box img').attr('src'),
        nameExpert = $(this).find('.name-expert').html(),
        nameExpertFirst = $('.grid__item:first').find('.name-expert').html(),
        specialty = $(this).find('.specialty').html(),
        specialtyFirst = $('.grid__item:first').find('.specialty').html(),
        blockquote = $(this).find('blockquote').html(),
        blockquoteFirst = $('.grid__item:first').find('blockquote').html(),
        sertif = $(this).find('.sertif-slider').html(),
        sertifFirst = $('.grid__item:first').find('.sertif-slider').html(),
        sertifArr = [],
        sertifArrFirst = [];

   
    /* ========== уникальные картинки ==========  */
    $(this).find('.sertif-slider img').each(function() {
      sertifArr.push($(this).attr('src'));
    });
    sertifArr = Array.from(new Set(sertifArr));
    console.log(sertifArr);
    
    $('.grid__item:first').find('.sertif-slider img').each(function() {
      sertifArrFirst.push($(this).attr('src'));
    });
    sertifArrFirst = Array.from(new Set(sertifArrFirst));
    console.log(sertifArrFirst);

    /* ========== перезапись картинок для sertifArrFirst ========== */
    $.each(sertifArrFirst,function(index,value){
      $(this).find('.sertif-slider img').remove();
    });
    $.each(sertifArrFirst,function(index,value){
      $(this).find('.sertif-slider .sertif-slide__item').append('<img src="" alt="">');
      $(this).find('.sertif-slider .sertif-slide__item img').attr('src', value);
      // console.log('Индекс: ' + index + '; Значение: ' + value);
    });

    /* ========== перезапись картинок для sertifArr ========== */
    $.each(sertifArr,function(index,value){
      $('.grid__item:first').find('.sertif-slider img').remove();
    });
    $.each(sertifArr,function(index,value){
      $('.grid__item:first').find('.sertif-slider .sertif-slide__item').append('<img src="" alt="">');
      $('.grid__item:first').find('.sertif-slider .sertif-slide__item img').attr('src', value);
      // console.log('Индекс: ' + index + '; Значение: ' + value);
    });

    /* ========== меняем местами ========== */
    $(this).find('.img-box img').attr('src', imgFirst);
    $('.grid__item:first').find('.img-box img').attr('src', img);

    $(this).find('.name-expert').html(nameExpertFirst);
    $('.grid__item:first').find('.name-expert').html(nameExpert);

    $(this).find('.specialty').html(specialtyFirst);
    $('.grid__item:first').find('.specialty').html(specialty);

    $(this).find('blockquote').html(blockquoteFirst);
    $('.grid__item:first').find('blockquote').html(blockquote);

    $(this).find('.sertif-slider').html(sertifFirst);
    $('.grid__item:first').find('.sertif-slider').html(sertif);

    $('.sertif-slider').slick('refresh');
  });

/* ==================== BLOG up info ==================== */ 
  
  // $('.blog-page__item-blog').on('mouseover', function(){
  //   $('.blog-page__item-blog').find('.item-blog__info').removeClass('active');
  //   $(this).find('.item-blog__info').addClass('active');
  // });

/* ==================== ACCORDION ==================== */ 
$('#accordion .accordion__wrap .accordion__head').find('.accordion__body').slideDown(500);
  $(document).ready(function() {
    $('#accordion .accordion__wrap .accordion__head').on('click', function(){
      $(this).closest('#accordion').find('.accordion__body').not($(this).next()).slideUp(500);
      $(this).closest('#accordion').find('.accordion__head i').not($(this).find('i')).removeClass('rotate');
      $(this).siblings('.accordion__body').slideToggle(500);
      $(this).find('i').toggleClass('rotate');
    });
  
    // $('.catalog__nav #accordion .accordion__wrap .accordion__head').on('click',function() {
    //   $(this).closest('#accordion').find('.accordion__head').not($(this)).removeClass('accordion__head_active');
    //   $(this).toggleClass('accordion__head_active');
    // });
  });
  // $('.catalog__nav_mobile').on('click', function(){
  //   $(this).siblings('#accordion').slideToggle(500);
  //   $(this).find('i').toggleClass('rotate');
  // });
  // if ($(window).width() < 1025) {
  //   $('.a-c__tabs li').on('click', function(){
  //     $('.catalog__nav_mobile').siblings('#accordion').slideToggle(500);
  //     $('.catalog__nav_mobile').find('i').toggleClass('rotate');
  //   });
  // }

/* ==================== to up scroller ==================== */ 
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


  $('.sertif-slider_cosmet').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    speed: 1000,
    infinity: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          slidesToShow: 2,
          // speed: 1000,
        }
      },
      {
        breakpoint: 501,
        settings: {
          arrows: true,
          slidesToShow: 1,
          // speed: 1000,
        }
      },
    ]
  });

  $('.our-reviews__wrap-scroll').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    speed: 1000,
    infinity: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          slidesToShow: 2,
          // speed: 1000,
        }
      },
      {
        breakpoint: 501,
        settings: {
          arrows: true,
          slidesToShow: 1,
          // speed: 1000,
        }
      },
    ]
  });

  $('.top-procedures__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    speed: 1000,
    infinity: true,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          arrows: true,
          slidesToShow: 3,
          // speed: 1000,
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          slidesToShow: 2,
          // speed: 1000,
        }
      },
      {
        breakpoint: 641,
        settings: {
          arrows: false,
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
