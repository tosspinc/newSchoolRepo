    import React from "react"
    import Carousel from "../components/Carousel"
    import Products from "../components/Products"

    export default function Home() {
        return (
            <>
                <div className="home-container">
                    <Carousel />
                    <Products />
                </div>
            </>
        )
    }