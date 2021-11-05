$(function(){
    //--------------------------
    
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
    //메인 슬라이드 - 버튼//

    $('#main_visual .slick-dots li').on('click',function(){
        var idx=$(this).index();
        console.log(idx);
        $('.main_slider').slick('slickGoTo',idx)
        $(this).addClass('on').siblings().removeClass('on');
    
    });

        // 메인 슬라이드
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        dots:true,
    
    });

    //제품 슬라이드
$('.pr_slider'). slick({
    
    arrows:false,
    autoplay:true,
    slidesToShow: 3,
    //centerMode:true,
    //centerPadding:"100px",

});


//제품 슬라이드 가운데 커지는거랑 바 이동//

$('.pr_slider figure').eq(4).addClass('on')
$('.pr_slider').on('afterChange',function(e,s,c){
    //c = 1,2.......
    $('.pr_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
    $('#content01 .slide_bar>span ').css({left:c*100})
    
});


//제품 슬라이드 화살표//

$('#content01 .btn i.xi-angle-left-thin').on('click',function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .btn i.xi-angle-right-thin').on('click',function(){
    $('.pr_slider').slick('slickNext');
});




//사이트 가기//
$('#link select').on('change',function(){
    var link=$(this).val();
    if(link) window.open(link)
});

    //팝업 없어지는거//
$('.popup_close').on('click',function(){
    $(this).parent().hide();
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
   $('#scroll_banner').css({top:300+sct})
});







//--------------------------
});