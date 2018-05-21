const Contact= require('../model/dataentry');

module.exports.displaydata=function(req,res)
{
     let newContact=new Contact(
    {
        _id:req.body._id,
        name:req.body.name,
        age:req.body.age,
        comment:req.body.comment,
        Enter_hobbies_Details:req.body.Enter_hobbies_Details,
        qualification:req.body.qualification
    });
    newContact.save((err,contact)=>
    {
        console.log(contact);
        if(err)
        {
            res.json({msg:'failed to connect'});
        }
        else
        {
            res.json({msg:'data entred sucessfully in mongodb '+contact});
        }
    });
}