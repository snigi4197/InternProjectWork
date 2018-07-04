var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port=9000;
var displayController=require('./controller/display');
var entryController=require('./controller/entry');
var updateController=require('./controller/update');
var deleteController=require('./controller/delete');
var viewController=require('./controller/view');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/display',displayController.display);
app.post('/api/entry',entryController.entry);
app.post('/api/update',updateController.update);
app.post('/api/delete',deleteController.delete);

app.post('/api/view',viewController.view);

app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));}

);
console.log("server is running on port "+port);
app.listen(9000);
module.exports = app;


