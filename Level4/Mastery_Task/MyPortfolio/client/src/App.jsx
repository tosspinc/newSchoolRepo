import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/pages/NavBar.jsx'
import Home from './components/pages/Home.jsx'
import Contact from './components/pages/Contact.jsx'
import Footer from './components/pages/Footer.jsx'
import './App.css'

export default function App() {

  return (
    <div className='app'>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  )
}