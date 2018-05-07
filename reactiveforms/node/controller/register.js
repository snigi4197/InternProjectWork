var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.register=function(req,res){
    console.log(req.body);
    var name=req.body.name;
    var age=req.body.age;
    var comment=req.body.comment;
    var hobbies=req.body.Enter_hobbies_Details;
    var qualification=req.body.qualification;
    var sql="INSERT INTO reactiveforms (name,age,comment,hobbies,qualification) Values('"+name+"','"+age+"','"+comment+"','"+hobbies+"','"+qualification+"')"
    console.log(sql);
    var connection =connectionProvider.getSqlConnection();
    connection.query(sql, function (error, results, fields)
     {
        if (error) 
        {
          res.json({
              status:false,
              message:'there are some error with query'+error+' ,'+results+' ,'+fields
          })
        }
        else
        {
            
            if(results.affectedRows >0)
            {
                res.json({
                status:true,
                data:results,
                message:'Data Entered sucessfully !!'
            })
            }
            else
            {
            res.json({
                status:false,
                data:results,
                message:'Invalid details !!'
            })
            }
          }
   connectionProvider.closeSqlConnection(connection);
    });
}