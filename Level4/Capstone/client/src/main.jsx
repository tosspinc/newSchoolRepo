import React, { StrictMode } from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import {ContextProvider} from './context/Context'
import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
      <Router>
        <ContextProvider>
          <App />
        </ContextProvider>
      </Router>
    </StrictMode>
)