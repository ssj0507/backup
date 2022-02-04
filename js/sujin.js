$(function(){
    //-----------------------------------------------------
    
    var $this=$('.section');
    var $this_s=$('.slide');
    $this.eq(0).addClass('on');
    $('#main').fullpage({
    
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        controlArrows: true, //슬라이드 화살표 숨김
        loopHorizontal: false, //슬라이드 반복 멈춤
        anchors:['intro', '2Page', '3Page', '4Page','5Page', 'footer'],
        //navigation: true,
        navigationPosition: 'right',
        //scrollOverflow:true,          

        afterLoad: function(origin, destination, direction){
            let txt = $('.navbar>li').eq(destination.index).find('a').text();
            $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
            $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
            
        },
        
        afterSlideLoad: function(section, origin, destination, direction) {
            $this_s.eq(destination.index).addClass('on').siblings().removeClass('on');
        }

        
    });
    //슬라이드에 훨이벤트 달기...
    $('#slide').on('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            fullpage_api.moveSlideLeft();
        }
        else{
            fullpage_api.moveSlideRight();
        }
    });

      
    //메뉴
    $('.m_btn').click(function(){
        $(this).toggleClass('on');
        $('.m_bg').slideToggle();
        
    });
    

    
      
    //Web · Ui · UX Design
    new Typed('.l_txt',{
        strings: ['Web · UI · UX Design'],
        typeSpeed:100,
    });
    
    //디자인
    $('.open_pop a').on('click',function(){
        let idx=$(this).parent().index();
        console.log(idx)
        $('.info_ck figure').eq(idx).addClass('on').siblings().removeClass('on');
    });


    $('.info_ck figure i').on('click', function(){
        $(this).parent().removeClass('on');
    });


   $('.info_ck figure').on('scroll wheel touchmove', function(e){
        e.stopPropagation();
   });


    //-----------------------------------------------------
});