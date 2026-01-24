import React, {use, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import api from '../api/axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await api.post('/auth/register', {username, email, password});
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/profile');
    }catch(err){
      console.error(err.message);
    }
  };

  return (
    <div>
      Welcome to Register Page
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type='submit'>Register</button>
        <div>Already have an account? <Link to="/login">Login</Link></div>
      </form>
    </div>
  )
}

export default Register
