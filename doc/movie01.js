$(function(){
    //--------------------------
    $('#bgndVideo').YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',
        containment:'#visual',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
    });
    $('#visual i.xi-pause').on('click',function(){
        $('#bgndVideo').YTPause();
    });

    $('#visual i.xi-play').on('click',function(){
        $('#bgndVideo').YTPlay();
    });

    $('#visual i.xi-tv').on('click',function(){
        $('#bgndVideo').YTPFullscreen();
    });


    $('#mv01').YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',
        containment:'self',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
        playOnlylfVisible:true,
        optimizeDisplay:false,
    });
    $('#movie02 i.xi-pause').on('click',function(){
        $('mv01').YTPause();
    });

    $('#movie02 i.xi-play').on('click',function(){
        $('mv01').YTPlay();
    });

    $('#movie02 i.xi-tv').on('click',function(){
        $('mv01').YTPFullscreen();
    });


    
//--------------------------
})