var express=require("express");
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var contactController= require('./controller/get_contact_info');
var registerController=require('./controller/register_info');
app.get('/',(req,res)=>
{
    res.send("hello world !!!!");
});
var port=8000;
app.listen(port,()=>
{
    console.log("server is running on port : ",port);
});
app.post('/api/contact',contactController.contact);
app.post('/api/register',registerController.register);
module.exports = app;
