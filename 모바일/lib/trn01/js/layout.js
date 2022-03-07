$(function () {
  //----------------------------------------------------
  $('#main').fullpage({
    anchors: ['sc02', 'sc03', 'sc04', 'sc05', 'sc06'],
    //navigation: true,

    afterLoad: function (origin, destination, direction) {
      var idx = destination.index;
      console.log(idx); // 0,1,2....
      $('.section').eq(idx).addClass('on').siblings().removeClass("on");
    },
  });
  //메인사진 슬라이드
  $('.main_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    fade: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  //신랑측 팝업    
  $('.btn_m').on('click',function(){
    $('.tel_m').show('on')
  });
  $('.tel_m>i').on('click',function(){
    $('.tel_m').hide('on')
  });  
  //신부측 팝업    
  $('.btn_w').on('click',function(){
    $('.tel_w').show('on')
  });
  $('.tel_w>i').on('click',function(){
    $('.tel_w').hide('on')
  });  



  //-------------------------------------------------------
});
