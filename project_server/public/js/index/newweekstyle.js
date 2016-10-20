/*** Created by HZJS04-02 on 2016/8/22.*/
//每周上新solider
$(function(){
    var dur = 1500;
    var current = 0;
    var before = 0;
    $('.weeknew_coin').on('click','a',function(){
        console.log('before'+before);
        $('.weeknewsliderpic').eq(before).stop().animate({opacity:0},dur);
        var Index = $(this).index();
        console.log('Index'+Index);
        before = Index;
        $('.weeknewslider .weeknewsliderpic').eq(Index).stop().animate({opacity:1},dur)

        $('.weeknewslider a').css('background','#ccc');
        $(this).css('background','#CC6B21');

    })
    //span
    $('.weeknewslider_span1').on('click',function(){
        $('.weeknew_coin a').css('background','#ccc');
        $('.weeknewsliderpic').eq(current).stop().animate({opacity:0},dur);
        current--;
        if(current==-1){
            current=6;
        }
        var current_a = current;
        $('.weeknewsliderpic').eq(current).stop().animate({opacity:1},dur);
        $('.weeknew_coin a').eq(current).css('background','#CC6B21');
    })
    $('.weeknewslider_span2').on('click',function(){
        $('.weeknew_coin a').css('background','#ccc');
        $('.weeknewsliderpic').eq(current).stop().animate({opacity:0},dur);
        current++;
        if(current==7){
            current=0;
        }
        var current_a = current;
        $('.weeknewsliderpic').eq(current).stop().animate({opacity:1},dur);
        $('.weeknew_coin a').eq(current).css('background','#CC6B21');
    })

    $('.weeknewslider_span1').on('mouseenter',function(){
        clearInterval(timer);
        $(this).animate({opacity:1});
    });
    $('.weeknewslider_span1').on('mouseleave',function(){
        timer = setInterval(newweek,2000);
        $(this).animate({opacity:0.2});
    });
    $('.weeknewslider_span2').on('mouseenter',function(){
        clearInterval(timer);
        $(this).animate({opacity:1});
    })
    $('.weeknewslider_span2').on('mouseleave',function(){
        timer = setInterval(newweek,2000);
        $(this).animate({opacity:0.2});
    });
     var timer = setInterval(newweek,2000);
    function newweek(){
        $('.weeknew_coin a').css('background','#ccc');
        $('.weeknewsliderpic').eq(current).stop().animate({opacity:0},dur);
        current++;
        if(current==7){
            current=0;
        }
        var current_a = current;
        $('.weeknewsliderpic').eq(current).stop().animate({opacity:1},dur);
        $('.weeknew_coin a').eq(current).css('background','#CC6B21');
    }

    //clear
    //$('.weeknewslider').on('mouseenter',function(){
    //    clearInterval(timer);
    //})
    //$('.weeknewslider').on('mouseleave',function(){
    //    timer = setInterval(newweek,3000);
    //})

})
