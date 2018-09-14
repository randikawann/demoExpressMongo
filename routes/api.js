const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/ninja',function(req,res){
    res.send({type : 'GET'});
});

router.post('/ninja',function(req,res){
    // var student = new student(req.body);
    // student.save();
    // not need those whole code
    Student.create(req.body).then(function(student){
        res.send(student);
    });
    
});

router.put('/ninja/:id',function(req,res){
    res.send({type : 'PUT'});
});

router.delete('/ninja/:id',function(req,res){
    res.send({type : 'DELETE'});
});

module.exports = router;