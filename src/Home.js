import React from 'react'
import "./Home.css"
import Product from './Product.js'

function Home() {
    return (
        <div className='Home'>
            <img className='home_image' src ='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='background'></img>
            <div className='home_row'>
                <div className='container'>
                <Product />
                {/* <Product /> */}
                {/* product */}
                </div>
            </div>
            <div className='row'>
                {/* product */}
                {/* product */}
                {/* product */}
            </div>
            <div className='row'>
                {/* product */}
            </div>
        </div>
    )
}

export default Home