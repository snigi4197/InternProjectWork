//passport concept is used here
var mysql=require('mysql');
var connectionProvider=require('../conn_details/connect-con');
var passport=require('passport');

module.exports.register=function(req,res){
    console.log(req.body);
    /*user={
        email:req.body.email,
        phone:req.body.phone,
        username:req.body.username,
        password:req.body.password
    }*/
    email=req.body.email;
    phone=req.body.phone;
    username=req.body.username;
    password=req.body.password;
    
     var connection =connectionProvider.getSqlConnection();
    connection.query("INSERT INTO updatinguser(email,phone,username,password) Values('"+email+"','"+phone+"','"+username+"','"+password+"')", function (error, results, fields)
     {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'+error+' ,'+results+' ,'+fields
          })
        }
        else{
            res.json({
            status:true,
            data:results,
            message:'Data Entered sucessfully !!'
        });
        //this function last insert id will automatically give us the last updatated query results
      connection.query('SELECT LAST_INSERT_ID() as user_id',function(error,results,fields)
    {
            if (error)
            {
                console.log("the error is : "+error);
            }
            const user_id=results[0];
            console.log(user_id); //this will get he id of the latest inserted query
            req.login(user_id,function(err)
            { //this function is coming directly from passport.js
                res.redirect('/');
            });
       
        passport.use(new LocalStrategy(
            function(username,password,done)
            {
                if(username=='admin'&&password=='admin')
                {
                    return done(null,{username:'admin'});
                }
                return done(null,false)
            }
        ))
        
       passport.serializeUser(function(user_id,done)
        { 
            //this function is used to write the values into session
            done(null,user_id);
        });
        passport.deserializeUser(function(user_id,done)
        { 
            User.findById(id, function (err, user) 
            {
                done(err, user);
                console.log(user);
            });
            // this function is used to retrieve the vaalues of session
            //done(null,user_id);
        });
    });
   }
   connectionProvider.closeSqlConnection(connection);
    });
   // connectionProvider.closeSqlConnection(connection);
}