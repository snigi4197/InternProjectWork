var express=require('express');
var mysql=require('mysql');
var app=express();

var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'sampledb'
    }
);
connection.connect(function(error)
{
    if(error)
    {
        console.log('errror !!!!!'+error);
    }
    else{
        console.log("Connected !!!!");
    }
});

app.get('/',function(req , res)
{
    connection.query("SELECT * FROM mysampletable", function(error, rows, fields)
    {
        if (error)
        {
            console.log("error!!!");
        }
        else{
            console.log('sucessful query');
            console.log(rows[3].name);
            res.send('hellloooo     '+rows[1].name);
        }
    }  
    );
});

app.get('/o',function(req , res)
{
    let post={name:'heyyyaaa sq'};
    let sql='INSERT INTO mysampletable SET ?';
    let query=connection.query(sql, post, function(err, result)
{
if (err)
{
    console.log('error is '+ err);
}
else{
    console.log(result);
    res.send ('heyya !!!');
}
});
  });

  app.get('/oo',function(req , res)
{
    
    let sql='SELECT * FROM mysampletable ';
    let query=connection.query(sql, function(err, resultS)
{
if (err)
{
    console.log('error is '+ err);
}
else{
    console.log(resultS);
    res.send ('heyya !!!');
}
});
  });
app.listen(1333);