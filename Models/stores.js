var mongoose = require('mongoose');

module.exports = mongoose.model("Stores",{
    name: String,
    location: String,
    responsable: String,
    phone: Number
});