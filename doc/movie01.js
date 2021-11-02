$(function(){
    //--------------------------
    $('#bgndVideo').YTPlayer({
        videoURL:'http://youtu.be/BsekcY04xvQ',containment:'#visual',
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


    
//--------------------------
})