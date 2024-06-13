import React from "react";
import { Link } from 'react-router-dom';

export default function NavbarBottom() {
    return (
        <div className="navbar-bottom-container">
            <Link to='/appliance-products' className='item appliance-products'>Appliances</Link>
            <Link to='/books' className='item boos'>Books</Link>
            <Link to='/womans-clothing' className='item womans-clothing'>Women's</Link>
            <Link to='/mens-clothing' className='item mens-clothing'>Mens</Link>
            <Link to='/kids-products' className='item kids-products'>Kids</Link>
            <Link to='/pet-products' className='item pet-products'>Pets</Link>
            <div className="item shoes">Shoes</div>
            <div className="item household-goods">Household Goods</div>
            <div className="item electronic-goods">Electronics</div>
            <div className="item tools">Tools</div>
            <div className="item outdoor-products">Outdoor goods</div>
            <div className="item toy-products">Toys</div>
            <Link to='/books' className="item books">Books</Link>
            <div className="item sports-products">Sports</div>
            <div className="item all-products">All Products</div>
        </div>
    );
}
