/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <div className='brand-name'>
                <h1>Stack Laibrary</h1>
            </div>
            <div className='navbar'>
                <div className="nav">
                    <a href="">Home</a>
                    <a href="">QNA</a>
                    <a href="">Login</a>
                </div>
                <div className='nav-img'>
                    <img src="/src/img/Ellipse 1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;