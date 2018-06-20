var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Request = require("request");
var registerController=require('./controller/register');
var entryController= require('./controller/entry');
var displayController=require('./controller/displaydata');
var updateController=require('./controller/update');
var deleteController=require('./controller/delete');
var viewController=require('./controller/view');
var editController=require('./controller/edit');
var app = express();
var cors = require('cors');
var port=9000;
//connect moongoose
const abc='mongodb://mongodb/records';
mongoose.connect(abc);
//on connection
mongoose.connection.on('connected',( )=>
{
        console.log('connected to the database mongo @ 27017');
}); 
console.log("hey dude !!!");
console.log("delhi is ");
//error connection
mongoose.connection.on('error',(err)=>
{
        if(err)
        {
                console.log("error while connecting is : "+err);
        }
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api/entry',entryController.entry);
app.post('/api/register',registerController.register);
app.post('/api/displaydata',displayController.displaydata);
app.post('/api/update',updateController.update);
app.post('/api/delete',deleteController.delete);
app.post('/api/view',viewController.view);
app.post('/api/edit',editController.edit)
app.use(express.static(path.join(__dirname,'dist')));
app.get('*', function(req, res) 
{
    res.sendFile(path.join(__dirname,'dist/index.html'));
}
);
console.log("server is running on port "+port);
app.listen(9000);
module.exports = app;