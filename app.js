var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("landing");
});

 var campgrounds=[
        {name:"Salmon", image:"https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144391f3c17aafeab7_340.jpg"},
        {name:"granite", image:"https://farm3.staticflickr.com/2464/3694344957_14180103ed.jpg"},
        {name:"Mountaing", image:"https://farm8.staticflickr.com/7205/7121863467_eb0aa64193.jpg"}
    ]
    
app.get("/campgrounds",function(req,res){
 
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newCamp={name:name,image:image};
    campgrounds.push(newCamp);
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("YELPcamp started");
})