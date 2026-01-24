import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import Profile from './Pages/Profile.jsx'
import { isLoggedIn } from './utils/auth.js'
function App() {

  const ProtectedRoute = ({child}) => {
    return isLoggedIn() ? child : <Navigate to="/login" replace/>
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute child={<Profile />} />} />
        </Routes>
    </Router>
  )
}

export default App
