const Contact= require('../model/dataentry');

module.exports.showdata=function(req,res)
{
    Contact.find(function(err,entry)
    {
        res.json(entry);
    });
}