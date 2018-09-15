const express = require('express');
const router = express.Router();

const Student = require('../models/student');

router.get('/ninja',function(req,res,next){
    Student.find({}).then(function(student){
        res.send(student);
    });

// get url params to lat and lng
// geo Near is not function future in mongoose.
/*    Student.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng),parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(student){
        res.send(student);
    });
*/
});

router.post('/ninja',function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
    
});

router.put('/ninja/:id',function(req,res,next){
    Student.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(student){
        Student.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
        
    });
});

router.delete('/ninja/:id',function(req,res,next){
    Student.findByIdAndRemove({_id: req.params.id}).then(function(student){
        res.send("removed "+student);
    });
});

module.exports = router;