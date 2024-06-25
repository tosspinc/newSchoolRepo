import React, { useState } from 'react';
import '../CssFiles/popup.css';

const Popup = ({ closePopup }) => {
    const [isLogin, setIsLogin] = useState(true);

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
                                <input type="text" name="username" required />
                                <label>Password:</label>
                                <input type="password" name="password" required />
                                <button type="submit">Login</button>
                            </form>
                            <p onClick={() => setIsLogin(false)}>Don't have an account? Create one here.</p>
                        </div>
                    ) : (
                        <div>
                            <h2>Create Account</h2>
                            <form>
                                <label>Username:</label>
                                <input type="text" name="username" required />
                                <label>Password:</label>
                                <input type="password" name="password" required />
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