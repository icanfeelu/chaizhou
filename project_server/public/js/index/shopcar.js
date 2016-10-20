/**
 * Created by HZJS04-02 on 2016/8/23.
 */
$(function(){
    var username=initLoginStats();
    $('.top img').on('click',function(){
            location.href="moonbasa.html"
    })
    //获取购物车热销区域商品
    $.get('/api/carproduct',function(data){
        for(var i=0;i<data.goods.length;i++){
            var modelVal = $('#shopcartmodel').html();
            var newmodelVal = modelVal.replace("{{src}}",data.goods[i].src)
                .replace("{{nowprice}}",data.goods[i].nowprice)
                .replace("{{beforeprice}}",data.goods[i].beforeprice)
                .replace("{{describe}}",data.goods[i].describe);
            $('.rexiao_t ul').append(newmodelVal);
        }
    });
    //获得购物车中的数据

    $.get("/api/getcart",{
        name:username
    },function(data){
        if(data.goods.length!=0){
            $('.carbody_good .space').hide();
        }else{
            $('.carbody_good .space').show();
        }
        var len = data.goods.length;
        for(var i=0;i<len;i++){
            //alert(data[0].size)
            var modelVal = $('#shopcartmodel1').html();
            var newmodelVal = modelVal.replace("{{size}}",data.goods[i].size)
                .replace("{{color}}",data.goods[i].color)
                .replace("{{num}}",data.goods[i].num)
                .replace("{{price}}",data.goods[i].price)
                .replace("{{src}}",data.goods[i].src);
            $('.carbody_good').append(newmodelVal);
            blink();
        }
        //删除购物车商品
        $('.box .box_do .cutcut').on('click',function(){
            $(this).parent().parent().parent().parent()[0].outerHTML='';
            var goodsIndex = $('.cutcut').index(this);
            console.log(goodsIndex);
            $.get("/api/removegoodsfromcart",{
                name:username,
                goodsIndex:goodsIndex
            },function(data){
                if(data.ret){

                    console.log('clear ok')
                    blink();
                }
            })
        });
    });

    function blink(){
        ////- + 的点击事件
        //$('.carbody_good .box_count span').eq(1).on('click',function() {
        //   console.log($('.carbody_good .box_count span').eq(1))
        //    $('.box_count input').val(++parseInt($('.box_count input')[i].value));
        //});

        //计算购物车中价格数量zz
        var allcount=0;
        var allprice=0;
        var length = $('.carbody_good .box').length;
        for(var i=0;i<length;i++){
            //var prosoko = $('.box_count input')[0].value*$('.box_price span')[i].html;
            $('.carbody_good .box .box_all span')[i].innerHTML=$('.box_count input')[i].value*$('.box_price span')[i].innerHTML;
        }
        //计算件数,总价格,checkbox
        for(var i=0;i<length;i++){
            allcount = parseInt($('.carbody_good .box .box_count input').eq(i).val())+allcount;
            allprice = parseInt($('.carbody_good .box .box_all span').eq(i).html())+allprice;
        }
        $('.payforPart .payforpart_span2').html(allcount+' 件');
        $('.payforPart .payforpart_span4').html('¥ '+allprice);
    }
    //$(".rexiao_t ul").on('mouseenter','li',function(){
    //    $(this).css("border","1px solid red");
    //})
    //$(".rexiao_t ul").on('mouseleave','li',function(){
    //    $(this).css("border","none");
    //})
    $('#top_special').on('mouseenter',function(){
        $('#topshow').show();
    })
    $('#top_special').on('mouseleave',function(){
        $('#topshow').hide();
    })


})