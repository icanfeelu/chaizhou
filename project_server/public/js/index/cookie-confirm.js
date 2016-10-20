/**
 * Created by Administrator on 2016/8/24.
 */
//保存cookie
//name cookieName  value cookieValue  date expiresDays
function setCookie(name,value,days,path){
    //计算过期时间
    var now = new Date();
    now.setDate( now.getDate() + days );
    // cookie字符串
    //encodeURI() 编码中文为url中的样式
    name = encodeURI(name);
    var str = name+"="+value;
    if(days != undefined){
        str = str +";expires="+now.toGMTString();
    }
    if(path!=undefined){
        str = str +";path="+path;
    }
    //保存cookie
    document.cookie = str;
}
//根据cookieName获取cookieValue
function getCookieValueByName(name){
    var value="";
    //获取所有cookie
    var cookies = document.cookie.split("; ");
    for(var i=0; i< cookies.length; i++){
        //分割每一个cookie，获取name和value
        var arr = cookies[i].split("=");
        //查找cookie
        var cname = decodeURI(arr[0]);
        if(cname==name){
            value = arr[1];
            break;
        }
    }
    return value;
}

//返回cookie数组
function getCookies(){
    return document.cookie.split("; ");
}

//根据cookieName删除cookie
function delCookieByName(name){
    //设置cookie的过期时间为过去的某个时间
    setCookie(name,1,-1);
}


function initLoginStats(){
    var cookieArr=  document.cookie.split("; ");
    for(var i=0; i< cookieArr.length; i++){
        console.log(cookieArr[i]);
        var arr = cookieArr[i].split("=");
        if(arr[0]=="shanmao.user"){
            var username=arr[1];
        }
        if(arr[0]=="shanmao.loginstats"){
            if(arr[1]=="true"){
                $("#user-login-name").html(username);
                $("#user-login-name").parent().prop("href","#");
                $("#register").html("退出登录");
                $("#register").prop("href","javasript:;");
                $("#register").click(function(evt){
                    evt.preventDefault();
                    delCookieByName("shanmao.user");
                    delCookieByName("shanmao.loginstats");
                    $("#user-login-name").parent().prop("href","login.html");
                    location.reload();
                })
                return username;
            }
        }
    }
}