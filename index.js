const express = require('express');

const dataService = require('./services/data.service')


const routes =require('./route.js')

const cors=require('cors');
// const mongoose=require('./services/dbs.js');

const app =express();
app.use(express.json());

app.use(cors({origin:'http://localhost:4200'}));

app.listen(3001,()=>console.log('Server started at port 3001'));







app.post('/register', (req, res) => {
    console.log(req.body);
    dataService.register(req.body.uname,req.body.id,req.body.email,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
        
})


app.post('/login',(req,res)=>{
    console.log(req.body);
    dataService.login(req.body.id,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
})

app.set('/employee',routes);
