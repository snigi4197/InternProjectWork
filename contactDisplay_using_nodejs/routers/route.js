const express= require('express');
const router= express.Router();
//retrieving contacts schema from "contacts.js"
const Contact=require('../models/contacts');

//retrieving contacts 

router.get( '/contacts', (req, res , next)=>
{
   // res.send('retrieving the contact list !!!!!');
    Contact.find(function(err,contacts) 
//after retrieving all the contacts we want it to save it in  "contacts" var
{
    res.json(contacts); //which we r retrieving to our client in json format
});
} );

//add contact
 router.post('/contacts',(req, res, next)=>
{
    //logic to add contacts
    console.log("contact page");
    let newContact=new Contact(
    {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone
    });
   newContact.save((err,contact)=>
    {        
        console.log("entry");
      if (err)
         {
            console.log("failed");
             res.json({msg: 'failed to add contact'});
         }
      else{
        console.log("sucess");
        res.json({msg: 'Contact added'});}
    });
});

//delete contact
router.post('/contacts:id',(req, res, next)=>
{
    //logic to delete contacts
    Contact.remove({
        _id:req.params.id
    },
function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
});
});

module.exports=router;