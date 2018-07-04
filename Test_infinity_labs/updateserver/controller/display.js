var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');

module.exports.display=function(req,res)
{
    var hostname=req.body.hostname;
    var loopback=req.body.loopback;
    var sql=" SELECT * FROM test";
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
        if(results.length >0)
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