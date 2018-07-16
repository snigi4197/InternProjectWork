var NSOConnectionProvider=require('./../NSOAPI/NSOServices');

module.exports.login=function(req,res){
   
    var connection =NSOConnectionProvider.loginNSO();
      console.log(connection);
    
}