/**
 * Created by HZJS04-02 on 2016/8/17.
 */

$(function () {
	//切换到商品详情
	$("#search2 li").on("click","a",function(){
		location.href="Description.html";
	})
	$("#nav1 li").on("click","img",function(){
		location.href="Description.html";
	})
    initLoginStats();
    //导航栏切换图片
    $('#nav1 ul').on('mouseenter', 'li', function () {
        var Index = $(this).index() + 1;
        console.log(Index)
        $(this).children('img').attr('src', 'resource/img/index/nav/nav' + Index * 11 + '.jpg');//.src='resource/img/nav'+Index*11+'.jpg';
    });
    $('#nav1 ul').on('mouseleave', 'li', function () {
        var Index = $(this).index() + 1;
        console.log(Index)
        $(this).children('img').attr('src', 'resource/img/index/nav/nav' + Index + '.jpg');//.src='resource/img/nav'+Index*11+'.jpg';
    });
    //设置1级菜单背景图片
    var seconddivlength = $('.seconddiv').size();
    for (var i = 0; i < seconddivlength; i++) {
        $('.seconddiv').eq(i)
            .css({
                background: 'url(resource/img/index/banner/icon_'+(i+1)+'.png) no-repeat 140px center'
            })
    }
    //$('.bannerToplist_li').eq(5).css({
    //    background: '#fff url(resource/img/index/banner/bannerList'+6+'.png) no-repeat 145px center'
    //});
    //二级菜单
    var timer;
    $('#bannerTopList ul').on('mouseenter', '.bannerToplist_li', function () {
        //$('.bannerToplist_focus').removeClass('bannerToplist_focus');
        $(this).addClass('bannerToplist_focus');
        var Index = $(this).index();
        $('.bannerToplist_toggle').eq(Index).show();
        $(this).find('h1').css('color','white')


    });
    $('#bannerTopList').on('mouseleave', '.bannerToplist_li', function () {
        $(this).removeClass('bannerToplist_focus');
        var Index = $(this).index();
        $('.bannerToplist_toggle').eq(Index).hide();
        $(this).find('h1').css('color','black')
    });
    $('.bannerToplist_toggle').on('mouseenter', function () {
        $(this).show();
    });
    $('.bannerToplist_toggle').on('mouseleave', function () {
        $(this).hide();
    });
    //topQRcode
    $('.topweixin').on('mouseenter',function(){
        $('.topweixin1').show();
    });
    $('.topweixin').on('mouseleave',function(){
        $('.topweixin1').hide();
    });
    $('.topweibo').on('mouseenter',function(){
        $('.topweibo1').show();
    });
    $('.topweibo').on('mouseleave',function(){
        $('.topweibo1').hide();
    });
    $('.topphone').on('mouseenter',function(){
        $('.topphone1').show();
    });
    $('.topphone').on('mouseleave',function(){
        $('.topphone1').hide();
    });
    $('#toplogin').on('click',function(){
        location.href='login.html'
    });
    $('#topregister').on('click',function(){
        location.href='register.html'
    })
});