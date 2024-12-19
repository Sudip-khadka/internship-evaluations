// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
      </BrowserRouter>
  )
}

export default App
