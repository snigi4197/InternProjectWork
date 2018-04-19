var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Request = require("request");
var insertController=require('./controller/insert');
var updateController=require('./controller/update');
var updateuserController=require('./controller/updateuser');
var viewuserController=require('./controller/viewinfo');
var loginController=require('./controller/login');
var registerController=require('./controller/register');
var app = express();
var port=9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/insert',insertController.register);
app.post('/api/update',updateController.authenticate);
app.post('/api/updateuser',updateuserController.update_user);
app.post('/api/viewinfo',viewuserController.view_user);
app.post('/api/login',loginController.login_user);
app.post('/api/register',registerController.register);

app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
});

console.log("server is running on port "+port);
app.listen(9000);
module.exports = app;

