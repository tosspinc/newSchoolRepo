import React, { useState } from 'react';
import '../cssFiles/popup.css';

const Popup = ({ closePopup }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={closePopup}>X</button>
                <div className="popup-content">
                    {isLogin ? (
                        <div>
                            <h2>Login</h2>
                            <form>
                                <label>Username:</label>
                                <input 
                                    type="text" 
                                    value={username}
                                    name="username" 
                                    onChange={handleUsernameChange}
                                    required />
                                <label>Password:</label>
                                <input 
                                    type="password" 
                                    value={password}
                                    name="password" 
                                    onChange={handlePasswordChange}
                                    required />
                                <button type="submit">Login</button>
                            </form>
                            <p onClick={() => setIsLogin(false)}>Don't have an account? Create one here.</p>
                        </div>
                    ) : (
                        <div>
                            <h2>Create Account</h2>
                            <form>
                                <label>Username:</label>
                                <input 
                                    type="text" 
                                    value={username}
                                    name="username" 
                                    onChange={handleUsernameChange}
                                    required />
                                <label>Password:</label>
                                <input 
                                    type="password" 
                                    value={password}
                                    name="password" 
                                    onChange={handlePasswordChange}
                                    required />
                                <button type="submit">Create Account</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Popup;
