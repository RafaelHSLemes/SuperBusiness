const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username: String,
    password: String
})

const LoginModel = mongoose.model("login", RegisterSchema);

module.exports = LoginModel;