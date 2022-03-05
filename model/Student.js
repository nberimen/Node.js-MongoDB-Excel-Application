const mongoose = require("mongoose");

const Student = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    school: String
},{versionKey:false});

module.exports = mongoose.model("student", Student);