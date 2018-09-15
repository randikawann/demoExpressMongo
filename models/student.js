const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create geo Schema & model
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point" 
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }

});

// create student Schema & model
const StudentSchema=new Schema({
    name : {
        type : String,
        required : [true, 'Name field is required']
    },
    rank : {
        type : String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Student = mongoose.model('student',StudentSchema);

module.exports = Student;