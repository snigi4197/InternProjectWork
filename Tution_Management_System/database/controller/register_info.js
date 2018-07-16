var mysql=require('mysql');
var connectionProvider=require('../connection_details/creating_connection');

module.exports.register=function(req,res)
{
    console.log(req.body);
    var name=req.body.name;
    var age=req.body.age;
    var cls=req.body.cls;
    var sex=req.body.sex;
    var address=req.body.address;
    var email=req.body.email;
    var sql="INSERT INTO register_details (name,age,cls,sex,address,email) Values('"+name+"','"+age+"','"+cls+"','"+sex+"','"+address+"','"+email+"')"
    //console.log(sql);
    var connection =connectionProvider.getSqlConnection();
    connection.query(sql, function (error, results, fields)
     {
        if (error) 
        {
          res.json(
            {
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
            res.json(
                {
                status:false,
                data:results,
                message:'Invalid details !!'
                })
            }
          }
   connectionProvider.closeSqlConnection(connection);
    });
}
