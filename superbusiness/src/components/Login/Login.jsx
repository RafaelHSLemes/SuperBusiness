import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {username, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nome de usuário"
          value={setUsername}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={setPassword}
        />
        <button type="submit">Entrar</button>
      </form>
      <p>
        <Link to="/recuperar-senha">Esqueceu a senha? Redefina aqui!</Link>
      </p>
      <p>
        Ainda não tem uma conta? <Link to="/register">Faça o cadastro aqui!</Link>
      </p>
    </div>
  );
};

export default Login;