const express=require('express');
const router=express.Router();
const ObjectId=require('mongoose').Types.ObjectId;
const employee=require('./services/dbs.js')

//GET API
router.get('/',(req,res)=>{
    employee.find((err,doc)=>{
         if(err){
            console.log('Error in GET data' + err);
        }
        else{
            res.send(doc);
        }
    })
})
//POST API

router.post('/employee',(req,res)=>{
    let empdet = new employee({
        firstname:req.body.firstname,
        lastname: req.body.lastname,
        birthdate:req.body.birthdate,
        gender: req.body.gender,
        education: req.body.education,
        company: req.body.company,
        jobExperience:req.body.jobExperience,
        salary:req.body.salary
        
    });
    empdet.save((err,doc)=>{
        if(err){
            console.log('Error in post data ' + err);
        }
        else{
            res.send(doc);
        }
    })
})

module.exports={
    router
}