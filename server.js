var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

//Schemas 
var Responsable = require('./models/responsable');
var Product = require('./models/product');
var store = require('./models/stores');

//MiddleWare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;
var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

//REST functions
//Item
app.use('/api', router);

/////////////////////////////////////

//Connection
mongoose.connect("mongodb://localhost:27017/test", function(err,db){
    if(!err){
        console.log("we are connected to mongo");
    }
})

app.get('/', function(req, res){
	res.send('hola mundo');
});
var server = app.listen(port, function(){
    //Response of try to start server
    console.log("Listening on port", server.address().port )
})