var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Request = require("request");
var app = express();
var port=7777;
app.get("/",function(req,res)
{
    res.send("hello world");
});
//connect moongoose
const abc='mongodb://localhost/records';
mongoose.connect(abc);
//on connection
mongoose.connection.on('connected',( )=>
{
    console.log('connected to the database mongo @ 27017');
}); 
//error connection
mongoose.connection.on('error',(err)=>
{
        if(err)
        {
                console.log("error while connecting is : "+err);
        }
 }); 
 const userSchema = new mongoose.Schema(
{
    name: String,
    age: Number
});
  // create mongoose model
  const User = mongoose.model('User', userSchema);

app.post('/',(req,res)=>
{
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });
    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log("server is running on port "+port);
app.listen(7777);
module.exports = app;