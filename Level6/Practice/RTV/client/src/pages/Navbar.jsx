import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from '../pages/Popup';

import '../CssFiles/navbar.css';

export default function Navbar() {
    const [popupVisible, setPopupVisible] = useState(false)
    const navigate = useNavigate()

    const togglePopup = () => {
        setPopupVisible(!popupVisible)
    }

    const handleNavigation = (path) => {
        if (path === 'logout') {
            handleLogout()
        } else {
            navigate(path)
        }
    }

    const handlLogout = () => {
        // logout code goes here.
        console.log("Logged Out")
    }
    return (
        <nav className="navbar">
            <div className="navleft-logo">
                <Link to= '/'>
                    <img src="./src/assets/Imgs/RockTheVote.png" className="navbar-logo" />
                </Link>
            </div>
            <div className="navcenter-navigation">
                <div className="navigation-dropdown">
                    <select onChange={(e) => handleNavigation(e.target.value)}>
                        <option value="">Navigate to...</option>
                        <option value="/currentIssues">Current Issues</option>
                        <option value="/addNewIssue">Add New Issue</option>
                        <option value="/myPosts">My Posts</option>
                        <option value="/logout">Logout</option>
                    </select>
                </div>
            </div>
            <div className="navright-login">
                <button className="item-login" onClick={togglePopup}>
                    <img src="../src/assets/Imgs/Login.jpg" className="login-logo" />
                </button>
            </div>
            {popupVisible && <Popup closePopup={togglePopup} />}
        </nav>
    )
}