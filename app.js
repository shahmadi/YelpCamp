var express=require("express");
var app=express();



app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    var campgrounds=[
        {name:"Salmon", image:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144391f3c17aafeab7_340.jpg"},
        {name:"granite", image:"https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
        {name:"Mountaing", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"}
    ]
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("YELPcamp started");
})