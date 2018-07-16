var mysql=require('mysql');
var connectionProvider=require('../configDB/mySqlConnectionProvider');
let connection;
module.exports.bandwidthCalendaring=function(req,res){
    var bandCal={
        "servicename":req.body.servicename,
        "serviceid":req.body.serviceid,
        "oldbw":req.body.oldbw,
        "newbw":req.body.newbw,
        "start_datetime":req.body.start_datetime,
        "end_datetime":req.body.end_datetime,
        "created_by":req.body.created_by
    }

    connection =connectionProvider.getSqlConnection();
    connection.query("INSERT INTO bandwidth_scheduling (servicename,serviceid,oldbw,newbw,start_datetime,end_datetime,created_by) VALUES ('"+bandCal.servicename+"','"+bandCal.serviceid+"','"+bandCal.oldbw+"','"+bandCal.newbw+"',str_to_date('"+bandCal.start_datetime+"', '%m/%d/%Y %h:%i %p'),str_to_date('"+bandCal.end_datetime+"', '%m/%d/%Y %h:%i %p'),'"+bandCal.created_by+"')", function (error, results) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'+error+''+results+''+bandCal.servicename
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'Bandwidth Calendaring registered sucessfully'
        })
      }
    });
    connectionProvider.closeSqlConnection(connection);
}
module.exports.bandwidthCalendarData=function(callback){
    let d=new Date();
   //let createdDate=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
   let createdDate=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate());
   console.log("created date=============="+createdDate);
   console.log("SELECT * FROM bandwidth_scheduling where DATE_FORMAT(create_date, '%Y-%m-%d')=DATE_FORMAT('"+createdDate+"', '%Y-%m-%d')");
    connection =connectionProvider.getSqlConnection();
    connection.query("SELECT * FROM bandwidth_scheduling where DATE_FORMAT(create_date, '%Y-%m-%d')=DATE_FORMAT('"+createdDate+"', '%Y-%m-%d')", function (error, results) {
      if (error) {
        //console.log(error);
        return callback(error);
      }else{
        //console.log(results);
         return callback(results);
      }
    });
    connectionProvider.closeSqlConnection(connection);
}
module.exports.bandwidthCalendarUpdateData=function(status,bwsid,callback){
    console.log("bwsid=================="+bwsid);
     console.log("status=================="+status);
   console.log("UPDATE bandwidth_scheduling set schedule_status='"+status+"' where bwsid="+bwsid);
    connection =connectionProvider.getSqlConnection();
    connection.query("UPDATE bandwidth_scheduling set schedule_status='"+status+"' where bwsid="+bwsid, function (error, results) {
      if (error) {
        //console.log(error);
        return callback(error);
      }else{
        //console.log(results);
         return callback(results);
      }
    });
    connectionProvider.closeSqlConnection(connection);
}