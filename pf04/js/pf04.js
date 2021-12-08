$(function () {
  // 스크롤할때 헤드변경

  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    console.log(sct);
    sct > 0 ? $('.herder').addClass('on') : $('.herder').removeClass('on');
  });

 //메인 슬라이드
  $('.main_slider').slick({
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
    arrows: false,
    dots: true,
  });

 //------메인 화살표------//

  $('.main_visual .main_btn i.xi-angle-left-thin').on('click', function () {
    $(".main_slider").slick('slickPrev');
  });
  $('.main_visual .main_btn i.xi-angle-right-thin').on('click', function () {
    $('.main_slider').slick('slickNext');
  });

//----------------------------------------------------------------//

 //첫번째 js로 하는 slick 버전 -모바일//

  var Rsd = $('.c_slider');

  var slickOptions = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:2000,
      centerMode:true,
      dots:false,
      arrows:false,
      
  };

  $(window).on('load resize', function() {
      if($(window).width() > 768) {
          Rsd.slick('unslick');
      }else{
          Rsd.not('.slick-initialized').slick(slickOptions);
      }
  });
//---------------------------------------------------------------------------//

  // 두번째 섹션 제품 슬라이드
  $('.sc_slider').slick({
    arrows:false,
    asNavFor:'.sc_slider',
    pauseOnHover:false,
    pauseOnFocus:false,
    autoplay:true,
    autoplaySpeed:3500,


  });

 //------화살표------//

  $('.content02 .con02_btn i.xi-angle-left-thin').on('click', function () {
    $(".sc_slider").slick('slickPrev');
  });
  $('.content02 .con02_btn i.xi-angle-right-thin').on('click', function () {
    $('.sc_slider').slick('slickNext');
  });

//-----------------------------------------------------------//
  // 네번째 섹션 제품 슬라이드
  $('.con04_slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed:2000,
    slidesToShow: 1,
  });

  // 네번째 섹션 제품 슬라이드 -선 움직임과 글자

  $('.con04_menu li').eq(0).addClass('on');
  $('.con04_slider').on('afterChange', function(e,s,c){
    let linePosition=$('.con04_menu li').eq(c).offset().left;
    console.log(linePosition);
      if($(window).width()>768) {
        $('.line').css({top:50*c +275});
      }else{
        $('.line').css({left:linePosition});
        
      
      }
      
      $('.con04_menu li').eq(c).addClass('on').siblings().removeClass('on');

  })

  $('.con04_menu li').on('click', function(){
      var idx=$(this).index();
      $('.con04_slider').slick('slickGoTo', idx);
      $(this).addClass('on').siblings().removeClass('on');
  })





//toTop//

  $('.toTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
  });

  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    //if(sct>400){
    //    $('#toTop').fadeIn()
    // }else
    //$('#toTop').fadeOut()
    //}
    sct > 400 ? $('.toTop').fadeIn() : $('.toTop').fadeOut();
    $(this).css({ top: 300 + sct });
  });


  //모바일용 메뉴//

  $('.mopen').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
    $('.herder .m_icon').toggleClass('on');
  

  });
  

  $('.depth01>li>a').on ('click', function(){
    if($(window).width() <769) {
        $(this).next().slideToggle();
    $(this).parent().siblings().find('.depth02').slideUp();
    }
  });

   //오른쪽 배너 //
  $('.right_banner i').on ('click',function(){
    $('.right_banner').toggleClass('on');
    $(this).toggleClass('on')
})


});
