$(function(){
    //-------------------------------------------------------
        $('#main').fullpage({
            anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
            //navigation: true,
            afterLoad: function(origin, destination, direction){
                let txt = $('.navbar>li').eq(destination.index).find('a').text();
                $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
                $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
                $('.now').text(txt);
                destination.index===0 ? $('.header').fadeIn() : $('.header').fadeOut();
                destination.index===0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
            },
        });
    
        const HD=document.querySelector('#hd');

        window.addEventListener('scroll', ()=>{
            let sct=window.scrollY;
            sct>0 ? HD.classList.add('on') : HD.classList.remove('on')
        });
        //--바를 움직이기 위해--//
        //-1.먼저 바를 이동할 내용 을 쓴다-//
        // const SLIDEBAR = document.querySelector('.main_btn .bar');
        //-2. 다음에 메인 슬라이드-//
        const mainSlier = new Swiper('.main_slider', {
            loop:true,
            slidesPerView: 2,
            spaceBetween: 100,
            autoplay:{
                delay:2000,
            },
            pagination: {
                el: '.main_visual .page',
                type: "fraction",
            },
            navigation: {
                nextEl: '.main_visual .btn_next',
                prevEl: '.main_visual .btn_prev',
            },
            autoplayDisableOnInteraction:false,
        
        });

       //-3. 마자막으로 바가 이동하는 내용--//
        // SLIDEBAR.classList.add('on');
        // mainSlier.on('slideChangeTransitionEnd', ()=>{
        //     SLIDEBAR.classList.add('on')
        // });
        // mainSlier.on('slideChangeTransitionStart', ()=>{
        //     SLIDEBAR.classList.remove('on')
        // });
     
            $('.man_slide').slick({
                // autoplay: true,
                // pauseOnHover: false,
                // pauseOnFocus: false,
                // fade: true,
                // arrows: false,
                // autoplaySpeed:3500,
               // slidesToShow:5,

            });

        
        

        
    
    
    
    
    
        
    //-------------------------------------------------------
    })
    
    
    
    