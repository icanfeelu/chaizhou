var path=require("path");
var fs=require("fs");


var experss=require("express");
var bodyParser=require("body-parser");

var SHOP_FILE=path.join(__dirname,"data/product.json");

var app=experss();

app.set("port",10000);
app.use("/",experss.static(path.join(__dirname,"www")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(app.get("port"),function(){
    console.log("Server start http://loaclhost:"+app.get("port"));
})


app.get("/api/getshopdata",function(req,res){
    var user=req.query.user;

    fs.readFile(SHOP_FILE,function(err,data){
        if(err){
            console.log(err);
           process.exit(1);
        }
        var newdata=JSON.parse(data);
        var len=newdata.length;
        for(var i=0;i<len;i++)
        {
            if(newdata[i].user===user)
            {
                res.json({
                    ret:true,
                    goodsinfo:newdata[i].shopcar
                })
                return;
            }
        }
        res.json({
            ret:false
        })

    })

})