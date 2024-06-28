import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
    return (
        <div className='App'>
            <div className='nav'>
                <Navbar />
                    <div className='main'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path='user-issues' element={<PrivateRoute><UserCurrentIssues /></PrivateRoute} */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}

//PrivateRoute component helps protect user-specific routes
// const PrivateRoute = ({ Children }) => {
//     const { useState } = useContext(userContext)
//     return UserState.token ? children : <Navigate to='/' />
// }