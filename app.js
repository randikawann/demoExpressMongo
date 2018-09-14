// npm install express --save
// npm install nodemon --save-dev

const express = require('express');

// const routes = require('./routes/api');

// set up express app
const app = express();

// app.use(routes);
// app.use('/api',routes);
app.use('/api', require('./routes/api'));

// listen for request
app.listen(process.env.port || 3000, function(){
    console.log('now listning for request on port 3000');
});