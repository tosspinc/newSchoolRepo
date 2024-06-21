import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../CssFiles/login.css'

export default function Login({ onLogin }) {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const username = e.target.username.value
        const password = e.target.password.value

        try {
            
        } catch (error) {
            
        }
    }



    const handleSignUp = () => {
        navigate('/SignUp')
    }

    return (
        <div className='container'>
            <div className='login-container'>
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>
                    <div className='form-username'>
                        <label htmlFor='username'>UserName: </label>
                        <input type='text' id='username' name='username' required/>
                    </div>
                    <div className='form-password'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password' id='password' name='password' required/>
                    </div>
                    <button type='submt' className='login-button'>Login</button>
                </form>
                <p className='signup-button'>
                    Don't have an account? <button type='button' onClick={handleSignUp}>Sign Up</button>
                </p>
            </div>
        </div>
    )
}