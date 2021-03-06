const express = require('express');

const router = express.Router();

router.get('/ninja',function(req,res){
    res.send({type : 'GET'});
});

router.post('/ninja',function(req,res){
    res.send({type : 'POST'});
});

router.put('/ninja/:id',function(req,res){
    res.send({type : 'PUT'});
});

router.delete('/ninja/:id',function(req,res){
    res.send({type : 'DELETE'});
});

module.exports = router;