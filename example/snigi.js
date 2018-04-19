var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) 
{
  fs.readFile('a.html', function(err, data) 
  {
  	//res.SetHeader('Content-Type','text/html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log(data);
    res.end('Hello World!');
  });
}).listen(8085);

console.log("Snigdha");
console.log(__dirnameuu);
