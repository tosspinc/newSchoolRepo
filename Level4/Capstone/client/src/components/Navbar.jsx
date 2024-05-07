import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
       <>
            <div>
                <nav className="navbar-top">
                    <div className="navleft-company-logo">
                        <Link to= '/'>
                            <img src="./src/assets/Imgs/Transp_Tosspi_logo.png" className="tosspi-logo" />
                        </Link>
                    </div>
                    <div className="navcenter-search">
                        <div className="search-container">
                            <button type="submit" className="all"> All <i className="fa fa-sort-desc"></i></button>
                            <input type="text" placeholder="Search Tosspi " />
                            <button type="submit" className="search"><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    <div className="navright-login">
                        <img src="./src/assets/Imgs/Login.jpg" className="login-logo" />
                        <div className="navright-shopping-cart">
                            <img src="./src/assets/Imgs/shopping-cart.jpg" className="cart-logo" />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}