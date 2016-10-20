/**
 * Created by HZJS04-02 on 2016/8/17.
 */



/*************************************************/
/********************load modules*****************/
//get file system to read /write json files
var fs = require('fs');
var path = require('path');

//to create http server
var express= require('express');

//to parse body data
var bodyParser = require('body-parser');
var USER_FILE = path.join(__dirname,'data/user.json');
var PRO_FILE = path.join(__dirname,'data/product.json');
var SHOP_FILE=path.join(__dirname,"data/shop.json");
var shopcar_FILE=path.join(__dirname,"data/shopcar.json");
/*************************************************/
/********************sever init*******************/

//create app(http server)
var app = express();
//set port of the server
app.set('port',8888);
//set root of the server
app.use('/',express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/api/checkuser',function(req,res){
    //ex:/api/checkuser?user=chiahzou
    var user = req.query.user;
    var password = req.query.password;
    //read the json file
    fs.readFile(USER_FILE,function(err,data){
        if(err){
            console.log(err);
            //server stop
            process.exit(1);
        }
        var registeredUser = JSON.parse(data);
        console.log(user);
        for(var i = 0;i<registeredUser.length;i++){
            if(registeredUser[i].name === user&&registeredUser[i].password === password){
                res.json({
                    msg:true
                })
                return;
            }
        }
        res.json({
            msg:false
        });

    })
});
app.get('/api/addcart',function(req,res){
    //ex:/api/checkuser?user=chiahzou
    var user = req.query.name;
    var goods = req.query.goods;
    console.log(req.query)
    //read the json file
    fs.readFile(SHOP_FILE,function(err,data){
        if(err){
            console.log(err);
            //server stop
            process.exit(1);
        }
        var product = JSON.parse(data);
        console.log(user);
        for(var i = 0;i<product.length;i++){
            if(product[i].name === user){
                product[i].goods.push(goods)
                break;
            }
        }
        fs.writeFile(SHOP_FILE, JSON.stringify(product, null, 4), function (err) {
            // console.log(JSON.stringify(comments));
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json({ret: true});
        });

    })
});
//app.post('/api/register',function(req,res){
//    var user = req.body.user;
//    var password = req.body.password;
//    fs.readFile(USER_FILE,function(err,data){
//        if(err){
//            console.log(err);
//            process.exit(1);
//        }
//        var registeredUser = JSON.parse(data);
//        console.log(user);
//        for(var i = 0;i<registeredUser.length;i++){
//            if(registeredUser[i].name === user) {
//                res.json({
//                    msg:true
//                });
//                return;
//            }
//        }
//        registeredUser.push({
//            name:user,
//            password:password
//        });
//        fs.writeFile(USER_FILE,JSON.stringify(registeredUser,null,4),function(err){
//           if(err){
//               console.log(err);
//               process.exit(1);
//           }
//            res.json({
//                msg:false
//            })
//        });
//    })
//});
app.post("/api/register",function(req,res){
    var user=req.body.user;
    var pwd=req.body.password;
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
        });
    });

    fs.readFile(SHOP_FILE, function (err, data) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        var cartdata = JSON.parse(data);
        var newDataItem = {
            name: user,
            goods: []
        };
        cartdata.push(newDataItem);
        fs.writeFile(SHOP_FILE, JSON.stringify(cartdata, null, 4), function (err) {
            // console.log(JSON.stringify(comments));
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
    fs.readFile(SHOP_FILE,function(err,data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        var counters = JSON.parse(data);
        for(var i=0;i<counters.length;i++)
        {
            if(counters[i].name===userName){
                res.json({
                    goods:counters[i].goods
                })
            }
        }
    })
})
app.get("/api/getproduct",function(req,res){
    //var userName=req.query.name;
    fs.readFile(PRO_FILE,function(err,data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        var counters = JSON.parse(data);
        //for(var i=0;i<counters.length;i++)
        //{
        //    if(counters[i].name===userName){
                res.json({
                    goods:counters
                //})
            })
        //}
    })
})
app.get("/api/carproduct",function(req,res){
    //var userName=req.query.name;
    fs.readFile(shopcar_FILE,function(err,data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        var counters = JSON.parse(data);
        //for(var i=0;i<counters.length;i++)
        //{
        //    if(counters[i].name===userName){
        res.json({
            goods:counters
            //})
        })
        //}
    })
})
app.get("/api/removegoodsfromcart",function(req,res){
    var name=req.query.name;
    var goodsIndex=req.query.goodsIndex;
    fs.readFile(SHOP_FILE, function (err, data) {

        if (err) {
            console.error(err);
            process.exit(1);
        }

        var counters = JSON.parse(data);
        for(var i=0;i<counters.length;i++)
        {
            if(counters[i].name === name){
                counters[i].goods.splice(goodsIndex,1);
                console.log(counters[i].goods);
                console.log(JSON.stringify(counters));
                break;
            }
        }
        fs.writeFile(SHOP_FILE, JSON.stringify(counters, null, 4), function (err) {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            res.json({ret: true});
        });
    });

})




app.listen(app.get('port'),function(){
    console.log('http.Server: http://localhost:'+app.get('port')+'/');
})

/*************************************************/
/***************************************/