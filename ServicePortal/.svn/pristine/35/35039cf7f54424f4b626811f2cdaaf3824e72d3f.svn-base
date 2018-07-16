var Request = require("request");
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
var NSOAPIMethods={
  getData:function(){
    return JSON.stringify({"id": 1});
  },
 getNSOlogin:async function(nsoURL,nsoUser,nsoPassword){
  var json=JSON.stringify({
        "id": "1",
        "jsonrpc": "2.0",
        "method":"login",
        "params":{
                  "user": nsoUser,
                  "passwd": nsoPassword
                  }
    });
  /*console.log(json);
  console.log(nsoUser);
  console.log(nsoPassword);*/
  
var l2vpnService=Request.post(
{
    "headers": { "content-type": "application/json" },
    "url": nsoURL,
    "body": json
}, (error,response, body) => {  
  //console.log(error);
    if(error) {
        return console.dir(error);
    }
    //console.log(body);
    //console.log(body);
     let jsonBody=JSON.parse(response.body);
   
     let dataList="";
    if(jsonBody.result!=null){
     
     let cookie=response.headers['set-cookie'][0].split(";");
    // console.log(cookie+" "+cookie.length);
      for (let i = 0; i < cookie.length; i++) {
        if (cookie[i].indexOf("sessionid")!=-1) {
          localStorage.setItem("NSOSessionId", cookie[i]);
          //console.log("cookie[i]"+cookie[i]);
        }
      }
    }
    //console.log(localStorage.getItem("NSOSessionId"));
    console.log("++++++++++++++++ddd"+JSON.stringify(body));
     //console.dir (jsonBody);
     //dataList=JSON.stringify(jsonBody);
     return JSON.stringify(body);
});
 
  return l2vpnService;
 

//console.log("!!!!!!!!!!!!!"+l2vpnService);
},
getNSOlogout:function(cookies,nsoURL){
var loginService=Request.post({
    "headers": { "Cookie":cookies,"content-type": "application/json" },
    "url": nsoURL,
    "body": JSON.stringify({
        "id": "2",
        "jsonrpc": "2.0",
        "method":"logout"
    })
}, (error,response, body) => {  
  console.log(error);
    if(error) {
        return console.dir(error);
    }
    console.log(body);
    //console.log(body);
     let jsonBody=JSON.parse(response.body);
   

    if(jsonBody.result!=null){

          localStorage.setItem("NSOSessionId", "");
          localStorage.setItem("NSOTH", "");
    }
    
    return jsonBody;
});
},
newTransNSO:function(cookies,nsoURL){
  console.log(cookies+" "+nsoURL);
var transService=Request.post({
    "headers": { "Cookie":cookies,"content-type": "application/json" },
    "url": nsoURL,
    "body": JSON.stringify({
        "id": "3",
        "jsonrpc": "2.0",
        "method":"new_trans",
        "params":{
                  "db": "running",
                  "conf_mode": "private",
                  "mode": "read_write"
                  }
    })
}, (error,response, body) => {  
  console.log(error);
    if(error) {
        return console.dir(error);
    }
    
    //console.log(body);
    
        let jsonBody=JSON.parse(response.body);
   

    if(jsonBody.result!=null){
     
     
          localStorage.setItem("NSOTH", jsonBody.result.th);
        
        
    }
    console.log("th value========="+localStorage.getItem("NSOTH"));
    return jsonBody;
});
},
deleteTransNSO:function(req,res,cookies,nsoURL,sessionTH){
var transService=Request.post({
    "headers": { "Cookie":cookies,"content-type": "application/json" },
    "url": nsoURL,
    "body": JSON.stringify({
        "id": "4",
        "jsonrpc": "2.0",
        "method":"delete_trans",
        "params":{
                  "th": sessionTH
                  }
    })
}, (error,response, body) => {  
  console.log(error);
    if(error) {
        return console.dir(error);
    }
    
    //console.log(body);
    
        let jsonBody=JSON.parse(response.body);
   

    if(jsonBody.result!=null){
     
     
          localStorage.setItem("NSOTH", jsonBody.result.th);
        
        
    }
    console.log("th value========="+localStorage.getItem("NSOTH"));
    return jsonBody;
});
},
getNSOServiceSchema:function(req,res,sessionId,nsoURL,sessionTH,schemalevel,path,insert_flag,eval_flag){
  var json=JSON.stringify({
        "id": 5,
        "jsonrpc": "2.0",
        "method":"get_schema",
        "params":{
                  "th":sessionTH,
                  "levels" : schemalevel,
                  "path":path,
                  "namespace":"",
                  "insert_values":insert_flag,
                  "evaluate_when_entries":eval_flag
                  }
                   });
  console.log(json);
var l2vpnService=Request.post({
    "headers": { "Cookie":sessionId,"content-type": "application/json" },
    "url": nsoURL,
    "body": json
   
}, (error,response, body) => {  
  console.log(error);
    if(error) {
        return console.dir(error);
    }
        let jsonBody=JSON.parse(response.body);
  
    return jsonBody;
});
},

getNSOServiceQuery:function(req,res,sessionId,nsoURL,sessionTH,path,xpath_expr,selection,initial_offset){
  var json="";
  if(path!=null && path!=""){
     
      json=JSON.stringify({"id": 6,
            "jsonrpc": "2.0",
            "method":"query",
            "params":{"th":sessionTH,
            "xpath_expr" : xpath_expr,
          "selection":selection,
          "chunk_size":"100000",
          "initial_offset":initial_offset,
          "result_as":"string"
          }});  
    }else{
      json=JSON.stringify({"id": 6,
                  "jsonrpc": "2.0",
                  "method":"query",
                  "params":{"th":sessionTH,
                  "context_node":path,
                  "xpath_expr" : xpath_expr,
                "selection":selection,
                "chunk_size":"100000",
                "initial_offset":initial_offset,
                "result_as":"string"
                }});  
    }  
         
  console.log(json);
var l2vpnService=Request.post({
    "headers": { "Cookie":sessionId,"content-type": "application/json" },
    "url": nsoURL,
    "body": json
   
}, (error,response, body) => {  
  console.log(error);
    if(error) {
        return console.dir(error);
    }
        let jsonBody=JSON.parse(response.body);
  
    return jsonBody;
});
},

getNSOServiceGetValue:function(req,res,sessionId,nsoURL,sessionTH,path){
  var json=JSON.stringify({
        "id": 7,
        "jsonrpc": "2.0",
        "method":"get_value",
        "params":{
                  "th":sessionTH,
                  "path":path
                  }
                   });
  console.log(json);
var l2vpnService=Request.post({
    "headers": { "Cookie":sessionId,"content-type": "application/json" },
    "url": nsoURL,
    "body": json
   
}, (error,response, body) => {  
  console.log(error);
    if(error) {
        return console.dir(error);
    }
        let jsonBody=JSON.parse(response.body);
  
    return jsonBody;
});
}
}
module.exports=NSOAPIMethods;