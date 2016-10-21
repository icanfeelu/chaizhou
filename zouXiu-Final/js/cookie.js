//保存cookie
function setCookie(name,value,days,path){
	//编码
	name=encodeURI(name);
	var str=name+"="+value;
	if(days!=undefined){
		var now=new Date();
		now.setDate(now.getDate()+days);
		str=str+";expires="+now.toGMTString();
	}
	if(path!=undefined){
		str=str+";path="+path;
	}
	document.cookie=str;
}



//根据cookieName获取cookieValue
function getCookieValueByName(name){
	var value="";
	var cookies=document.cookie.split("; ");
	for(var i=0;i<cookies.length;i++){
		var arr=cookies[i].split("=");
		//解码
		var cname=decodeURI(arr[0]);
		if(cname==name){
			value=arr[1];
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
	setCookie(name,1,-1);
}





