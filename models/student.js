const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
    }
});

const Student = mongoose.model('student',StudentSchema);

module.exports = Student;