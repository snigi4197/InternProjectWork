var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port=7000;
var displayController=require('./controller/display');
var entryController=require('./controller/entry');
var updateController=require('./controller/update');
var deleteController=require('./controller/delete');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/entry',entryController.entry);
app.post('/api/update',updateController.update);
app.post('/api/delete',deleteController.delete);
app.get('/api/display',displayController.display);


app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));}

);
console.log("server is running on port "+port);
app.listen(7000);
module.exports = app;


