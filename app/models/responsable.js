const mongoose = require('mongoose');

module.exports = mongoose.model("Responsable",{
    name: String,
    age: Number,
    gender: String,
    address: String,
    phone: Number,
    memberSince: String,
    store: String,
    email: String
});
