$(function(){
//--------------------------
const mainSlider=$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    //vertical:true,-----아래 위로 움직인다
    //fade:true,   -----흐려졌다 나온다.
    fade:true,

});

let idx=1;

mainSlider.on('afterChange', function(e,s,c){
    //concole.log(c);0 1 2 
    $('.num').css({backgroundPositionY:-500*c-6000*idx});
    idx++;//idx=idx+1;

})

//--------------------------
});