import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="my-pic">
                <Link to='/'>
                    <img src="./src/assets/Imgs/Matts_pic.jpg" className="matts-pic" />
                </Link>
            </div>
        </div>
    )
}