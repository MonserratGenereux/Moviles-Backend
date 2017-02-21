const mongoose = require('mongoose');

module.exports = mongoose.model("Responsable",{
    name: String,
    age: Number,
    gender: char,
    address: String,
    phone: Number,
    MemberSince: String
});
