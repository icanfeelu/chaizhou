/**
 * Created by HZJS04-02 on 2016/8/19.
 */

//fixed/friendlink
$(function() {
    var duration = 2000;
    var duration1 = 1000;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 1000) {
            $('#QRcode').show();
            $('#Hiddenframe').show();
        } else {
            $('#QRcode').hide();
            $('#Hiddenframe').hide();
        }
    });
    $('#QRcode').on('mouseenter',function(){
        $('#QRcode').stop().animate({
            left:0,
        },duration1)
    })
    $('#QRcode').on('mouseleave',function(){
        $('#QRcode').stop().animate({
            left:-80,
        },duration1)
    })

    $('#Hiddenframe ul li').eq(3).on('click', function (evt) {
        //evt.preventDefault();
        $(window).scrollTop(0);
    });
    $('#Hiddenframe ul li').eq(0).on('click', function (evt) {
        //evt.preventDefault();
        location.href='shopcart.html'
    });

    var timer = setInterval(friendlink,3000);
    function friendlink(){
        var top1 = parseInt($('.friendlink_ul').css('top'));
        if(parseInt($('.friendlink_ul').css('top'))<=-120){
            $('.friendlink_ul').stop(true,true).css('top',0)
            top1=0;
        }
            $('.friendlink_ul').animate({
                top:top1-28,
            },duration,function(){
            })


    }

});


