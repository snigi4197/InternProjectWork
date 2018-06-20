const Contact= require('../model/dataentry');

module.exports.delete=function(req,res)
{
    newContact=new Contact(
        {
            _id:req.body._id
        });
        newContact.remove({}, (err,contact)=>
    {
        console.log("s");
        if(err)
        {
            res.json({msg:'failed to connect'});
        }
        else
        {
            res.json({msg:'deleted in mongodb:- '+contact});
        }
    });
}