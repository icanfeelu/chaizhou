/**
 * Created by HZJS04-02 on 2016/8/21.
 */
$(function(){
    $.get("/api/getproduct",function(data){
        for(var i=0;i<data.goods.length;i++){
            var modelVal = $('#productmodel').html();
            var newmodelVal = modelVal.replace("{{src}}",data.goods[i].src)
                    .replace("{{price}}",data.goods[i].price)
                    .replace("{{describe}}",data.goods[i].describe);
            $('#BIgbox').append(newmodelVal);
        }
    });

    $("#BIgbox").on('mouseenter','.box',function(){
        $(this).css("border","1px solid red");
    })
    $("#BIgbox").on('mouseleave','.box',function(){
        $(this).css("border","1px solid #ccc");
    })

})