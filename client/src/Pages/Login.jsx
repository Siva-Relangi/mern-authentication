import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import api from '../api/axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await api.post('/auth/login',{email, password});
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/profile');
    }catch(err){
      console.error(err.message);
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
