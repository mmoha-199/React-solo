
import React from 'react';


export default function Navbar(){
   
        return(
            <nav className='navig'>
                <img className='logo' src='./img/tun-uk.png' alt='tun-uk-flag'/>
                <ul className='nav-list'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Galery</a></li>
                    <li><a href='#'>visit</a></li>
                    <li><a href='#'>Shop</a></li>
                </ul>
            </nav>
        )
};