/**
 * Created by HZJS04-02 on 2016/8/22.
 */
//xinping
$(function(){
    $('.hotsale').on('click','span',function(){
        var Index = $(this).index();
        $('.hotsale img').prop('src','resource/img/index/hotsale/hotsale'+Index+'.png');
        $('.hotsalePic .hotsalePic1').animate({
            top:-804*(Index-1)
        },200)
    });
});