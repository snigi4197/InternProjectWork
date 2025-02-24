var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Request = require("request");
var index = require('./routes/index');
var users = require('./routes/users');
var authenticateController=require('./controller/authenticate-controller');
var registerController=require('./controller/register-controller');
var bandwidthCalendaring=require('./controller/bandwidthCalendaring-controller');
var NSOServices=require('./NSOAPI/NSOServices');
//var NSOAPIServices=require('./NSOAPI/NSOAPIMethods');
var nsoUser="admin";
var nsoPassword="admin";
var customer_name="customer-name";
var customer_value="CISCO";
var serviceName="ml2:mpls-l2vpn";
var nsoURL="http://192.168.0.111:8080/jsonrpc";
var nodeScheduled=require('./scheduleJobs/scheduler');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', index);
app.use('/users', users);
app.post('/api/register',registerController.register);
app.post('/api/profileUpdate',registerController.profileUpdate);

app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/profileData',authenticateController.profileData);
app.post('/api/bandwidthCalendaring',bandwidthCalendaring.bandwidthCalendaring);
app.post('/api/login',NSOServices.loginNSO);
app.post('/api/logout',NSOServices.logoutNSO);
app.post('/api/trans',NSOServices.transNSO);
app.post('/api/commit',NSOServices.getServiceCommit);
app.post('/api/data',NSOServices.getData);
app.post('/api/data/query',NSOServices.getDataQuery);

app.post('/api/services',NSOServices.getNSOServices);
app.post('/api/services/schema',NSOServices.getServiceSchema);
app.post('/api/services/schemalink',NSOServices.getServiceSchemaByLink);
app.post('/api/services/getvalue',NSOServices.getServiceGetValue);
app.post('/api/services/setvalue',NSOServices.getServiceSetValue);
app.post('/api/services/getcase',NSOServices.getServiceGetCaseValue);
app.post('/api/services/exists',NSOServices.getServiceExist);
app.post('/api/services/sync',NSOServices.getServiceSync);

app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
