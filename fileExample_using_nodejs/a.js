var http = require("http");  
var fs = require('fs');
var dt = require('./b.js');
http.createServer(function (request, response) {  
 // Send the HTTP header   
   // HTTP Status: 200 : OK  
   // Content Type: text/plain  
   fs.readFile('c.html', function(err, data)
    {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
       // res.end('Hello World!');
    })

    // APPEND FILE SYSTEM

    fs.appendFile('f.txt', 'SWATI JOGDAND', function (err) {
        if (err)
            throw err;
        console.log('Saved_append');
    });

    //FOR OPENING A FILE IN WRITING MODE

    fs.open('e.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved_opening');
    });


    //FOR WRITING INTO A FILE

    fs.writeFile('es.txt', 'Hello SNIGDHA!', function (err) {
        if (err) throw err;
        console.log('Saved_writing');
    });
   //response.writeHead(200, {'Content-Type': 'text/plain'});  
   // Send the response body as "Hello World"  
   response.write("The date and time are currently: " + dt.myDateTime()); //CALLING THE FUNCTION USING OBJECT
   response.end('Hello World\n');  
}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');  