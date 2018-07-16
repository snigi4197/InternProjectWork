var express= require("express");
var bodyParser= require("body-parser");
const router = express.Router();
var app=express();
var port=9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>
{
    res.send("hello world !!");
});


app.get('/user', function(req, res) {
    res.sendFile(__dirname + "/" + "main.html");
});


app.post('/abc', function(req, res)
{
    r = {
        first : req.body.first,
        last : req.body.last
    };
    console.log(r);
    res.end(JSON.stringify(r));
});


app.listen(port,()=>
{
    console.log("Server got started at port :: "+ port);
});