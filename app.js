// add mongoose module to this to connect
// edit api.js
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');


// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/testdb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// for routing 
app.use('/api', require('./routes/api'));

// listen for request
app.listen(process.env.port || 3000, function(){
    console.log('now listning for request on port 3000');
});

