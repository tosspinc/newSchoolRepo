import { useState } from 'react'
import { Routes, Route  } from 'react-router-dom'
// import { Context} from '../src/context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
            <Route>
              
            </Route>
          </Routes>
        <Footer />
      </div>
    </>
  )
}

