import React, { useState, useContext } from 'react';
import { userContext } from '../context/userContext';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { signup } = useContext(userContext);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signup({ username, password });
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username}
                    name="username" 
                    onChange={handleUsernameChange}
                    placeholder="Username"
                    required 
                />
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password}
                    name="password" 
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    required 
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default Signup;
