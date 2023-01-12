const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmpSystem',err=>{
    if(!err){
        console.log('DB connection Successfull');
    }
    else{
        console.log('Error in connection'+err);
    }
})
const employee= mongoose.model('employee',{
    uname:String,
    id:Number,
    email:String,
    pswd:String,
   

    
})
module.exports={
    employee,
    mongoose
};