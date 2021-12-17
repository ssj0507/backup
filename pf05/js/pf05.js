$(function () {
  // 스크롤할때 헤드변경-------------------------

  $(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    console.log(sct);
    sct > 0 ? $('.herder').addClass('on') : $('.herder').removeClass('on');
  });

 //메인 동영상
 $('.bgndVideo').YTPlayer({
    videoURL:'https://youtu.be/oa_Joi26Vgc',
    containment:'.main_visual',
    autoPlay:true,
    mute:true,
    startAt:0,
    opacity:1,
    showControls:false,
  });


  $('.itm01').addClass('on')

  //---첫번째 섹션
  $('.con01_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2500,
    pauseOnHover:false,
    pauseOnFocus:false,
    //모바일용 slick으로 한면에 꽉차게 하는것//
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        }
      },
  ]


  });

  //---첫번째 섹션 사진 커지는거 
  $('.con01_slider figure').eq(7).addClass('on')
  $('.con01_slider').on('afterChange',function(e,s,c){
      $('.con01_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
      $('.content01 .con01_d').eq(c+7).addClass('on').siblings().removeClass('on');
  });

  //첫번째 섹션 화살표//

  $('.content01 .con01_btn i.xi-angle-left-thin').on('click', function(){
    $('.con01_slider').slick('slickPrev');
  });
  $('.content01 .con01_btn i.xi-angle-right-thin').on('click', function(){
      $('.con01_slider').slick('slickNext');
  });

    //탭 메뉴//
  $('.tab_menu li').on('click', function(){
    var idx=$(this).index();
    // $('.tab_con>div').eq(idx).show().siblings().hide();
    $('.tab_con02>div').eq(idx).addClass('on').siblings().removeClass('on');
    $('.con02_d').eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
  });

  $('.con02_slider').slick({
    arrows:false,
    slidesToShow:3,
    //autoplay:true,
    //autoplaySpeed:2500,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
    slidesToScroll:3,
       //모바일용 slick으로 한면에 꽉차게 하는것//
       responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow:1,
          }
        }
     
    ]

  });

  //두벤째 슬라이드 화살표//

  $('.content02 .con02_btn i.xi-angle-left-thin').on('click', function(){
    $('.con02_slider').slick('slickPrev');
  });
  $('.content02 .con02_btn i.xi-angle-right-thin').on('click', function(){
      $('.con02_slider').slick('slickNext');
  });

  // 세번째 섹션 제품 슬라이드
  $('.con03_slider').slick({
    arrows: false,
    //autoplay: true,
    //autoplaySpeed:2500,
    slidesToShow: 1,
    dots:true,
  });

  $('.con03 .button').on('click', function(){
    $('.con03_slider').slick('slickNext')
  });

  
//여섯번째 js로 하는 slick 버전//

var Rsd = $('.c_slider');

var slickOptions = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay:true,
    //autoplaySpeed:2000,
    centerMode:true,
    dots:false,
    arrows:false
};

$(window).on('load resize', function() {
    if($(window).width() > 768) {
        Rsd.slick('unslick');
    }else{
        Rsd.not('.slick-initialized').slick(slickOptions);
    }
});

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

});
