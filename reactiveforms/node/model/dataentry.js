const mongoose = require('mongoose');
console.log();
const schema=mongoose.Schema({
    name:
    {
        type:String
    },
    age:
    {
        type:Number
    },
    comment:
    {
        type:String
    },
    Enter_hobbies_Details:
    {
        type:String
    }, 
    qualification:
    {
        type:String
    },
    nationality:
    {
        type:String
    }

});

const DataEntry=module.exports=mongoose.model('DataEntry',schema);