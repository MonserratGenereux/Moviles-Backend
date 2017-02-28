const mongoose = require('mongoose');
const mongodbUri = require('mongodb-uri');

module.exports = function() {

  const uri = mongodbUri.format({
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PASS,
      hosts: [{
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PASS
      }],
      database: process.env.MONGO_DBNAME
  });

  //Connection
  mongoose.connect(uri, (err, db) => {
      if(!err){
        console.log("Connected to Mongo:", uri);
      } else {
        console.log("Not able to connect to Mongo instance:", uri);
      }
  })

}
