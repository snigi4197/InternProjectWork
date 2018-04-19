// Import events module  
var e = require('events');  
// Create an eventEmitter object  
var er = new e.EventEmitter();  
  
// Create an event handler as follows  
var c = function connected() {  
   console.log('connection succesful.');  
    
   // Fire the data_received event   
   er.emit('data_received');  
}  
  
// Bind the connection event with the handler  
er.on('connection', c);  
 // Bind the data_received event with the anonymous function  
er.on('data_received', function(){  
   console.log('data received succesfully.');  
});  
// Fire the connection event   
er.emit('connection');  
console.log("Program Ended.");  