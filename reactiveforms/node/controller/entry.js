const Contact= require('../model/dataentry');
module.exports.entry=function(req,res)
{
    Contact.find(function(err,entry)
    {
        res.json(entry);
    });
}