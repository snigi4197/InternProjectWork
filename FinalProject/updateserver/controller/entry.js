var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.entry=function(req,res){
    console.log(req.body);
    var users={
        "name":req.body.name,
        "age":req.body.age,
        "address":req.body.address,
        "class":req.body.class,
        "status":req.body.status,
        "date":req.body.date
    }
    var connection =connectionProvider.getSqlConnection();
    connection.query("INSERT INTO student(name,age,address,class,status,date) values('"+users.name+"','"+users.age+"','"+users.address+"','"+users.class+"','"+users.status+"','"+users.date+"')", function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'+error+''+results+''+fields+''+users.name
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