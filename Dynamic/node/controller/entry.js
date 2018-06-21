const Contact= require('../model/dataentry');
module.exports.entry=function(req,res)
{
    // Contact.find(function(err,entry)
    // {
    //     res.json(entry);
    // });

    Contact.find({}).exec(function(err,entry)
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
//"_id": "5af3cf1470e7ce0ce0ffb502"