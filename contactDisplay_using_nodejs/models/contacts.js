
//THIS FILE WILL BE CONTAINING ALL THE CONTACTS SCHEMA 

const mongoose= require('mongoose');

//creating schema
const ContactSchema=mongoose.Schema(
    {
        first_name:
        {
            type:String,
            required:true
        },
        last_name:
        {
            type:String,
            required:true
        },
        phone:
        {
            type:String,
            required:true
        }
    }
);
// to export the schema
const Contact= module.exports= mongoose.model('contact',ContactSchema);

