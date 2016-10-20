/*** Created by HZJS04-02 on 2016/8/23.*/
$(function(){
    var currentname=initLoginStats();
    $('.top1 .top1_li7 a').on('click',function(){
        location.href="shopcart.html";
    })
    var bracolor='';
    var brasize='';

    $('.topshow1 span').on('click',function(){
        $('.topshow').stop(true,true).hide(1000,'linear');
    });
    //切换被放大的图片
    $('.Part1_div ul').on('mousemove','li',function(){
        $(this).css('border','1px solid #pink')
        $(this).css('opacity',0.5)
        var Index = $(this).index();
        $('.magnifier img').attr('src','resource/img/product/propart'+(Index+1)+'.jpg')
        $('.magnifier .bigshow').css({
            background:"url(resource/img/product/pro"+11*(Index+1)+"-H.jpg)"
        })
    })
    $('.Part1_div ul').on('mouseleave','li',function(){
        $(this).css('opacity',1)
    })
    //放大镜
    $('.magnifier').on('mousemove',function(evt){
        var magnifierLeft = $(this).offset().left;
        var magnifierTop = $(this).offset().top;
        $('.bigshow').show(1000,"swing")
        $('.float-tip').show();
        var enterLeft = evt.clientX-magnifierLeft-$('.float-tip').width()/2;
        var enterTop = evt.pageY-magnifierTop-$('.float-tip').height()/2;
        console.log(evt.pageY);
        console.log(magnifierTop);
        console.log($('.float-tip').height()/2);
        if(enterLeft<0){
            enterLeft=0
        }
        if(enterLeft>=190){
            enterLeft=190
        }
        if(enterTop<=0){
            enterTop=0;
        }
        if(enterTop>=254){
            enterTop=254;
        }
        $('.float-tip').css({
            left:enterLeft,
            top:enterTop
        })
        $('.bigshow').css({
            backgroundPosition:(-(enterLeft*1.948))+'px '+(-(enterTop*1.95))+'px'
        })
    })
    $('.magnifier').on('mouseleave',function(evt){
        $('.bigshow').stop(true,true).hide(1000,"swing")
        $('.float-tip').hide();
    })
    //nav中a标签
    $('.nav1 .nav1_a').on('mouseenter',function(){
        $('.focus').removeClass('focus');
        $(this).addClass('focus');
    })
    $('.nav1 .nav1_a').on('mouseleave',function(){
        $('.focus').removeClass('focus');
    })
    $('#comewhite').on('mouseenter',function(){
        $(this).css('color','white')
    })
    $('#comewhite').on('mouseleave',function(){
        $(this).css('color','#e10164')
    })
    //二维码动态图
    $('#gifpic').on('click',function(){
        $('.codeshow11').animate({
            height:140
        })
    })
    $('#codeshowsmall').on('click',function(){
        $('.codeshow11').animate({
            height:0
        })
    })
    //dd点击事件
    $('#dl1 .dd1').on('click',function(){
        $('#dl1 .dd2').css('border','2px solid #cecccf');
        $(this).css('border','2px solid #e50065');
        bracolor = $(this).html();
    })
    $('#dl1 .dd2').on('click',function(){
        $('#dl1 .dd1').css('border','2px solid #cecccf');
        $(this).css('border','2px solid #e50065');
        bracolor = $(this).html();
    })
    $('#dl2 .dl2_dd').on('click',function(){
        $('.focus').removeClass('focus');
        brasize = $(this).html();
        $(this).addClass('focus')
    })
    //提交数据
    setInterval(checked,500);
    function checked() {

        if (bracolor === '' || brasize === '') {
            //alert('请选择样式')
            $('#important').css({
                background: '#ccc'
            })
        } else {
            $('#important').css({
                background: '#e50065'
            })
        }
    }
    $('#important').on('click',function(){
        if(bracolor===''|| brasize===''){
                console.log('err');
        }else{
            var num = $('#product_num').val();
            //var currentname = $('#user-login-name').val();
            var price = $('.part2_gary_l .span2').html();
            var src = $('.magnifier img')[0].src;
            $.get('/api/addcart',{
                name:currentname,
                goods:{
                    color:bracolor,
                    size:brasize,
                    num:num,
                    price:price,
                    src:src
                }

            },function(data){
                if(data.ret){
                    alert('添加购物车成功')
                }
            })
        }
    })
});