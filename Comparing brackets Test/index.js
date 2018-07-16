var express=require('express');
let ds = require('datastructures-js');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "main.html");
});

app.post('/', function(req, res){
    var myData;
    myData=req.body.data;
    myData = myData.split("");  
console.log("Entered string is : ",myData);
if(myData=='')
{
    res.send("Field cannot be empty");
}
else
{
    if(abc(myData))
    {
        res.json({message:'YES'});
        res.send("YES");
    }
	else
		res.send("NO");    
}

function def(opening , closing)
{
    if(opening == '(' && closing == ')') 
        return true;
    else if(opening == '{' && closing == '}') 
        return true;
    else if(opening == '[' && closing == ']') 
        return true;
	return false;
}
function abc(a)
{ 
    var S=ds.stack();
    for(var i =0;i<a.length;i++)
    {
		if(a[i] == '(' || a[i] == '{' || a[i] == '[')
            S.push(a[i]);
            else if(a[i] == ')' || a[i] == '}' || a[i] == ']')
            {
                if(S.isEmpty() || !def(S.peek(),a[i]))
                {
                     return false;
                }
                else
                    S.pop();
            }
    }
    return S.isEmpty() ? true:false;
}
});
var server = app.listen(7777, function()
{
    console.log("Example app listening at 7777");
});
