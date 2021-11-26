$(function(){
    // 스크롤할때 헤드변경

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }
    });

    $('.main_slider').slick({
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        arrows:false,
        dots:true,
    });

 //------화살표------//

 $('#main_visual .main_btn i.xi-angle-left-thin').on('click', function(){
    $('.main_slider').slick('slickPrev');
});
$('#main_visual .main_btn i.xi-angle-right-thin').on('click', function(){
    $('.main_slider').slick('slickNext');
});



  // 첫번째 섹션 제품 슬라이드
$('.pr_slider'). slick({
    
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    slidesToShow: 4,
    //모바일용 slick으로 한면에 꽉차게 하는것//
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
    ]

});


//첫번째 섹션 제품 슬라이드 가운데 커지는거랑 바 이동//

$('.pr_slider figure').eq(4).addClass('on')
$('.pr_slider').on('afterChange',function(e,s,c){
    //c = 1,2.......
    $('.pr_slider figure').eq(c+8).addClass('on').siblings().removeClass('on');
    $('#content01 .slide_bar>span').css({left:c* (100 / 8) + "%"})
    
});


//첫번째 섹션 제품 슬라이드 화살표//

$('#content01 .con01_btn i.xi-angle-left-thin').on('click',function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .con01_btn i.xi-angle-right-thin').on('click',function(){
    $('.pr_slider').slick('slickNext');
});

   

//탭 메뉴//
$('.tab_menu li').on('click', function(){
    var idx=$(this).index();
    // $('.tab_con>div').eq(idx).show().siblings().hide();
    $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
});

//세번째 js로 하는 slick 버전//

var Rsd = $('.r_slider');

var slickOptions = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
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




//네번째 섹션 슬라이더//

$('.con04_slider02').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2500,
    pauseOnHover:false,
    pauseOnFocus:false,

    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
    ]


});

//네번째 섹션 제품 슬라이드 화살표//

$('.container .con04-d i.xi-angle-left-thin').on('click',function(){
    $('.con04_slider02').slick('slickPrev');
});
$('.container .con04-d i.xi-angle-right-thin').on('click',function(){
    $('.con04_slider02').slick('slickNext');
});


//다섯번째 섹션 슬라이더//
  
$('.con05_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow:1,
    autoplaySpeed:1500,
    dots:true,
    responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
    ]

});
//------다섯번째 섹션화살표------//

$('#content05 .con05_btn i.xi-angle-left-thin').on('click', function(){
    $('.con05_slider').slick('slickPrev');
});
$('#content05 .con05_btn i.xi-angle-right-thin').on('click', function(){
    $('.con05_slider').slick('slickNext');
}); 

    //toTop//
$('#toTop').on('click', function(){
    $('html, body').animate({scrollTop:0},400)
});

$(window).on('scroll', function(){
    var sct=$(window).scrollTop();
    //if(sct>400){
    //    $('#toTop').fadeIn()
   // }else
    //$('#toTop').fadeOut()
    //}
   sct>400 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
   $(this).css({top:300+sct})
});

//다단메뉴에서 호버부분을 ( #header nav>ul>li:hover .total {display:none;})을 할때 사용하는것이다.//
$('#header nav>ul>li>a').on('click', function(e){
    if($('.ddgf').hasClass('on')) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.total').stop().slideUp();
    }
});

//모바일용 메뉴//

$('#mopen').on('click', function(){
    $('.ddgf').toggleClass('on');
    $('.search').fadeToggle();
})

$(window) .on('resize', function(){
    $('.total').removeAttr('style')
});





});  