const mongoose = require('mongoose');

module.exports = mongoose.model("Store",{
    name: String,
    location: String,
    responsable: String,
    phone: Number,
});
