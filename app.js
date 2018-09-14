// install body parser
// npm install body-parser --save


    
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

    // post json object through postman
    
/* {
    "name" : "ewfsdc",
    "rank" : "efsd"
}*/