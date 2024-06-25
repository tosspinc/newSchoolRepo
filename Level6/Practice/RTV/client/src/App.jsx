import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import Login from './pages/Login'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (status) => {
    setIsLoggedIn(status)
  }
  return (
    <div className='App'>
      <div className='nav'>
        <Navbar />
          <div className='main'>
            <Routes>
        
            </Routes>
          </div>  
      </div>
    </div>
  )
}