var express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // Corrigindo o nome da função
const RegisterModel = require('../models/Register')

const router = express();
router.use(cors());
router.use(express.json());
router.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/superbusiness');

router.post('/register', (req, res) => {
    const {firstname, lastname, username, email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("E-mail já cadastrado!")
        } else {
            RegisterModel.create({firstname: firstname, lastname: lastname, username: username, email: email, password: password})
            .then(result => res.json("Conta criada com sucesso!"))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})

module.exports = router;