$(function () {
  //----------------------------------------------------
  $("#main").fullpage({
    anchors: ["sc02", "sc03", "sc04", "sc05", "sc06"],
    //navigation: true,

    afterLoad: function (origin, destination, direction) {
      var idx = destination.index;
      console.log(idx); // 0,1,2....
      $(".section").eq(idx).addClass("on").siblings().removeClass("on");
    },
  });
  //메인사진 슬라이드
  $(".main_slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    fade: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 2000,
  });

  //신랑측 팝업
  $(".btn_m").on("click", function () {
    $(".tel_m").show("on");
  });
  $(".tel_m > div > i").on("click", function () {
    $(".tel_m").hide("on");
  });
  //신부측 팝업
  $(".btn_w").on("click", function () {
    $(".tel_w").show("on");
  });
  $(".tel_w>i").on("click", function () {
    $(".tel_w").hide("on");
  });
  //계좌번호 팝업
  $(".num").on("click", function () {
    $(".bank").show("on");
  });
  $(".bank>div>i").on("click", function () {
    $(".bank").hide("on");
  });

  //------갤러리 슬라이드------//
  $(".pic01_slide").slick({
    //autoplay: true,
    // autoplaySpeed: 3000,
    dots: false,
    fade: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  //------갤러리 화살표------//

  $(".pic01_b > i.xi-angle-left-thin").on("click", function () {
    $(".pic01_slide").slick("slickPrev");
  });
  $(".pic01_b > i.xi-angle-right-thin").on("click", function () {
    $(".pic01_slide").slick("slickNext");
  });

  //------갤러리 팝업창------//
  $(".gly_01").on("click", function () {
    $(".pic01").show("on");
    $(".pic01_slide").slick();
  });
  $(".pic01_btn>i").on("click", function (e) {
    $(".pic01").hide("on");
    e.preventDefault();
  });

  //-------------------------------------------------------
});

//계좌번호
function copy_to_clipboard() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("Copy");
  alert("복사되었습니다, 감사합니다.");
}
function copy_to_clipboard2() {
  var copyText = document.getElementById("myInput2");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("Copy");
  alert("복사되었습니다, 감사합니다.");
}
