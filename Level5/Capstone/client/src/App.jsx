import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Home from './pages/Home'
import NavbarBottom from './components/NavbarBottom'
import ApplianceParts from './pages/ApplianceParts'
import WomansClothing from './pages/WomansClothing'
import MensClothing from './pages/MensClothing'
import KidsProducts from './pages/KidsProducts'
import PetProducts from './pages/PetProducts'
import ContactInfo from './pages/ContactInfo'
import About from './pages/About'
import Books from './pages/Books'
import Careers from './pages/Careers'
import { ApplianceManufacturer } from './context/AppliancePartsContext'
import './App.css'

export default function App() {

  return (
    <ApplianceManufacturer>
      <div className='App'>
        <Navbar />
        <NavbarBottom />  
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/appliance-parts" element={<ApplianceParts />} />
            <Route path="/books" element={<Books />} />
            <Route path="/womans-clothing" element={<WomansClothing />} />
            <Route path="/mens-clothing" element={<MensClothing />} />
            <Route path="/kids-products" element={<KidsProducts />} />
            <Route path="/pet-products" element={<PetProducts />} />
            <Route path="/contact-info" element={<ContactInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
      </div>
    </ApplianceManufacturer>
  )
}

