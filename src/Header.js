import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className = 'header'>
            <img class='header_logo' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaByGVPZPrgh355Mezd3ylroYiLABc49Kgw&usqp=CAU" alt="amazon logo"/>

            <div className='header_search'>
                <input className='header_search_input' type='text'/>
        <SearchIcon className='header_searchicon'/>
            </div>
{/* change */}
            <div className='header_nav'>
                <div className='header_options'>
                    <span className='header_options1'>
                        Hello User
                    </span>
                    <span className='header_options2'>
                        Sign In
                    </span>
                </div>
                <div className='header_options'>
                    <span className='header_options1'>
                        Return
                    </span>
                    <span className='header_options2'>
                        Orders
                    </span>
                </div>
                <div className='header_options'>
                    <span className='header_options1'>
                        Your
                    </span>
                    <span className='header_options2'>
                        Prime
                    </span>
                </div>
                <div className='header_basket'>
                <ShoppingCartIcon/>
                <span className="header_options1 header_basketcount">0</span>
                </div>  
            </div>
        </div>
    )
}

export default Header
