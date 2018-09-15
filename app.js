var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

// All environment
app.set('port', process.env.PORT || 3000);
app.set('view', __direname +'/views');
app.set('view engine','jade');

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.route);
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost/testdb');

var Schema = new mongoose.Schema({
    __id : String,
    name : String,
    age : Number
});

var user = mongoose.model('emp',Schema);

var server = http.createServer(app).listen(app.get('port'),function(){
    console.log('Express server listning port '+app.get('port'));
})