const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String
})

const RegisterModel = mongoose.model("register", RegisterSchema);

module.exports = RegisterModel;