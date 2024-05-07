import { useState } from 'react'
import { Routes, Route  } from 'react-router-dom'
// import { Context} from '../src/context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApplianceProducts from './pages/ApplianceProducts'
import './App.css'
import NavbarBottom from './components/NavbarBottom'

export default function App() {
  const [] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />
        <NavbarBottom />  
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/appliance-products" element={<ApplianceProducts />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

