import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (status) => {
    setIsLoggedIn(status)
  }
  return (
    <Router>
      <Routes>
        
      </Routes>
    </Router>
  )
}