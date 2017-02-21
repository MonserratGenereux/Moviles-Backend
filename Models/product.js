var mongoose = require('mongoose');

module.exports = mongoose.model("Product",{
    name: String,
    cost: Number,
    store: [mongoose.Schema.ObjectId],
    description: String
    
});