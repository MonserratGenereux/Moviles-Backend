const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./router');

//Schemas 
const Responsable = require('./app/models/responsable');
const Product = require('./app/models/product');
const store = require('./app/models/stores');
const app = express();

//MiddleWare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

api.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

//REST functions
app.use('/api', api);

/////////////////////////////////////

//Connection
mongoose.connect("mongodb://localhost:27017/ProyectoMoviles", function(err,db){
    if(!err){
        console.log("we are connected to mongo");
    }
})

app.get('/', function(req, res){
	res.send('hola mundo');
});
const server = app.listen(port, function(){
    //Response of try to start server
    console.log("Listening on port", server.address().port )
})