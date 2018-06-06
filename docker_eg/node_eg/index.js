var express=require('express');
var mongoose = require('mongoose');
var app=express();
app.get("/",function(req,res)
{
    res.send("hello world");
});
mongoose.connect('mongodb://localhost:27017/docker_eg');
//on connection
mongoose.connection.on('connected',()=>
{
        console.log('connected to the database mongo @ 27017');
}); 
//error connection
mongoose.connection.on('error',(err)=>
{
        if(err)
        {
                console.log("error is :"+err);
        }
 }); 
app.listen(3000,function(err)
{
        if(err)
        {
                console.log(err);
        }
    console.log("You are in node  !!");
    console.log("app listening on port 3000");
});