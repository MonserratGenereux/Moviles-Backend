require('dotenv').load()

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const api = require('./router');

// Connect to Mongo
const connectMongo = require('./config/db')
connectMongo()

// Define backend server.
const app = express();

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

//REST functions
app.use('/', api);

app.get('/', function(req, res){
	res.send('Movile API');
});

const server = app.listen(port, function(){
    //Response of try to start server
    console.log("Magic happening on port", server.address().port )
})
