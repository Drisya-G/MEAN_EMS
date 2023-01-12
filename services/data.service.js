// const { employee } = require('../db')
const db = require('./dbs')
const express=require('express');
// const router=express.Router();
// const employeedetails=require('./dbs.js');




const register = (uname, id, email,pswd) => {

    return db.employee.findOne({ id })     //27017
        .then(employee => {
            if (employee) {
                return {
                    statusCode: 401,
                    status: false,
                    message: 'user already registered'
                }

            }
            else {
                const newemployee = new db.employee({
                    uname,
                    id,
                    email,
                    pswd
                    
                })
                newemployee.save()      //to save in mongodb
                return {
                    statusCode: 200,
                    status: true,
                    message: 'successfully registered'

                }

            }
        })
}


const login = (id, pswd) => {
    return db.employee.findOne({
        id,
         pswd
    })

        .then(User => {
            if (User) {
                currentuser = User.uname; //login name display
                currentId = id;
                // const token = jwt.sign({ currentId: id})

                return {
                    statusCode: 200,
                    status: true,
                    message: 'login successfull',
                    currentuser,
                    currentId
                    // token
                }

            }
            else {
                return {
                    statusCode: 401,
                    status: false,
                    message: 'incorrect password or username'
                }

            }

        })
}



// const route = router.post('/employeeadd',(req,res)=>{
//     let empdet = new employeedetails({
//         firstname:req.body.firstname,
//         lastname: req.body.lastname,
//         birthdate:req.body.birthdate,
//         gender: req.body.gender,
//         education: req.body.education,
//         company: req.body.company,
//         jobExperience:req.body.jobExperience,
//         salary:req.body.salary
        
//     });
//     empdet.save((err,doc)=>{
//         if(err){
//             console.log('Error in post data' + err);
//         }
//         else{
//             res.send(doc);
//         }
//     })
// })


module.exports={
    register,
    login
    // router
}