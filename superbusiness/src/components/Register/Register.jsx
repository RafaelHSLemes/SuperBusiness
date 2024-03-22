import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

function Register() {

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {firstname, lastname, username, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    };

    return (
        <div className="register-container">
            <h1>Registro</h1>
            <form action='POST'>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Primeiro nome"
                    value={firstname}
                    onChange={(e) => { setfirstname(e.target.value) }}
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Sobrenome"
                    value={lastname}
                    onChange={(e) => { setlastname(e.target.value) }}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => { setusername(e.target.value) }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => { setemail(e.target.value) }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => { setpassword(e.target.value) }}
                />
                <button onClick={handleSubmit}>Registrar</button>
            </form>
            <p>
                Já possui uma conta? <Link to="/login">Faça login aqui</Link>
            </p>
        </div>
    );
};

export default Register;