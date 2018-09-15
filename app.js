// add mongoose module to this to connect
// edit api.js
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/testdb');
mongoose.Promise = global.Promise;

// //////////////////////////////////////////////////////////////
// to access react comp
app.use(express.static('public'));
// add public folder also html and css file into it
// complete html and add script file for react
// create react component in index.html
// //////////////////////////////////////////////////////////////////


app.use(bodyParser.json());

// for routing 
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});

// listen for request
app.listen(process.env.port || 3000, function(){
    console.log('now listning for request on port 3000');
});

