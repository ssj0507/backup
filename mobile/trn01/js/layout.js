$(function () {
  //----------------------------------------------------
  $("#main").fullpage({
    anchors: ["sc02", "sc03", "sc04", "sc05", "sc06", "sc07"],
    //navigation: true,
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    afterLoad: function (origin, destination, direction) {
      var idx = destination.index;
      console.log(idx); // FV0,1,2....
      $(".section").eq(idx).addClass("on").siblings().removeClass("on");
    },
  });

  var windowY = 0;
  var imageY = 0;
  var imageX = 0;
  var ratio = 0;
  $(document).ready(function () {
    windowY = $(window).height();
    imageY = $(".l_slider").height();
    imageX = $(".l_slider").width();
    ratio = windowY / imageY;
    imageX *= ratio;
    $(".l_slider").css("width", imageX + "px");
  });
  //로딩 슬라이드
  $(window).load(function () {
    $(".l_slider").css("display", "block");

    $("#load").css("display", "none");
    $(".l_slider").slick({
      autoplay: true,
      autoplaySpeed: 1500,
      dots: false,
      fade: true,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      speed: 2500,
    });
    //메인사진 슬라이드
    $(".main_slider").slick({
      autoplay: true,
      autoplaySpeed: 2500,
      dots: false,
      fade: true,
      arrows: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      speed: 3000,
    });
  });

  //
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
  $(".tel_w > div > i").on("click", function () {
    $(".tel_w").hide("on");
  });
  //계좌번호 팝업
  $(".num").on("click", function () {
    $(".bank").show("on");
  });
  $(".bank>div>i").on("click", function () {
    $(".bank").hide("on");
  });

  //탭 메뉴 - 롤링 페이퍼

  $(".tab_menu>li").on("click", function () {
    var $this = $(this); //자기 자신
    var idx = $(this).index(); //자기 자신의 번호 0 1 2
    //console.log($this,idx);
    //$('.tab_content>div').eq(idx).show().siblings().hide();
    $(".tab_content>div").eq(idx).addClass("on").siblings().removeClass("on");
    $this.addClass("on").siblings().removeClass("on");
  });

  //(0자/100자)
  $(".input_txt").keyup(function (e) {
    let content = $(this).val(); // 글자수 세기
    if (content.length == 0 || content == "") {
      $(".textCount").text("0자");
    } else {
      $(".textCount").text(content.length + "자");
    } // 글자수 제한
    if (content.length > 100) {
      // 100자 부터는 타이핑 되지 않도록
      $(this).val($(this).val().substring(0, 100)); // 100자 넘으면 알림창 뜨도록
      alert("글자수는 100자까지 입력 가능합니다.");
    }
  });
  //(0자/100자)
  $(".txtbox_txt").keyup(function (e) {
    let content = $(this).val(); // 글자수 세기
    if (content.length == 0 || content == "") {
      $(".textCount02").text("0자");
    } else {
      $(".textCount02").text(content.length + "자");
    } // 글자수 제한
    if (content.length > 20) {
      // 100자 부터는 타이핑 되지 않도록
      $(this).val($(this).val().substring(0, 20)); // 20자 넘으면 알림창 뜨도록
      alert("글자수는 20자까지 입력 가능합니다.");
    }
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

// var elem = document.querySelector(".m-p-g");

// document.addEventListener("DOMContentLoaded", function () {
//   var gallery = new MaterialPhotoGallery(elem);
// });
