var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');

var app = express();
var port = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect('mongodb+srv://thiago:1234@cluster0-f8dkl.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});