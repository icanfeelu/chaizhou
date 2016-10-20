/**
 * Created by HZJS04-02 on 2016/8/18.
 */
//轮播
//轮播
$(function(){
    var current=0,timer;
    bannerOpacity();
    function bannerOpacity(){
        $('#bannerTopradius a').eq(current).css('backgroundColor','#ccc');
        $('#bannerTopradius').on('mouseenter','a',function(){
            clearInterval(timer);
            $('#bannerTopradius a').css('backgroundColor','black');
            $('.opacity').removeClass('opacity');
            current = $(this).index();
            $('.bannerpic').eq(current).addClass('opacity');
            $(this).css('backgroundColor','#ccc');

        });

        $('#bannerTopradius').on('mouseleave','a',function(){
            timer = setInterval(timerDo,4000);
        })
        var timer = setInterval(timerDo,4000);

        function timerDo(){
            current++;
            if(current===5){
                current=0;
            }
            $('#bannerTopradius a').css('backgroundColor','black');
            $('.opacity').removeClass('opacity');
            $('.bannerpic').eq(current).addClass('opacity');
            $('#bannerTopradius a').eq(current).css('backgroundColor','#ccc');

        }

    }
});