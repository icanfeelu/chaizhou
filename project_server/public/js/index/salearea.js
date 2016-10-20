/**
 * Created by HZJS04-02 on 2016/8/19.
 */

//saleMiddle//saleMiddle//saleMiddle
$(function(){
    $('.salem1 .salem_center').css({
        position:'absolute',
        top:'50%',
        left:'50%',
        'margin-left': '-167px',
        'margin-top': '-50px'
    })
    $('.salem1 .salemSpan1').css({
        position:'absolute',
        top:'50%',
        'margin-top':'-30px',
        'left': '100px',
    })
    $('.salem1 .salemSpan2').css({
        position:'absolute',
        top:'50%',
        'margin-top':'-30px',
        'right': '100px'
    });

    //coinColorchange
    $('.salem1').on('mouseenter',function(){
        $('.salem1 span').show();
        $('.salemSpan1').children('img')[0].style.opacity = 0.7;
        $('.salemSpan2').children('img')[0].style.opacity = 0.7;
    })
    $('.salem1').on('mouseleave',function(){
        $('.salem1 span').hide();
    })
    $('.salemSpan1').on('mouseenter',function(){
        $(this).children('img')[0].src='resource/img/index/sale/sale8.png';
        $(this).children('img')[0].style.opacity = 1;
    })
    $('.salemSpan1').on('mouseleave',function(){
        $(this).children('img')[0].src='resource/img/index/sale/sale6.png';
        $(this).children('img')[0].style.opacity = 0.7;
    })
    $('.salemSpan2').on('mouseenter',function(){
        $(this).children('img')[0].src='resource/img/index/sale/sale9.png';
        $(this).children('img')[0].style.opacity = 1;
    })
    $('.salemSpan2').on('mouseleave',function(){
        $(this).children('img')[0].src='resource/img/index/sale/sale7.png';
        $(this).children('img')[0].style.opacity = 0.7;
    })

    //coinClickblink
    coinClickblink();
    function coinClickblink(){
        var current = 2;
        $('.salemSpan1').on('click',function(){
            current++;
            if(current>4){
                current = 2;
            }
            $('.salem_center').find('img').attr('src','resource/img/index/sale/sale'+current*11+'.png')
            $('.salem1 ul li').find('img').attr('src','resource/img/index/sale/sale'+current+'.png')
        });

        $('.salemSpan2').on('click',function(){
            if(current==2){
                current = 4;
            }else{
                current--;
                if(current<2){
                current = 2;
                }
            }


            $('.salem_center').find('img').attr('src','resource/img/index/sale/sale'+current*11+'.png')
            $('.salem1 ul li').find('img').attr('src','resource/img/index/sale/sale'+current+'.png')
        })
    }



});