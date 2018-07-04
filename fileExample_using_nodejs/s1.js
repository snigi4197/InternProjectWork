var http = require("http");  
var fs = require('fs');
var dt = require('./b.js');
http.createServer(function (request, response) 
{
fs.readFile('c.html', function(err, data)
    {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
       // res.end('Hello World!');
    })   
response.write("The date and time are currently: " + dt.myDateTime()); //CALLING THE FUNCTION USING OBJECT
   response.end('Hello World\n');  
}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');  