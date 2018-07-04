var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.entry=function(req,res)
{
        console.log(req.body);
        var hostname=req.body.hostname;
        var loopback=req.body.loopback;
        var sql="INSERT INTO test(hostname,loopback) Values('"+hostname+"','"+loopback+"') ";
        console.log(sql);
    var connection =connectionProvider.getSqlConnection();
    connection.query(sql, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
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