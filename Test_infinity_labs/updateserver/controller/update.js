var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.update=function(req,res)
{
    var id=req.body.id;
  
    var hostname=req.body.hostname;
    var loopback=req.body.loopback;
     var sql = "UPDATE test SET hostname = '"+hostname+"' , loopback='"+loopback+"'  WHERE id = '"+id+"'"
    
    console.log(sql);
    var connection =connectionProvider.getSqlConnection();
    connection.query(sql,function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'+error
        })
      } else
      {
        if(results.affectedRows >0)
        {
            res.json({
            status:true,
            data:results,
            message:' sucessful !!'
        })
        }
        else
        {
        res.json({
            status:false,
            data:results,
            message:'Invalid data !!'
        })
        }
      }
    });
    connectionProvider.closeSqlConnection(connection);
}