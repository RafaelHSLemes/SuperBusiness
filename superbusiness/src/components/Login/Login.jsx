import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insira aqui a lógica para enviar os dados do formulário para o backend
    alert('Dados enviados com sucesso!');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nome de usuário"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Entrar</button>
      </form>
      <p>
        <Link to="/recuperar-senha">Esqueceu a senha? Redefina aqui!</Link>
      </p>
      <p>
        Ainda não tem uma conta? <Link to="/registro">Faça o cadastro aqui!</Link>
      </p>
    </div>
  );
};

export default Login;