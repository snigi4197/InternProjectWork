var schedule = require('node-schedule');
var NSOServicesCall=require('../NSOAPI/NSOServices');
var bandwidthCalendaring=require('../controller/bandwidthCalendaring-controller');
var j = schedule.scheduleJob('*/1 * * * *', function(){
	 bandwidthCalendaring.bandwidthCalendarData(function(data_c){
	 	console.log(data_c) ;
	 	let date,date2,hours,minutes,seconds,hours2,minutes2,seconds2,status,bwsid,bw_path,bw_value;
	 	date2=new Date();
	 	for(let i=0;i<data_c.length;i++){
	 		bwsid=data_c[i].bwsid;
	 		bw_path=data_c[i].servicename+"{"+data_c[i].serviceid+"}/ml2:bandwidth";
	 		console.log("bwsid=================="+bwsid);
	 		if(data_c[i].schedule_status=='Y'){	 		
		 		date =new Date(data_c[i].start_datetime);
		 		
		 		hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	        	minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	        	seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	        	var time = hours + ":" + minutes + ":" + seconds;

		 		hours2 = date2.getHours() < 10 ? "0" + date2.getHours() : date2.getHours();
	        	minutes2 = date2.getMinutes() < 10 ? "0" + date2.getMinutes() : date2.getMinutes();
	        	seconds2 = date2.getSeconds() < 10 ? "0" + date2.getSeconds() : date2.getSeconds();
	        	time = hours + ":" + minutes + ":" + seconds;
	        	time2 = hours2 + ":" + minutes2 + ":" + seconds2;

		 		console.log(hours+" today hours"+hours2) ;
		 		console.log(minutes+" today minutes"+minutes2) ;
		 		console.log(seconds+" today seconds"+seconds2) ;
		 		console.log(time+" today time"+time2) ;
		 		console.log(data_c[i].servicename) ;
		 		if(hours==hours2 && minutes==minutes2){
		 			status="P";
		 			console.log("bwsid=================="+bwsid);
		 			
		 			bw_value=data_c[i].newbw;
		 			NSOServicesCall.getServiceSetValueMethod(bw_path,bw_value,function(data_cbw){
		 				console.log("Update new Bandwidth================="+data_cbw);
		 				bandwidthCalendaring.bandwidthCalendarUpdateData(status,bwsid,function(data_cp){
			 			console.log("status start Date"+data_cp);
			 			});
		 			});
		 			
		 		}
	 		}
	 	if(data_c[i].schedule_status=='P'){
	 		date =new Date(data_c[i].end_datetime);
		 		
		 		hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	        	minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	        	seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	        	var time = hours + ":" + minutes + ":" + seconds;

		 		hours2 = date2.getHours() < 10 ? "0" + date2.getHours() : date2.getHours();
	        	minutes2 = date2.getMinutes() < 10 ? "0" + date2.getMinutes() : date2.getMinutes();
	        	seconds2 = date2.getSeconds() < 10 ? "0" + date2.getSeconds() : date2.getSeconds();
	        	time = hours + ":" + minutes + ":" + seconds;
	        	time2 = hours2 + ":" + minutes2 + ":" + seconds2;

		 		console.log(hours+" today hours"+hours2) ;
		 		console.log(minutes+" today minutes"+minutes2) ;
		 		console.log(seconds+" today seconds"+seconds2) ;
		 		console.log(time+" today time"+time2) ;
		 		console.log(data_c[i].servicename) ;
		 		if(hours==hours2 && minutes==minutes2){
		 			status="N";
		 			bw_value=data_c[i].oldbw;
		 			NSOServicesCall.getServiceSetValueMethod(bw_path,bw_value,function(data_cbwe){
		 				console.log("Update Old Bandwidth================="+data_cbwe);
		 				bandwidthCalendaring.bandwidthCalendarUpdateData(status,bwsid,function(data_cn){
			 			console.log("status end Date"+data_cn);
			 			});
		 			});
		 			
		 		}
	 	}
	 	}
	});
  console.log('Today is recognized by Rebecca Black!');

});