import { useState } from 'react'
import { Routes, Route  } from 'react-router-dom'
// import { Context} from '../src/context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import NavbarBottom from './components/NavbarBottom'
import ApplianceProducts from './pages/ApplianceProducts'
import WomensClothing from './pages/WomensClothing'
import MensClothing from './pages/MensClothing'
import KidsProducts from './pages/KidsProducts'
import './App.css'

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
            <Route path="/womens-clothing" element={<WomensClothing />} />
            <Route path="/mens-clothing" element={<MensClothing />} />
            <Route path="/kids-products" element={<KidsProducts />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

