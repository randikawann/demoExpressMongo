const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/ninja',function(req,res,next){
    res.send({type : 'GET'});
});

router.post('/ninja',function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
    
});
/*
router.put('/ninja/:id',function(req,res,next){
    // res.send({type : 'PUT'});
    Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(student){
        res.send(student);
    });
}); */
// this is defult one use findone.. that is use to find error easily. 
// otherwise we can't get idea when request address correct or not.
router.put('/ninja/:id',function(req,res,next){
    Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(student){
        Student.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
        
    });
});

router.delete('/ninja/:id',function(req,res,next){
    // console.log(req.params.id);
    // res.send({type : 'DELETE'});
    Student.findByIdAndRemove({_id: req.params.id}).then(function(student){
        res.send("removed "+student);
    });
});

module.exports = router;