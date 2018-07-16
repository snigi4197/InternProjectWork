var mysql=require('mysql');
var mySqlConnectionString=require('./mySqlConnectionString');
var mySqlConnectionProvider={
	getSqlConnection:function(){
	 	var connection=mysql.createConnection(mySqlConnectionString.mySqlConnectionString.connectionString);
	 	connection.connect(function(error){
	 		if(error){throw error;}
	 		console.log("My SQL connetcion successfull!!");
	 	});
	 	//connection.end();
	 	//connection.end();
	 	return connection;
	},

	closeSqlConnection : function(currentConnection){
		currentConnection.end(function(error){
			if(error){throw error;}
			console.log("My Sql Connection closed successfully!!");
		});
	}
}

module.exports=mySqlConnectionProvider;