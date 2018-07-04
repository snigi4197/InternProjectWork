var express=require('express');
var bodyparser =require('body-parser');
var app=express();
app.use(bodyparser.json());
var users=[{
    'id':13,
    'name':'snigdha'
}];
app.post('/',(req,res)=>
{
 req.send("hello  world ! ");
});
app.get('/',(req,res)=>
{
    res.send("hello world");
});
app.listen(9000);
console.log("app is listening to port 9000 on app file");