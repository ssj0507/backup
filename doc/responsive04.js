$(function(){
//----------------------------------
$('.main_slider').slick({
    arrows:false,

});

//다단메뉴//
$('.gnb>ul>li>a').on('click', function(e){
    if($('.gnb').hasClass('on')) {
        e.preventDefault();
        //$('.submenu').hide();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.submenu').stop().slideUp();

    }
    
});

//모바일용 메뉴//

$('.mopen').on('click', function(){
    $('.gnb').toggleClass('on');
    $('.sns').fadeToggle();
})

$(window) .on('resize', function(){
    $('.submenu').removeAttr('style')
});





//-------------------------------------
});