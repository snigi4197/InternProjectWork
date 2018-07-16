const Contact= require('../model/dataentry');

module.exports.update=function(req,res)
{
    //Contact.update({name:"snigdha"},{name:"snigi"},(err,contact)=>
    Contact.update({_id:req.body._id},
                        {name:req.body.name,
                        age:req.body.age,
                        comment:req.body.comment,
                        Enter_hobbies_Details:req.body.Enter_hobbies_Details,
                        qualification:req.body.qualification},
                    (err,contact)=>
    {
        console.log("s",contact);
        if(err)
        {
            res.json({msg:'failed to connect'+err});
        }
        else
        {
            res.json({msg:'updated in mongodb:- '+contact});
        }
    });
}