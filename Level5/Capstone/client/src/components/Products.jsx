import React from "react"

export default function products() {
    return (
        <section className="container product-section">
            <div className="shop-items">
                <div className="shop-item">
                    <span className="shop-item-title"> </span>
                    <img className="shop-item-image" src="" />
                    <div className="shop-item-details">
                        <span className="shop-item-price"> </span>
                        <button className="btn btn-cart" type="button">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}