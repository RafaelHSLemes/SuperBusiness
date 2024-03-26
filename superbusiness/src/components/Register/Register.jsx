import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Added useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/register', {
                firstname,
                lastname,
                username,
                email,
                password,
            });

            console.log(response)

            if (response.data.success) {
                navigate("/login"); // Redirect to login screen on success
            } else {
                setErrorMessage(response.data.message || 'Cadastro falhou!');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="register-container">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Primeiro nome"
                    value={firstname}
                    onChange={(e) => { setFirstname(e.target.value) }}
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Sobrenome"
                    value={lastname}
                    onChange={(e) => { setLastname(e.target.value) }}
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <input type="submit" value="Registrar" />
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            <p>
                Já possui uma conta? <Link to="/login">Faça login aqui</Link>
            </p>
        </div>
    );
};

export default Register;