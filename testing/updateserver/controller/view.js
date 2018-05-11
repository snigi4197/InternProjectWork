var connectionProvider=require('./../conn_details/connect-con');

module.exports.view=function(req,res){
 
    var id=req.body.id;
    var sql=" SELECT * FROM test WHERE id='"+id+"' ";
    console.log(sql);
    var connection =connectionProvider.getSqlConnection();
    connection.query(sql, function (error, results, fields) {
      if (error) {
            res.json({
            status:false,
            message:'there are some error with query !!!'
            })
      }else{ 
        if(results.length >0){
                    res.json({
                    status:true,
                    userList:results,
                    message:'successfully get data '
                })
              }else{
                res.json({
                    status:false,
                    data:results,
                    message:'data not found in the list !!!!'
                })
              }
            }
        });
connectionProvider.closeSqlConnection(connection);

}

