const Contact= require('../model/dataentry');
module.exports.view=function(req,res)
{
    Contact.find({_id:req.body._id}).exec(function(err,entry)
    {   
    if (err) 
    {
        console.log("Error:", err);
    }
    else 
    {
        console.log("hey");
        res.json(entry);   
    }
});
}