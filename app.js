// install mongoose 
// npm install mongoose --save

// creating schemas student.js

const express = require('express');
const bodyParser = require('body-parser');


// set up express app
const app = express();

app.use(bodyParser.json());

// for routing 
app.use('/api', require('./routes/api'));

// listen for request
app.listen(process.env.port || 3000, function(){
    console.log('now listning for request on port 3000');
});

