
// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

//
var app=express();

//for importing route file here
const route=require('./routers/route');

//connect to mongodb database
mongoose.connect('mongodb://localhost:27017/contactlist');

//on sucessful coonnection
mongoose.connection.on('connected',()=>
{
    console.log( 'connected to the database !!!!!!!!!');
});

//on UN-Sucessful coonnection
mongoose.connection.on('error',(err)=>
{
    if(err)
    {
        console.log('this is a error !!!'+err)
    }
});

//port number
const port=3400;

//adding amiddleware : cors
app.use(cors());

//adding amiddleware : body parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')) );

//using the file with the search called "/api"
app.use('/api',route);

//testing server
app.get('/',(req, res)=>
{
    res.send('snigdha');
});

//to bind server with port 
app.listen(port, ()=>
{
    console.log("server started at port number "+port);
});