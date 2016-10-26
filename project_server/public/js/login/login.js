/*** Created by HZJS04-02 on 2016/8/19.*/

$(function(){
    //登录字体状态切换
    $(".login_span").on('click',function(){
        $('.focus').removeClass('focus');
        $(this).addClass('focus');
    })
    //usercheck
    $('#name_input').on('blur',function(){
        var loginuser_Val = $('#name_input').val();
        if(loginuser_Val!==''){
            $('.name-span').show();
        }
    })
    $('#name_input').on('focus',function(){
            $('.name-span').hide();
            $('#name_div').hide();
    })
    //passwordcheck
    $('#pwd_input').on('blur',function(){
        var loginuser_Val = $('#pwd_input').val();

        if(loginuser_Val===''){
            $('#pwd_div').show();
            $('.pwd-name').hide();
        }else{
            $('.pwd-name').show();
        }
    })
    $('#pwd_input').on('focus',function(){
        $('.pwd-name').hide();
        $('#pwd_div').hide();
    })
    //longinbuttonclick
    $('#login_button').on('click',function(){
        var loginuser_Val = $('#name_input').val();
        var loginpwd_Val = $('#pwd_input').val();
        $.get('/api/checkuser',{
            user:loginuser_Val,
            password:loginpwd_Val
        },function(data){
            if(data.msg){
                document.cookie="shanmao.user="+$('#name_input').val();
                document.cookie="shanmao.loginstats=true";
                location.href='index.html'
            }else{
                $('#name_div').show();
                $('#pwd_div').show();
                $('.name-span').hide();
                $('.pwd-name').hide();
            }
        })
    })
    //zhuce
    $('#a2').on('click',function(){
        location.href='register.html'
    })



});

