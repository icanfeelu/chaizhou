/**
 * Created by Administrator on 2016/8/17.
 */

var path=require("path");
var fs=require("fs");

var USER_FILE=path.join(__dirname,"data/user.json");
var CART_FILE=path.join(__dirname,"data/cart.json");

var experss=require("express");
var bodyParser=require("body-parser");


var app=experss();

app.set("port",10000);
app.use("/",experss.static(path.join(__dirname,"www")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(app.get("port"),function(){
    console.log("Server start http://loaclhost:"+app.get("port"));
})

app.get("/api/checkUser",function(req,res){
    var user =req.query.name;
    console.log(req.query);
    fs.readFile(USER_FILE,function(err,data){
        if(err)
        {
            console.log(err);
            process.exit(1);
        }
        var registedUsers=JSON.parse(data);
        var len=registedUsers.length;
        console.log(registedUsers);
        for(var i=0;i<len;i++){
            if(registedUsers[i].name==user) {
                console.log("sss");
                res.json({ret: true});
                return;
            }
        }
        res.json({ret: false});
    })
})

app.post("/api/login",function(req,res){
    var user=req.body.user;
    var pwd=req.body.pwd;
    fs.readFile(USER_FILE,function(err,data){
        if(err){
            console.log(err);
            process.exit(1);
        }else{
            var registerUsers=JSON.parse(data);
            var len=registerUsers.length;
            console.log(registerUsers);
            for(var i=0;i<len;i++){
                console.log(user,pwd);
                console.log(registerUsers[i])
                if(registerUsers[i].name===user)
                {
                    console.log(user,pwd);
                    if(registerUsers[i].password===pwd)
                    {
                        res.json({
                            msg:true
                        })
                        return ;

                    }else{
                        res.json({
                            msg:false
                        })
                        return;
                    }
                }
            }
            res.json({
                msg:false
            })
        }
    })
})


app.post("/api/register",function(req,res){
    var user=req.body.name;
    var pwd=req.body.pwd;
    fs.readFile(USER_FILE, function (err, data) {

        if (err) {
            console.error(err);
            process.exit(1);
        }

        var counters = JSON.parse(data);

        var newCounter = {
            name: user,
            password: pwd
        };
        counters.push(newCounter);
        fs.writeFile(USER_FILE, JSON.stringify(counters, null, 4), function (err) {
            // console.log(JSON.stringify(comments));
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json({ret: true});
        });
    });
})


app.post("/api/addcart",function(req,res){
    var user=req.body.user;
    var goods=req.body.goods;
    fs.readFile(CART_FILE, function (err, data) {

        if (err) {
            console.error(err);
            process.exit(1);
        }

        var counters = JSON.parse(data);
        for(var i=0;i<counters.length;i++)
        {
            if(counters[i].user===user){
                counters[i].goods.push(goods);
                break;
            }
        }
        fs.writeFile(USER_FILE, JSON.stringify(counters, null, 4), function (err) {
            // console.log(JSON.stringify(comments));
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json({ret: true});
        });
    });

})
app.post("/api/removegoodsfromcart",function(req,res){
    var user=req.body.user;
    var goodsIndex=req.body.goodsIndex;
    fs.readFile(CART_FILE, function (err, data) {

        if (err) {
            console.error(err);
            process.exit(1);
        }

        var counters = JSON.parse(data);
        for(var i=0;i<counters.length;i++)
        {
            if(counters[i].user===user){
               counters[i].goods.splice(goodsIndex,1);
                console.log(counters[i].goods);
                console.log(JSON.stringify(counters));
                break;
            }
        }
        fs.writeFile(CART_FILE, JSON.stringify(counters, null, 4), function (err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json({ret: true});
        });
    });

})
app.get("/api/getcart",function(req,res){
    var userName=req.query.name;
    fs.readFile(CART_FILE,function(err,data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        var counters = JSON.parse(data);
        for(var i=0;i<counters.length;i++)
        {
            if(counters[i].user===userName){
                res.json({
                    goods:counters[i].goods
                })
            }
        }
    })
})


app.get("/api/getcode",function(req,res){
    var codeStyle=req.query.codeStyle;
    var code="";
    if(codeStyle==="number"){
        code=Math.floor(Math.random()*10000);
    }
    else if(codeStyle==="code"){
        for(var i=0;i<4;i++){
            code+=String.fromCharCode(Math.floor(Math.random()*53));
        }
    }
    res.json({
        code:code
    });
})
