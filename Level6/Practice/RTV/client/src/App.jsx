import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import CurrentIssues from './pages/CurrentIssues'
import MyPosts from './pages/MyPosts'
import SignUp from './pages/SignUp'
import AddNewIssue from './pages/AddNewIssue'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (status) => {
    setIsLoggedIn(status)
  }
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login onLogin= {handleLogin} /> } />
        <Route path='/currentissues' element={isLoggedIn ? <CurrentIssues /> : <Navigate to='/' />} />
          <Route path='/myposts' element={isLoggedIn ? <MyPosts /> : <Navigate to='/' />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/addnewissue' element={isLoggedIn ? <AddNewIssue /> : <Navigate to='/'> />} />
      </Routes>
    </Router>
  )
}