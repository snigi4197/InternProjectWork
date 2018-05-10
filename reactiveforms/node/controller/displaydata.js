const Contact= require('../model/dataentry');

module.exports.displaydata=function(req,res)
{
    let newContact=new Contact(
    {
        name:req.body.name,
        age:req.body.age,
        comment:req.body.comment,
        hobbies:req.body.Enter_hobbies_Details,
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