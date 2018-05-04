var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Request = require("request");
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;

var rp = require('request-promise');
var insertController=require('./controller/insert');
var updateController=require('./controller/update');
var updateuserController=require('./controller/updateuser');
var viewuserController=require('./controller/viewinfo');
var loginController=require('./controller/login');
//var testController=require('./controller/test');
var test2controller=require('./controller/test2');
var registerController=require('./controller/register');
var demoController=require('./controller/demo');
var authenticateController=require('./controller/authenticatecontroller');

var pController=require('./controller/p');
var attendenceController=require('./controller/attendence');
var entryController=require('./controller/entry');

var nso=require('./controller/nso');
var nsologin=require('./controller/nsologin');
var nsoth=require('./controller/nsoth');
var nsodevices=require('./controller/nsodevices');
var nsologout=require('./controller/nsologout');

var nsop=require('./controller/nsopromise');

var jwt= require('jsonwebtoken');
var cookieParser=require('cookie-parser');

var session=require('express-session');


var app = express();
var port=9000;
process.env.SECRET_KEY="snigi";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cookieParser());
app.post('/api/insert',insertController.register);
app.post('/api/update',updateController.authenticate);
app.post('/api/updateuser',updateuserController.update_user);
app.post('/api/viewinfo',viewuserController.view_user);
app.post('/api/register',registerController.register);

//app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));

app.post('/api/demo',demoController.demo);//for example
app.get('/api/authenticate',authenticateController.authenticate);
app.post('/api/login',loginController.login_user);
//app.post('/api/test',testController.test_login);

app.post('/api/p',pController.p,
                                passport.authenticate
                                (
                                        'local',
                                        {      
                                                successRedirect: '/test',    
                                                failureRedirect: '/register'
                                        }
                                )
);
app.get('/api/nso',nso.nsoreq);
app.get('/api/nsologin',nsologin.nsologin);
app.get('/api/nsoth',nsoth.nsoth);
app.get('/api/nsodevices',nsodevices.nsodevices);
app.get('/api/nsologout',nsologout.nsologout);
app.get('/api/nsopromise',nsop.nsopro);

app.use(session({
        name:'abc', 
        secret: 'keyboard cat',
        resave: true,
         saveUninitialized: true 
        }));
         
app.use(passport.initialize());
app.use(passport.session());


app.post('/api/attendence',attendenceController.attendence);
app.post('/api/entry',entryController.entry);


app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));}

);

console.log("server is running on port "+port);
app.listen(9000);
module.exports = app;
app.disable('x-powered-by');

