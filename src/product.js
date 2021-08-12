import React from 'react'
import "./Product.css"

function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>The Lean Start-Up</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className='product_rating'>
                    <p>⭐</p>
                </div>
                <img src='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'/>
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;
