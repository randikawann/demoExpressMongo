const express = require('express');

// set up express app
const app = express();

app.use('/api', require('./routes/api'));

// listen for request
app.listen(process.env.port || 3000, function(){
    console.log('now listning for request on port 3000');
});