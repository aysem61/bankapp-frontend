import React from 'react'
import Banner from "../banner/Banner";
import Product from "../product/Product";
import About from "../about/About"
import "./Home.css";
import Price from "../price/Price"

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Product/>
            <Price/>
            
        </div>
    )
}

export default Home
