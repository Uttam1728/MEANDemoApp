const express = require("express");
const { isValidObjectId } = require("mongoose");

const { Employee } = require("../models/Employee");

// var router -> express.Router();
var router = express.Router();

// router.get('/something',(req,res) => {})
// localhost:3000/employees/
router.get('/',(req,res) => {
    Employee.find((err,data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log('Error retriving in data',JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id',(req,res) => {
    if(!isValidObjectId(req.params.id)){
        res.status(400).send("In Valid Object Id");
    }

    Employee.findById(req.params.id,(err,data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log('Error retriving in data',JSON.stringify(err,undefined,2));
        }
    });
});


/* Sample Data
{
    "name": "Ushank",
    "position": "Sr. Software manager",
    "salary": 60000,
    "office": "HHAeXchange"
}
*/
router.post('/',(req,res)=>{
    var emp = new Employee({
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    });
    emp.save((err,data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log('Error saving data',JSON.stringify(err,undefined,2));
        }
    });
});

router.put('/:id',(req,res) =>{
    if(!isValidObjectId(req.params.id)){
        res.status(400).send("In Valid Object Id");
    }
    var emp = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id,{$set : emp}, {new: true},(err,data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log('Error saving data',JSON.stringify(err,undefined,2));
        }
    });
});


router.delete('/:id',(req,res) =>{
    if(!isValidObjectId(req.params.id)){
        res.status(400).send("In Valid Object Id");
    }
    
    Employee.findByIdAndDelete(req.params.id,(err,data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log('Error saving data',JSON.stringify(err,undefined,2));
        }
    });
});

module.exports = router ;