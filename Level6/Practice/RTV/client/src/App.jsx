import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

export default function App() {
    return (
        <div className='App'>
            <div className='nav'>
                <Navbar />
                <div className='main'>
                    <Routes>
                        {/* Define your routes here */}
                    </Routes>
                </div>
            </div>
        </div>
    );
}
