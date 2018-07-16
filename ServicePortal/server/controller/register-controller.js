var mysql=require('mysql');
var connectionProvider=require('../configDB/mySqlConnectionProvider');

module.exports.register=function(req,res){
    var today = new Date();
    var users={
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password,
        "customer_name":req.body.customer_name,
        "phone_number":req.body.phone_number,
         "registered_date":today,
        "updated_date":today
    }
   // console.log(req.body.username);
    var connection =connectionProvider.getSqlConnection();
    connection.query('INSERT INTO ssp_users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'+error+''+results+''+fields+''+users.username
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
    connectionProvider.closeSqlConnection(connection);
}
module.exports.profileUpdate=function(req,res){
    var today = new Date();
    let email= req.body.email;
    var users={
        "username":req.body.username,       
        "customer_name":req.body.customer_name,
        "phone_number":req.body.phone_number
        //"password":req.body.password,
        // "registered_date":today,
        //"updated_date":today
    }
   // console.log(req.body.username);
    var connection =connectionProvider.getSqlConnection();
    connection.query('UPDATE ssp_users SET ? WHERE email = ?',[users,email], function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'+error+''+results+''+fields+''+users.username
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user update sucessfully'
        })
      }
    });
    connectionProvider.closeSqlConnection(connection);
}