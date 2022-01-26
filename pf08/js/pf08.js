$(function(){
    //----------------------------------------------------
        $('#main').fullpage({
            anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
            //navigation: true,
            afterLoad: function(origin, destination, direction){
                let txt = $('.navbar>li').eq(destination.index).find('a').text();
                $('.section').eq(destination.index).addClass("on").siblings().removeClass('on');
                $('.navbar>li').eq(destination.index).addClass("on").siblings().removeClass('on');
                
            },
        });

        //스크롤할때 헤드변경

        $(window).on('scroll', function () {
            var sct = $(window).scrollTop();
            console.log(sct);
            sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on');
        });
        
        //헤드 메뉴
        $('header .gnb_bnt').on('click',function(){
            $('.gnb_b').toggleClass('on');
        });
            
        //오시는길 팝업    
        $('.map').on('click',function(){
            $('.map_tex').show('on')
        });
        $('.map_tex>i').on('click',function(){
            $('.map_tex').hide('on')
        });

        //예약안내 팝업    
        $('.res').on('click',function(){
            $('.res_t').show('on')
        });    
        $('.res_t>i').on('click',function(){
            $('.res_t').hide('on')
        });    
     

        //메인 비주얼
        $('.main_slider').slick({
            arrows:false,
            autoplay:true,
            fade:true,
            autoplaySpeed:4000,
            pauseOnHover:false,

        });

        //숙박소개 슬라이드    
        $('.about').slick({
            autoplay:true,
            autoplaySpeed:3000,
            dots:true,
            fade: true,
            arrows:false,
            pauseOnFocus: false,
            pauseOnHover:false,
        });


        //세번째 섹션 - 탭메뉴
        $('.tabm li ').on('click',function(){
            var idx=$(this).index();
           $('.tabm li').removeClass('on');
           $(this).addClass('on');
           $('.tabm_bar span').animate({width:12.5+($(this).index())*25+"%"},500);
           $('.dot').animate({left:12.5+($(this).index())*25+"%"},500);
           $('.tab_con>div').eq(idx).addClass('on').siblings().removeClass('on');
           
        });

        $('.p_slider').slick({
            asNavFor: '.left_text',
            arrows:false,
            autoplay:true,
            autoplaySpeed:2000,
            dots:true,
            pauseOnHover:false,
            pauseOnFocus:false,
          });

          $('.left_text').slick({
            asNavFor: '.p_slider',
            focusOnSelect: false,
             arrows: false,
             fade:true,
          });

          //방 섹션 화살표//

            $('.room_btn i.xi-angle-left').on('click', function(){
                $('.p_slider').slick('slickPrev');
            });
            $('.room_btn i.xi-angle-right').on('click', function(){
                $('.p_slider').slick('slickNext');
            });

            //pool 슬라이드
            $('.pool_slider').slick({
                autoplay:true,
                autoplaySpeed:3000,
                dots:false,
                fade: true,
                arrows:false,
                pauseOnFocus: false,
                pauseOnHover:false,
                asNavFor: '.pool_text',
            }); 

          
              $('.pool_text').slick({
                asNavFor: '.pool_slider',
                focusOnSelect: false,
                 arrows: false,
                 fade:true,
              });

            //퀵메뉴 
            $('.m_bar').click(function(){
                $(this).toggleClass('on');
                
            });
    
    
      
     

        
        

        
    
    
    
    
    
        
    //-------------------------------------------------------
    })
    
    
    
    