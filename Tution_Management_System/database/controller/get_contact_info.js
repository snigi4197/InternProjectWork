var mysql=require('mysql');
var connectionProvider=require('../connection_details/creating_connection');

module.exports.contact=function(req,res)
{
    console.log(req.body);
    var name=req.body.name;
    var email=req.body.email;
    var queries=req.body.queries;
    var sql="INSERT INTO contact_details (name,email,queries) Values('"+name+"','"+email+"','"+queries+"')"
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
