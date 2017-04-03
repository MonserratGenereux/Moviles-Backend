const mongoose = require('mongoose');

module.exports = mongoose.model("Product",{
    name: String,
    cost: Number,
    store: String,
    categories: String,
    description: String

});
