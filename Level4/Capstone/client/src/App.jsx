import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
// import { Contect} from '../src/context/Context'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar />
          <Routes>
            <Route>
              
            </Route>
          </Routes>
        <Footer />
      </div>
    </>
  )
}

