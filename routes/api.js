const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/ninja',function(req,res,next){
    res.send({type : 'GET'});
});

// edit this with "next" to error handler
router.post('/ninja',function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
    
});

router.put('/ninja/:id',function(req,res,next){
    res.send({type : 'PUT'});
});

router.delete('/ninja/:id',function(req,res,next){
    res.send({type : 'DELETE'});
});

module.exports = router;