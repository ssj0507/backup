$(function () {
  //----------------------------------------------------
  $("#main").fullpage({
    anchors: ["sc01", "sc02", "sc03", "sc04", "sc05", "sc06"],
    //navigation: true,

    afterLoad: function (origin, destination, direction) {
      var idx = destination.index;
      console.log(idx); // 0,1,2....
      $(".section").eq(idx).addClass("on").siblings().removeClass("on");
    },
  });
  //숙박소개 슬라이드
  $(".main_slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    fade: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  //-------------------------------------------------------
});
