$(function(){
    //----------------------------------------------------
    $('#main').fullpage({
        anchors:['sc01', 'sc02', 'sc03', 'sc04', 'sc05'],
        //navigation: true,
        
        afterLoad: function(origin, destination, direction){
            var idx=destination.index;
            console.log(idx); // 0,1,2....
            $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        },
        });
    //-------------------------------------------------------
});
    