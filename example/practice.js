
//tells the current working directory
console.log(__dirname);

//to create buffer and tell the output
console.log(__filename);
buf = new Buffer(256);  
len = buf.write("heyyya babes !!!!!!!!!!!!!!!!!!");  
console.log("Octets written : "+  len);  


//to read data from buffer 
buf = new Buffer(26);  
for (var i = 0 ; i < 26 ; i++) {  
  buf[i] = i + 97;  
}  
console.log( buf.toString('ascii'));        
console.log( buf.toString('ascii',0,5));    
console.log( buf.toString('utf8',10,15));   
console.log( buf.toString(undefined,1,5));