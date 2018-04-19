var fs = require("fs");  
const v8 = require('v8'); 
querystring = require('querystring');  

// Asynchronous read  
fs.readFile('input.txt', function (err, data) {  
   if (err) {  
       return console.error(err);  
   }  
   console.log("Asynchronous read: " + data.toString());  
});  

// Synchronous read  
var data = fs.readFileSync('input.txt');  
console.log("Synchronous read: " + data.toString());  

//opening file 
console.log("Going to open file!");  
fs.open('input.txt', 'r+', function(err, fd) {  
   if (err) {  
       return console.error(err);  
   }  
  console.log("File opened successfully!");       
}); 

//file statistics
console.log("Going to get file info!");  
fs.stat('input.txt', function (err, stats) {  
   if (err) {  
       return console.error(err);  
   }  
   console.log(stats);  
   console.log("Got file info successfully!");  
   // Check file type  
   console.log("isFile ? " + stats.isFile());  
   console.log("isDirectory ? " + stats.isDirectory());      
});  


//query string 
//1. parse methood
const obj1=querystring.parse('heloooooooooooooooooooooooooooooo');  // thsi format is query format
console.log(obj1);  

//2. stringify method
const qs1=querystring.stringify({name:'abc',age:'23'}); //this format is json format 
console.log(qs1);  


// v8 queries
console.log(v8.getHeapStatistics());  

// blocking code
var data = fs.readFileSync('input.txt');  
console.log(data.toString());  
console.log("  blocking code  ");   


// no blocking code 
fs.readFile('input.txt', function (err, data) {  
    if (err) return console.error(err);  
    console.log(data.toString());  
});  
console.log("  non blocking code   ");  

