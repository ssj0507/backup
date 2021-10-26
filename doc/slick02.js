$(function(){
//--------------------------

// 메인 슬라이드
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
   
});


//제품 슬라이드
$('.pr_slider'). slick({
    
    arrows:false,
    autoplay:true,
    slidesToShow: 5,
    dots:true,

});

$('#content01 .btn i.xi-arrow-left').on('click',function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .btn i.xi-arrow-right').on('click',function(){
    $('.pr_slider').slick('slickNext');
});




//--------------------------
})