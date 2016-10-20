/**
 * Created by HZJS04-02 on 2016/8/20.
 */
$(function() {
    //登录字体状态切换
    $(".register_span").on('click', function () {
        $('.focus').removeClass('focus');
        $(this).addClass('focus');
    })
    $('#register_span').on('click', function () {
        location.href = "login.html"
    })

    //判断邮箱格式
    $('#register_mail_input').on('blur', function () {
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        var mailVal = $('#register_mail_input').val();
        if (mailVal === '') {
            $('#register_mail_div').hide();
        } else if (reg.test(mailVal)) {
            $('.mail-name')[0].style.display = 'block';
            $('#register_mail_div').hide();

        } else {
            $('#register_mail_div').show();
        }
    });
    $('#register_mail_input').on('focus', function () {
        $('.mail-name').hide();
        $('#register_mail_div').hide();
    });
    //判断手机号码
    $('#register_pnm_input').on('blur', function () {
        var reg = /^1[3|4|5|7|8]\d{9}$/;
        var numVal = $('#register_pnm_input').val();
        if (numVal === '') {
            $('#register_num_div').hide();
        } else if (reg.test(numVal)) {
            $('.num-name')[0].style.display = 'block';
            $('#register_num_div').hide();
        } else {
            $('#register_num_div').show();
        }
    });
    $('#register_pnm_input').on('focus', function () {
        $('.num-name').hide();
        $('#register_num_div').hide();
    });
    //判断密码
    $('#register_pwd_input').on('blur', function () {
        var reg = /^[a-zA-Z0-9]{8,20}$/;
        var pwdVal = $('#register_pwd_input').val();
        if (pwdVal === '') {
            $('#register_pwd_div').hide();
        } else if (reg.test(pwdVal)) {
            $('.pwd-name')[0].style.display = 'block';
            $('#register_pwd_div').hide();

        } else {
            $('#register_pwd_div').show();
        }
    });
    $('#register_pwd_input').on('focus', function () {
        $('.pwd-name').hide();
        $('#register_pwd_div').hide();
    });
    //密码确认
    $('#register_cfm_input').on('blur', function () {
        var pwdVal = $('#register_pwd_input').val();
        var cfmVal = $('#register_cfm_input').val();
        if (cfmVal === '') {
            $('#pwd_div').hide();
            $('.cfm_pwd-name').hide();
        } else if (cfmVal === pwdVal) {
            $('.cfm_pwd-name')[0].style.display = 'block';
        } else {
            $('#pwd_div').show();
            $('.cfm_pwd-name').hide();
        }
    });
    $('#register_cfm_input').on('focus', function () {
        $('#pwd_div').hide();
    });
    //滑块
    $('#small_slider').on('mousedown', function (evt) {
        //点击鼠标相对img的坐标并记录坐标
        evt.preventDefault();
        var that = this;
        var clickLeft = parseInt(evt.clientX - $('#cfmPic').offset().left - parseInt($(this).css('left')));
        var clickTop = parseInt(evt.pageY - $('#cfmPic').offset().top - parseInt($(this).css('top')));
        //console.log('clickTop'+"  "+clickLeft);
        //console.log('evt.clientY'+"  "+$('#cfmPic').offset().top);
        //console.log('evt.clientY'+"  "+$(this).css('left'));
        //console.log('evt.clientY'+"  "+clickTop);
        $(document).on('mousemove', function (evt) {
            evt.preventDefault();
            var currentLeft = parseInt(evt.clientX - $('#cfmPic').offset().left - clickLeft);
            var currentTop = parseInt(evt.pageY - $('#cfmPic').offset().top - clickTop);
            if (currentLeft <= 70) {
                currentLeft = 70;
            }
            if (currentLeft >= 270) {
                currentLeft = 270;
            }
            if (currentTop <= 20) {
                currentTop = 20;
            }
            if (currentTop >= 69) {
                currentTop = 69;
            }
            $(that).css({
                left: currentLeft,
                top: currentTop
            });

            if ((currentLeft >= 204 && currentLeft <= 208) && (currentTop >= 48 && currentTop <= 51)) {
                $('.small_slider_pic')[0].style.display = 'block';
            } else {
                $('.small_slider_pic').hide();
            }
        })
        $(document).on('mouseup', function (evt) {
            evt.preventDefault();
            $(document).off('mousemove');
            $(document).off('mouseup');
        })
    })

    //submit按钮
    $('#register_button').on('click', function () {
        var loginuser_Val = $('#register_mail_input').val();
        var loginpwd_Val = $('#register_pwd_input').val();
        if ($('.mail-name')[0].style.display === 'block' && $('.num-name')[0].style.display === 'block'
            && $('.pwd-name')[0].style.display === 'block' && $('.cfm_pwd-name')[0].style.display === 'block' &&
            $('.small_slider_pic')[0].style.display === 'block' && $('#register_p input').prop('checked') === true) {
            $.post("/api/register", {
                user: loginuser_Val,
                password: loginpwd_Val
            }, function (data) {
                if (data.ret) {
                    location.href = 'login.html'
                }
            })
        }


    });
})